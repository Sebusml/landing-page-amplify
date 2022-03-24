/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNewsLetterSubscribers = /* GraphQL */ `
  query GetNewsLetterSubscribers($id: ID!) {
    getNewsLetterSubscribers(id: $id) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const listNewsLetterSubscribers = /* GraphQL */ `
  query ListNewsLetterSubscribers(
    $filter: ModelNewsLetterSubscribersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewsLetterSubscribers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContactMessage = /* GraphQL */ `
  query GetContactMessage($id: ID!) {
    getContactMessage(id: $id) {
      id
      email
      nameFull
      message
      createdAt
      updatedAt
    }
  }
`;
export const listContactMessages = /* GraphQL */ `
  query ListContactMessages(
    $filter: ModelContactMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        nameFull
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        title
        contents
        image
        upvotes
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const postsByDate = /* GraphQL */ `
  query PostsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        title
        contents
        image
        upvotes
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getPostLike = /* GraphQL */ `
  query GetPostLike($id: ID!) {
    getPostLike(id: $id) {
      id
      postID
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPostLikes = /* GraphQL */ `
  query ListPostLikes(
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        value
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
