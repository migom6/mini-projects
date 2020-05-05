import { gql } from "apollo-server-express";

const CommentSchema = gql`
  type Comment {
    id: ID!
    author: User!
    title: String!
    post: Post!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getCommentsByPostId(postId: ID!, skip: Int, limit: Int): [Comment]
  }

  extend type Mutation {
    createCommentByPostId(input: CreateCommentInput): Comment
    deleteComment(id: ID!): Boolean
  }

  input CreateCommentInput {
    title: String!
    postId: ID!
  }
`;

export default CommentSchema;
