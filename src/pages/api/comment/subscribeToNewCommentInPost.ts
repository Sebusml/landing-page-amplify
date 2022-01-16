import { API } from "aws-amplify";
import { onCommentByPostId } from "../../../graphql/subscriptions";
import Observable from "zen-observable-ts";
import { OnCommentByPostIdSubscription } from "../../../API";

interface GraphQlResponse {
  value: { data: OnCommentByPostIdSubscription };
}

export default function subscribeToNewCommentInPost(
  postId: string,
  callback: CallableFunction
) {
  const ql = API.graphql({
    query: onCommentByPostId,
    variables: {
      postCommentsId: postId,
    },
  }) as Observable<object>;

  const commentsSubscription = ql.subscribe({
    next: (payload: GraphQlResponse) => {
      callback(payload.value.data.onCommentByPostId);
    },
    error: (payload) => console.log("ERROR!!! ", payload),
  });
  return commentsSubscription;
}
