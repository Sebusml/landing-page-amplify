import { createPostLike } from "../../../graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
import {
  CreatePostLikeInput,
  CreatePostLikeMutation,
  PostLike,
} from "../../../API";

/**
 * Increment the likes count of a post by the value amount.
 *
 * @param postID
 * @param value number of likes to add.
 * @returns Promise
 */
export default async function pushNewLike(postID: string, value: number = 1) {
  const newPostLikeInput: CreatePostLikeInput = { postID, value };
  if (value == 0) {
    throw new Error("not a big deal, avoid request");
  }

  const { data } = (await API.graphql({
    query: createPostLike,
    variables: { input: newPostLikeInput },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: CreatePostLikeMutation };

  return data.createPostLike as PostLike;
}
