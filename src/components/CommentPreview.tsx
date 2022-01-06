import { ReactElement, useState } from "react";
import { Comment } from "../API";

interface Props {
  comment: Comment;
}

export default function CommentPreview({ comment }: Props): ReactElement {
  const formattedDate = new Date(comment.createdAt).toDateString();

  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-3">
        <img
          className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
          src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
          alt=""
        />
      </div>
      <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
        <strong>{comment.owner}</strong>{" "}
        <span className="text-xs text-gray-400">{formattedDate}</span>
        <p className="text-xs sm:text-sm">{comment.content}</p>
      </div>
    </div>
  );
}
