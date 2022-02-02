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
  const [likedEffect, setLikeEffect] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const formattedDate = new Date(post.createdAt).toDateString();
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
    if (comments) {
      setShowComments((showComments) => !showComments);
    }
  };

  const getComments = async () => {
    console.log("get comments");
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
  }, []);

  return (
    <div
      className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
      onClick={() => router.push(`/post/${post.id}`)}
    >
      <span className="text-xs">
        Posted by <strong>{post.owner}</strong> at {formattedDate}
      </span>

      <p className="text-m">
        <strong>{post.title}</strong>
      </p>

      <p className="text-sm">{post.contents}</p>

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
    </div>
  );
}
