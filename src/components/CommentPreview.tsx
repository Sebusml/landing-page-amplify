import { ReactElement, useState } from "react";
import { Comment } from "../API";

interface Props {
  comment: Comment;
}

export default function CommentPreview({ comment }: Props): ReactElement {
  const formattedDate = new Date(comment.createdAt).toDateString();

  return (
    <li className="flex mb-4">
      <div className="flex-shrink-0 mr-3">
        <img
          className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
          src="http://i.pravatar.cc/50"
          alt=""
        />
      </div>
      <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 leading-relaxed">
        <span className="text-sm font-bold">{comment.owner}</span>{" "}
        <span className="text-xs text-gray-400">{formattedDate}</span>
        <p className="text-xs sm:text-sm">{comment.content}</p>
      </div>
    </li>
  );
}
