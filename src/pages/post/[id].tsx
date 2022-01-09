import React, { ReactElement, useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { withSSRContext } from "aws-amplify";
import { getPost, listPosts } from "../../graphql/queries";
import { GetPostQuery, ListPostsQuery, Post, Comment } from "../../API";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { AnnotationIcon } from "@heroicons/react/solid";
import CommentPreview from "../../components/CommentPreview";

interface Props {
  post: Post;
}

// TODO: Submit comments
// TODO: Like button functionality
// TODO: Next post
// TODO: owner picture
// Templated from https://github.com/tailwindtoolbox/Minimal-Blog/blob/master/index.html
export default function IndividualPost({ post }: Props): ReactElement {
  const [likedEffect, setLikeEffect] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const onLikePost = (event) => {
    event.stopPropagation();
    // Like button animation
    if (!likedEffect) {
      setLikeEffect(true);
      setTimeout(() => {
        setLikeEffect(false);
      }, 1500);
    }
  };

  const onShowComments = async (event) => {
    event.stopPropagation();
    try {
      // TODO: Why the nextToken is alawys null for the post comments?
      const postComments = post.comments;
      if (postComments?.items) {
        setComments(postComments!.items as Comment[]);
        setShowComments(!showComments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container w-full max-w-screen-sm mx-auto pt-5">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
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
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        {/* <!--Likes and replies buttons--> */}
        <div className="mt-4 mb-4 flex items-center">
          <button
            className="flex items-center hover:bg-gray-100 rounded p-1"
            onClick={onLikePost}
          >
            <ThumbUpIcon
              className={`${likedEffect && "animate-bounce"} h-6 text-gray-500`}
            ></ThumbUpIcon>
            <span className="text-sm text-gray-500 font-semibold">
              &nbsp;{post.upvotes}&nbsp;Likes&nbsp;&nbsp;
            </span>
          </button>

          <button
            className="flex items-center hover:bg-gray-100 rounded p-1"
            onClick={onShowComments}
          >
            &nbsp;&nbsp;
            <AnnotationIcon className="h-6 text-gray-500"></AnnotationIcon>
            <span className="text-sm text-gray-500 font-semibold">
              &nbsp;
              {post.comments?.items ? post.comments?.items.length : 0}
              &nbsp;Replies
            </span>
          </button>
        </div>

        {/* Toggle Comments */}
        {showComments && comments && (
          <div className="space-y-4" onClick={(e) => e.stopPropagation()}>
            {comments.map((comment) => (
              <CommentPreview
                key={comment.id}
                comment={comment}
              ></CommentPreview>
            ))}
          </div>
        )}
      </div>
      {/* Leave a comment */}
      <div className="w-full px-4 flex items-center mb-4">
        <textarea
          placeholder="What are your thoughts?"
          className="flex-1 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"
        ></textarea>
      </div>

      <div className="w-full px-4 flex items-center">
        {" "}
        <div className="justify-end">
          <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">
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
