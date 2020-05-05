import { gql } from "apollo-server-express";

const UserSchema = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    posts: [Post]
  }

  extend type Query {
    getMe: User
    getUserById(username: String, id: ID): User
  }

  extend type Mutation {
    signup(input: SignUpInput): String!
    signin(input: SignInInput): String!
  }

  input SignUpInput {
    email: String!
    username: String!
    password: String!
  }

  input SignInInput {
    username: String!
    password: String!
  }
`;

export default UserSchema;
