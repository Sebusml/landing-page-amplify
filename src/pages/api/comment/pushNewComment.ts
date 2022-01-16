import { API } from "aws-amplify";
import {
  Comment,
  CreateCommentInput,
  CreateCommentMutation,
} from "../../../API";
import { createComment } from "../../../graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

export default async function pushNewComment(
  postId: string,
  commentContent: string
) {
  const newCommentInput: CreateCommentInput = {
    postCommentsId: postId,
    content: commentContent,
  };

  const { data } = (await API.graphql({
    query: createComment,
    variables: { input: newCommentInput },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: CreateCommentMutation };

  return data.createComment as Comment;
}
