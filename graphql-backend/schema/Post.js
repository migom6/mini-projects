import { gql } from "apollo-server-express";

const PostSchema = gql`
  type Post {
    id: ID!
    author: User!
    title: String!
    comments: [Comment]
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getPosts(skip: Int, limit: Int): [Post]
    getPost(id: ID!): Post
  }

  extend type Mutation {
    createPost(input: CreatePostInput): Post
    deletePost(id: ID!): Boolean
  }

  input CreatePostInput {
    title: String!
  }
`;

export default PostSchema;
