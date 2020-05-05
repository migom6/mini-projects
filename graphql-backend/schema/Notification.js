import { gql } from "apollo-server-express";

const NotificationSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  enum NotificationType {
    COMMENT
  }
  type Notification {
    id: ID!
    author: User!
    post: ID
    type: NotificationType
    seen: Boolean
    createdAt: String
  }
  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input CreateNotificationInput {
    postId: ID
    notificationType: NotificationType!
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    # Gets notifications for specific user
    getUserNotifications(skip: Int, limit: Int): [Notification]
  }
  # ---------------------------------------------------------
  # Mutations
  # ---------------------------------------------------------
  extend type Mutation {
    # Creates a new notification for user
    createNotification(input: CreateNotificationInput!): Notification
    # Deletes a notification
    # deleteNotification(input: DeleteNotificationInput!): Notification
    # Updates notification seen values for user
    # updateNotificationSeen(input: UpdateNotificationSeenInput!): Boolean
  }
  # ---------------------------------------------------------
  # Subscriptions
  # ---------------------------------------------------------
  extend type Subscription {
    notificationCreated: Notification!
  }
`;

export default NotificationSchema;
