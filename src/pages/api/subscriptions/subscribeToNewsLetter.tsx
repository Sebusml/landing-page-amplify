import { createNewsLetterSubscribers } from "../../../graphql/mutations";
import { API } from "aws-amplify";
import {
  CreateNewsLetterSubscribersInput,
  CreateNewsLetterSubscribersMutation,
  NewsLetterSubscribers,
} from "../../../API";

export default async function subscribeToNewsLetter(email: string) {
  const input: CreateNewsLetterSubscribersInput = { email };

  const { data } = (await API.graphql({
    query: createNewsLetterSubscribers,
    variables: { input },
  })) as { data: CreateNewsLetterSubscribersMutation };

  return data.createNewsLetterSubscribers as NewsLetterSubscribers;
}
