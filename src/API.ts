/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNewsLetterSubscribersInput = {
  id?: string | null,
  email: string,
};

export type ModelNewsLetterSubscribersConditionInput = {
  email?: ModelStringInput | null,
  and?: Array< ModelNewsLetterSubscribersConditionInput | null > | null,
  or?: Array< ModelNewsLetterSubscribersConditionInput | null > | null,
  not?: ModelNewsLetterSubscribersConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type NewsLetterSubscribers = {
  __typename: "NewsLetterSubscribers",
  id: string,
  email: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNewsLetterSubscribersInput = {
  id: string,
  email?: string | null,
};

export type DeleteNewsLetterSubscribersInput = {
  id: string,
};

export type CreateContactMessageInput = {
  id?: string | null,
  email: string,
  nameFull: string,
  message: string,
};

export type ModelContactMessageConditionInput = {
  email?: ModelStringInput | null,
  nameFull?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactMessageConditionInput | null > | null,
  or?: Array< ModelContactMessageConditionInput | null > | null,
  not?: ModelContactMessageConditionInput | null,
};

export type ContactMessage = {
  __typename: "ContactMessage",
  id: string,
  email: string,
  nameFull: string,
  message: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContactMessageInput = {
  id: string,
  email?: string | null,
  nameFull?: string | null,
  message?: string | null,
};

export type DeleteContactMessageInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  type: string,
  title: string,
  contents: string,
  image?: string | null,
  upvotes: number,
  createdAt?: string | null,
};

export type ModelPostConditionInput = {
  type?: ModelStringInput | null,
  title?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  image?: ModelStringInput | null,
  upvotes?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  type: string,
  title: string,
  contents: string,
  image?: string | null,
  upvotes: number,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  postId: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePostInput = {
  id: string,
  type?: string | null,
  title?: string | null,
  contents?: string | null,
  image?: string | null,
  upvotes?: number | null,
  createdAt?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  postId: string,
  content: string,
  createdAt?: string | null,
};

export type ModelCommentConditionInput = {
  postId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  postId?: string | null,
  content?: string | null,
  createdAt?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreatePostLikeInput = {
  id?: string | null,
  postID: string,
  value: number,
};

export type ModelPostLikeConditionInput = {
  postID?: ModelIDInput | null,
  value?: ModelIntInput | null,
  and?: Array< ModelPostLikeConditionInput | null > | null,
  or?: Array< ModelPostLikeConditionInput | null > | null,
  not?: ModelPostLikeConditionInput | null,
};

export type PostLike = {
  __typename: "PostLike",
  id: string,
  postID: string,
  value: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePostLikeInput = {
  id: string,
  postID?: string | null,
  value?: number | null,
};

export type DeletePostLikeInput = {
  id: string,
};

export type ModelNewsLetterSubscribersFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelNewsLetterSubscribersFilterInput | null > | null,
  or?: Array< ModelNewsLetterSubscribersFilterInput | null > | null,
  not?: ModelNewsLetterSubscribersFilterInput | null,
};

export type ModelNewsLetterSubscribersConnection = {
  __typename: "ModelNewsLetterSubscribersConnection",
  items:  Array<NewsLetterSubscribers | null >,
  nextToken?: string | null,
};

export type ModelContactMessageFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  nameFull?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactMessageFilterInput | null > | null,
  or?: Array< ModelContactMessageFilterInput | null > | null,
  not?: ModelContactMessageFilterInput | null,
};

export type ModelContactMessageConnection = {
  __typename: "ModelContactMessageConnection",
  items:  Array<ContactMessage | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  title?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  image?: ModelStringInput | null,
  upvotes?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelPostLikeFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  value?: ModelIntInput | null,
  and?: Array< ModelPostLikeFilterInput | null > | null,
  or?: Array< ModelPostLikeFilterInput | null > | null,
  not?: ModelPostLikeFilterInput | null,
};

export type ModelPostLikeConnection = {
  __typename: "ModelPostLikeConnection",
  items:  Array<PostLike | null >,
  nextToken?: string | null,
};

export type CreateNewsLetterSubscribersMutationVariables = {
  input: CreateNewsLetterSubscribersInput,
  condition?: ModelNewsLetterSubscribersConditionInput | null,
};

export type CreateNewsLetterSubscribersMutation = {
  createNewsLetterSubscribers?:  {
    __typename: "NewsLetterSubscribers",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNewsLetterSubscribersMutationVariables = {
  input: UpdateNewsLetterSubscribersInput,
  condition?: ModelNewsLetterSubscribersConditionInput | null,
};

export type UpdateNewsLetterSubscribersMutation = {
  updateNewsLetterSubscribers?:  {
    __typename: "NewsLetterSubscribers",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNewsLetterSubscribersMutationVariables = {
  input: DeleteNewsLetterSubscribersInput,
  condition?: ModelNewsLetterSubscribersConditionInput | null,
};

export type DeleteNewsLetterSubscribersMutation = {
  deleteNewsLetterSubscribers?:  {
    __typename: "NewsLetterSubscribers",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContactMessageMutationVariables = {
  input: CreateContactMessageInput,
  condition?: ModelContactMessageConditionInput | null,
};

export type CreateContactMessageMutation = {
  createContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email: string,
    nameFull: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContactMessageMutationVariables = {
  input: UpdateContactMessageInput,
  condition?: ModelContactMessageConditionInput | null,
};

export type UpdateContactMessageMutation = {
  updateContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email: string,
    nameFull: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContactMessageMutationVariables = {
  input: DeleteContactMessageInput,
  condition?: ModelContactMessageConditionInput | null,
};

export type DeleteContactMessageMutation = {
  deleteContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email: string,
    nameFull: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    type: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    type: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    type: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePostLikeMutationVariables = {
  input: CreatePostLikeInput,
  condition?: ModelPostLikeConditionInput | null,
};

export type CreatePostLikeMutation = {
  createPostLike?:  {
    __typename: "PostLike",
    id: string,
    postID: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePostLikeMutationVariables = {
  input: UpdatePostLikeInput,
  condition?: ModelPostLikeConditionInput | null,
};

export type UpdatePostLikeMutation = {
  updatePostLike?:  {
    __typename: "PostLike",
    id: string,
    postID: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePostLikeMutationVariables = {
  input: DeletePostLikeInput,
  condition?: ModelPostLikeConditionInput | null,
};

export type DeletePostLikeMutation = {
  deletePostLike?:  {
    __typename: "PostLike",
    id: string,
    postID: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetNewsLetterSubscribersQueryVariables = {
  id: string,
};

export type GetNewsLetterSubscribersQuery = {
  getNewsLetterSubscribers?:  {
    __typename: "NewsLetterSubscribers",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNewsLetterSubscribersQueryVariables = {
  filter?: ModelNewsLetterSubscribersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNewsLetterSubscribersQuery = {
  listNewsLetterSubscribers?:  {
    __typename: "ModelNewsLetterSubscribersConnection",
    items:  Array< {
      __typename: "NewsLetterSubscribers",
      id: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContactMessageQueryVariables = {
  id: string,
};

export type GetContactMessageQuery = {
  getContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email: string,
    nameFull: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContactMessagesQueryVariables = {
  filter?: ModelContactMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactMessagesQuery = {
  listContactMessages?:  {
    __typename: "ModelContactMessageConnection",
    items:  Array< {
      __typename: "ContactMessage",
      id: string,
      email: string,
      nameFull: string,
      message: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    type: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      type: string,
      title: string,
      contents: string,
      image?: string | null,
      upvotes: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByDateQueryVariables = {
  type: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByDateQuery = {
  postsByDate?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      type: string,
      title: string,
      contents: string,
      image?: string | null,
      upvotes: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      postId: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostLikeQueryVariables = {
  id: string,
};

export type GetPostLikeQuery = {
  getPostLike?:  {
    __typename: "PostLike",
    id: string,
    postID: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPostLikesQueryVariables = {
  filter?: ModelPostLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostLikesQuery = {
  listPostLikes?:  {
    __typename: "ModelPostLikeConnection",
    items:  Array< {
      __typename: "PostLike",
      id: string,
      postID: string,
      value: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCommentByPostIdSubscriptionVariables = {
  postId: string,
};

export type OnCommentByPostIdSubscription = {
  onCommentByPostId?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateNewsLetterSubscribersSubscription = {
  onCreateNewsLetterSubscribers?:  {
    __typename: "NewsLetterSubscribers",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNewsLetterSubscribersSubscription = {
  onUpdateNewsLetterSubscribers?:  {
    __typename: "NewsLetterSubscribers",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNewsLetterSubscribersSubscription = {
  onDeleteNewsLetterSubscribers?:  {
    __typename: "NewsLetterSubscribers",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContactMessageSubscription = {
  onCreateContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email: string,
    nameFull: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactMessageSubscription = {
  onUpdateContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email: string,
    nameFull: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactMessageSubscription = {
  onDeleteContactMessage?:  {
    __typename: "ContactMessage",
    id: string,
    email: string,
    nameFull: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    type: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    type: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    type: string,
    title: string,
    contents: string,
    image?: string | null,
    upvotes: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePostLikeSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostLikeSubscription = {
  onCreatePostLike?:  {
    __typename: "PostLike",
    id: string,
    postID: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePostLikeSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePostLikeSubscription = {
  onUpdatePostLike?:  {
    __typename: "PostLike",
    id: string,
    postID: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePostLikeSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostLikeSubscription = {
  onDeletePostLike?:  {
    __typename: "PostLike",
    id: string,
    postID: string,
    value: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
