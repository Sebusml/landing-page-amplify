/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewsLetterSubscribers = /* GraphQL */ `
  mutation CreateNewsLetterSubscribers(
    $input: CreateNewsLetterSubscribersInput!
    $condition: ModelNewsLetterSubscribersConditionInput
  ) {
    createNewsLetterSubscribers(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateNewsLetterSubscribers = /* GraphQL */ `
  mutation UpdateNewsLetterSubscribers(
    $input: UpdateNewsLetterSubscribersInput!
    $condition: ModelNewsLetterSubscribersConditionInput
  ) {
    updateNewsLetterSubscribers(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteNewsLetterSubscribers = /* GraphQL */ `
  mutation DeleteNewsLetterSubscribers(
    $input: DeleteNewsLetterSubscribersInput!
    $condition: ModelNewsLetterSubscribersConditionInput
  ) {
    deleteNewsLetterSubscribers(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const createContactMessage = /* GraphQL */ `
  mutation CreateContactMessage(
    $input: CreateContactMessageInput!
    $condition: ModelContactMessageConditionInput
  ) {
    createContactMessage(input: $input, condition: $condition) {
      id
      email
      nameFull
      message
      createdAt
      updatedAt
    }
  }
`;
export const updateContactMessage = /* GraphQL */ `
  mutation UpdateContactMessage(
    $input: UpdateContactMessageInput!
    $condition: ModelContactMessageConditionInput
  ) {
    updateContactMessage(input: $input, condition: $condition) {
      id
      email
      nameFull
      message
      createdAt
      updatedAt
    }
  }
`;
export const deleteContactMessage = /* GraphQL */ `
  mutation DeleteContactMessage(
    $input: DeleteContactMessageInput!
    $condition: ModelContactMessageConditionInput
  ) {
    deleteContactMessage(input: $input, condition: $condition) {
      id
      email
      nameFull
      message
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      type
      title
      contents
      image
      upvotes
      comments {
        items {
          id
          postId
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      type
      title
      contents
      image
      upvotes
      comments {
        items {
          id
          postId
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      type
      title
      contents
      image
      upvotes
      comments {
        items {
          id
          postId
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      postId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      postId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      postId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPostLike = /* GraphQL */ `
  mutation CreatePostLike(
    $input: CreatePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    createPostLike(input: $input, condition: $condition) {
      id
      postID
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePostLike = /* GraphQL */ `
  mutation UpdatePostLike(
    $input: UpdatePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    updatePostLike(input: $input, condition: $condition) {
      id
      postID
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePostLike = /* GraphQL */ `
  mutation DeletePostLike(
    $input: DeletePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    deletePostLike(input: $input, condition: $condition) {
      id
      postID
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
