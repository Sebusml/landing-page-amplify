import React, { ReactElement, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { API, graphqlOperation, withSSRContext } from "aws-amplify";
import { getPost, listPosts } from "../../graphql/queries";
import { GetPostQuery, ListPostsQuery, Post, Comment } from "../../API";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { AnnotationIcon } from "@heroicons/react/solid";
import CommentPreview from "../../components/CommentPreview";
import { useUser } from "../../context/AuthContext";
import { useRouter } from "next/router";
import pushNewComment from "../api/comment/pushNewComment";
import subscribeToNewCommentInPost from "../api/comment/subscribeToNewCommentInPost";
import incrementLikesCount from "../api/postLike/pushNewLike";
import LikeButton from "../../components/LikeButton";

interface Props {
  post: Post;
}

interface CommentFormInput {
  content: string;
  owner: string;
}

// TODO: Next post
// TODO: owner picture
// Templated from https://github.com/tailwindtoolbox/Minimal-Blog/blob/master/index.html
export default function IndividualPost({ post }: Props): ReactElement {
  const router = useRouter();
  const { user } = useUser();
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>(
    post.comments?.items as Comment[]
  );

  const { register, resetField, handleSubmit } = useForm<CommentFormInput>();

  const toggleShowComments = () => setShowComments((old) => !old);

  const onSubmitComment: SubmitHandler<CommentFormInput> = async (
    newComment
  ) => {
    // Only logged users can comment
    if (!user) {
      router.push(`/signin`);
      return;
    }
    // Show comments so user can see his new comment
    if (!showComments) {
      setShowComments(true);
    }

    pushNewComment(post.id, newComment.content)
      .then((_) => resetField("content")) // Ignore new comment obj response since updates are done with subscription
      .catch((error) => console.log(error));
  };

  // Initially get comments from Post object
  useEffect(() => {
    if (post.comments?.items) {
      setComments(post.comments?.items as Comment[]);
    }
  }, [post.comments?.items]);

  // Subscribe to new comments in post.
  // TODO: Subscribe to Likes
  useEffect(() => {
    const newCommentSubscription = subscribeToNewCommentInPost(
      post.id,
      setComments
    );
    // cleanup
    return () => {
      newCommentSubscription.unsubscribe();
    };
  }, [post.id]);

  return (
    <div className="container w-full max-w-screen-sm mx-auto pt-5">
      <div className="w-full px-4 text-xl text-gray-800 leading-normal">
        {/* Title */}
        <div className="font-sans">
          <p className="text-base md:text-sm text-green-500 font-bold">
            &lt;{" "}
            <Link href="/">
              <a className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">
                BACK TO MAIN PAGE
              </a>
            </Link>
          </p>
          <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            {post.title}
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-600">
            Published {new Date(post.createdAt).toDateString()}
          </p>
        </div>
        <p className="py-6">{post.contents}</p>
      </div>
      {/* <!--Divider--> */}
      <div className="flex w-full px-4 text-xl text-gray-800 leading-normal">
        {/* <!--Likes and replies buttons--> */}
        <div className="mt-4 mb-4 flex items-center">
          <LikeButton
            post={post}
            path={`/signin`}
            incrementLikesCount={incrementLikesCount}
          ></LikeButton>
        </div>
        <div className="mt-4 mb-4 flex items-center">
          <button
            className="flex items-center hover:bg-gray-100 rounded p-1"
            onClick={toggleShowComments}
          >
            &nbsp;&nbsp;
            <AnnotationIcon className="h-6 text-gray-500"></AnnotationIcon>
            <span className="text-sm text-gray-500 font-semibold">
              &nbsp;
              {comments.length}
              &nbsp;Replies
            </span>
          </button>
        </div>
      </div>
      {/* Toggle comment secction */}
      {showComments && comments && (
        <div className="w-full px-4 items-center mb-4">
          <ul
            className="space-y-4 last:mb-4"
            onClick={(e) => e.stopPropagation()}
          >
            {comments.map((comment) => (
              <CommentPreview
                key={comment.id}
                comment={comment}
              ></CommentPreview>
            ))}
          </ul>
        </div>
      )}

      {/* Leave a comment */}
      <div className="w-full px-4 flex items-center mb-4">
        <form
          id="commentForm"
          method="POST"
          onSubmit={handleSubmit(onSubmitComment)}
          className="w-full flex items-center mb-4"
        >
          <textarea
            id="commentTextArea"
            placeholder="What are your thoughts?"
            required
            className="w-full flex appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"
            {...register("content", {
              required: {
                value: true,
                message: "Comment cannot be empty",
              },
              maxLength: {
                value: 500,
                message: "Comments must be less than 500 characters",
              },
            })}
          ></textarea>
        </form>
      </div>

      <div className="w-full px-4 flex items-center">
        {" "}
        <div className="justify-end">
          <button
            className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full"
            type="submit"
            form="commentForm"
            value="Submit"
          >
            Submit
          </button>
        </div>
      </div>
      <hr className="border-b-2 border-gray-400 mb-8 mt-8 mx-4" />
      {/* <!--Author--> */}
      <div className="flex w-full items-center font-sans px-4">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="http://i.pravatar.cc/300"
          alt="Avatar of Author"
        />
        <div className="flex-1 px-2">
          <p className="text-base font-bold text-base md:text-xl leading-none mb-2">
            {post.owner}
          </p>
          <p className="text-gray-600 text-xs md:text-base">Blogger</p>
        </div>
      </div>
      {/* <!--Divider--> */}
      <hr className="border-b-2 border-gray-400 mt-8 mb-8 mx-4" />
      {/* <!--Next & Prev Links--> */}
      <div className="font-sans flex justify-end px-4 pb-12">
        <div className="text-right">
          <span className="text-xs md:text-sm font-normal text-gray-600">
            Next Post &gt;
          </span>
          <br />
          <p>
            <a
              href="#"
              className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
            >
              Blog title
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// TODO: Will need to test this one in prod(?) CDN posts can have a stale version of comments and likes!
// only the owner and the content is static
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const SSR = withSSRContext();

  const { data, errors } = (await SSR.API.graphql({
    query: getPost,
    variables: {
      id: params?.id,
    },
  })) as {
    data: GetPostQuery;
    errors: any[];
  };

  return {
    props: {
      post: data.getPost,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const SSR = withSSRContext();

  const { data, errors } = (await SSR.API.graphql({
    query: listPosts,
  })) as {
    data: ListPostsQuery;
    errors: any[];
  };

  const paths = data.listPosts!.items.map((post) => ({
    params: { id: post!.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
};
