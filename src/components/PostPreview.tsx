import { ReactElement, useEffect, useState } from "react";
import { ThumbUpIcon, AnnotationIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import CommentPreview from "./CommentPreview";
import { API, graphqlOperation } from "aws-amplify";
import { listComments } from "../graphql/queries";
import { Post, ListCommentsQuery, Comment } from "../API";
import LikeButton from "./LikeButton";

interface Props {
  post: Post;
  likeButtonCallback: Function;
}

// tailwind code sourced from https://tailwindcomponents.com/component/comment-section
export default function PostPreview({
  post,
  likeButtonCallback,
}: Props): ReactElement {
  const router = useRouter();
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const formattedDate = new Date(post.createdAt).toDateString();

  const onShowComments = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (comments && comments.length > 0) {
      setShowComments((showComments) => !showComments);
    }
  };

  const getComments = async () => {
    try {
      const postComments = (await API.graphql(
        graphqlOperation(listComments, {
          filter: {
            postId: {
              eq: post.id,
            },
          },
        })
      )) as {
        data: ListCommentsQuery;
        errors: any[];
      };
      if (postComments.data.listComments) {
        setComments(postComments.data.listComments.items as Comment[]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Load comments at first render
  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <li
      className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed hover:cursor-pointer"
      onClick={() => router.push(`/post/${post.id}`)}
    >
      <span className="text-xs">
        Posted by <strong>{post.owner}</strong> at {formattedDate}
      </span>

      <p className="text-m">
        <strong>{post.title}</strong>
      </p>

      <p className="text-sm max-h-40 text-transparent bg-clip-text bg-gradient-to-b from-black to-transparent">
        {post.contents}
      </p>

      <div className="mt-4 flex items-center">
        <LikeButton
          post={post}
          path={`/signin`}
          incrementLikesCount={likeButtonCallback}
        ></LikeButton>

        <button
          className="flex items-center hover:bg-gray-100 rounded p-1"
          onClick={onShowComments}
        >
          &nbsp;&nbsp;
          <AnnotationIcon className="h-6 text-gray-500"></AnnotationIcon>
          <span className="text-sm text-gray-500 font-semibold">
            &nbsp;
            {comments ? comments.length : 0}
            &nbsp;Replies
          </span>
        </button>
      </div>
      {/* Toggle Comments */}
      {showComments && comments && (
        <ul className="mt-4 space-y-4" onClick={(e) => e.stopPropagation()}>
          {comments.map((comment) => (
            <CommentPreview key={comment.id} comment={comment}></CommentPreview>
          ))}
        </ul>
      )}
    </li>
  );
}
