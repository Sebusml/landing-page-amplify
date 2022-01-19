import { API } from "aws-amplify";
import { onCommentByPostId } from "../../../graphql/subscriptions";
import Observable from "zen-observable-ts";
import { OnCommentByPostIdSubscription, Comment } from "../../../API";
import { Dispatch, SetStateAction } from "react";

interface GraphQlResponse {
  value: { data: OnCommentByPostIdSubscription };
}

export default function subscribeToNewCommentInPost(
  postId: string,
  setComments: Dispatch<SetStateAction<Comment[]>>
) {
  const ql = API.graphql({
    query: onCommentByPostId,
    variables: {
      postCommentsId: postId,
    },
  }) as Observable<object>;

  const commentsSubscription = ql.subscribe({
    next: (payload: GraphQlResponse) => {
      setComments((comments) => [
        ...comments,
        payload.value.data.onCommentByPostId as Comment,
      ]);
    },
    error: (payload) => console.log("ERROR!!! ", payload),
  });
  return commentsSubscription;
}
