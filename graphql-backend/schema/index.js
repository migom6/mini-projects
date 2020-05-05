import { gql } from "apollo-server-express";

import UserSchema from "./User";
import PostSchema from "./Post";
// import LikeSchema from "./Like";
import CommentSchema from "./Comment";
// import NotificationSchema from "./Notification";

const schema = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  # type Subscription {
  #  _empty: String
  # }
  ${UserSchema}
  ${PostSchema}
  ${CommentSchema}
`;

export default schema;
