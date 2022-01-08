import { ReactElement, useState } from "react";
import { ThumbUpIcon, AnnotationIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import CommentPreview from "./CommentPreview";
import { API, graphqlOperation } from "aws-amplify";
import { listComments } from "../graphql/queries";
import { Post, ListCommentsQuery, Comment } from "../API";

interface Props {
  post: Post;
}

// TODO: Add Likes mutations and state
// TODO: Fetch number of comments for a post
// TODO: (optional) Give loged users the option to comment on posts.
export default function PostPreview({ post }: Props): ReactElement {
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
    try {
      // TODO: Why the nextToken is alawys null for the post comments?
      const postComments = (await API.graphql(
        graphqlOperation(listComments, {
          filter: {
            postCommentsId: {
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
        setShowComments(!showComments);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <CommentPreview key={comment.id} comment={comment}></CommentPreview>
          ))}
        </div>
      )}
    </div>
  );
}
