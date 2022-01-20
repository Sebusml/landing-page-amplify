import { createPostLike } from "../../../graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
import {
  CreatePostLikeInput,
  CreatePostLikeMutation,
  PostLike,
} from "../../../API";

export default async function pushNewLike(postID: string, value: number = 1) {
  const newPostLikeInput: CreatePostLikeInput = { postID, value };

  const { data } = (await API.graphql({
    query: createPostLike,
    variables: { input: newPostLikeInput },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: CreatePostLikeMutation };

  return data.createPostLike as PostLike;
}
