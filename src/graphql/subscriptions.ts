/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCommentByPostId = /* GraphQL */ `
  subscription OnCommentByPostId($postId: ID!) {
    onCommentByPostId(postId: $postId) {
      id
      postId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateNewsLetterSubscribers = /* GraphQL */ `
  subscription OnCreateNewsLetterSubscribers {
    onCreateNewsLetterSubscribers {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNewsLetterSubscribers = /* GraphQL */ `
  subscription OnUpdateNewsLetterSubscribers {
    onUpdateNewsLetterSubscribers {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNewsLetterSubscribers = /* GraphQL */ `
  subscription OnDeleteNewsLetterSubscribers {
    onDeleteNewsLetterSubscribers {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
      id
      postId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      id
      postId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      id
      postId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePostLike = /* GraphQL */ `
  subscription OnCreatePostLike($owner: String) {
    onCreatePostLike(owner: $owner) {
      id
      postID
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePostLike = /* GraphQL */ `
  subscription OnUpdatePostLike($owner: String) {
    onUpdatePostLike(owner: $owner) {
      id
      postID
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePostLike = /* GraphQL */ `
  subscription OnDeletePostLike($owner: String) {
    onDeletePostLike(owner: $owner) {
      id
      postID
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
