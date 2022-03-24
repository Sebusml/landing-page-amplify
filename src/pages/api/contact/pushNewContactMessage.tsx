import { API } from "aws-amplify";
import {
  ContactMessage,
  CreateContactMessageInput,
  CreateContactMessageMutation,
} from "../../../API";
import { createContactMessage } from "../../../graphql/mutations";

export default async function pushNewContactMessage(
  contactMessage: ContactMessage
) {
  const newCommentInput: CreateContactMessageInput = { ...contactMessage };

  const { data } = (await API.graphql({
    query: createContactMessage,
    variables: { input: newCommentInput },
  })) as { data: CreateContactMessageMutation };

  return data.createContactMessage as ContactMessage;
}
