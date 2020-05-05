import { withFilter } from "apollo-server";

import { pubSub } from "../utils/apollo-server";
import { NOTIFICATION_CREATED } from "../utils/constants";

const Query = {
  /**
   * Gets notifications for specific user
   *
   * @param {string} userId
   * @param {int} skip how many notifications to skip
   * @param {int} limit how many notifications to limit
   */
  getUserNotifications: async (
    root,
    { skip, limit },
    { Notification, authUser }
  ) => {
    const notifications = await Notification.find({ author: authUser.id })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: "desc" });

    return notifications;
  },
};

const Mutation = {
  createNotification: async (
    root,
    { input: { postId, notificationType } },
    { Notification, User, authUser }
  ) => {
    let newNotification = await new Notification({
      author: authUser.id,
      post: postId,
      type: notificationType,
    }).save();

    // Push notification to user collection
    await User.findOneAndUpdate(
      { _id: userId },
      { $push: { notifications: newNotification.id } }
    );

    pubSub.publish(NOTIFICATION_CREATED_OR_DELETED, {
      notificationCreatedOrDeleted: {
        operation: "CREATE",
        notification: newNotification,
      },
    });

    return newNotification;
  },
  /**
   * Deletes a notification
   *
   * @param {string} id
   */
  deleteNotification: async (
    root,
    { input: { id } },
    { Notification, User }
  ) => {
    let notification = await Notification.findByIdAndRemove(id);

    // Delete notification from users collection
    await User.findOneAndUpdate(
      { _id: notification.user },
      { $pull: { notifications: notification.id } }
    );

    // Publish notification deleted event
    notification = await notification
      .populate("author")
      .populate("follow")
      .populate({ path: "comment", populate: { path: "post" } })
      .populate({ path: "like", populate: { path: "post" } })
      .execPopulate();
    pubSub.publish(NOTIFICATION_CREATED_OR_DELETED, {
      notificationCreatedOrDeleted: {
        operation: "DELETE",
        notification,
      },
    });

    return notification;
  },
  /**
   * Updates notification seen values for user
   *
   * @param {string} userId
   */
  updateNotificationSeen: async (
    root,
    { input: { userId } },
    { Notification }
  ) => {
    try {
      await Notification.update(
        { user: userId, seen: false },
        { seen: true },
        { multi: true }
      );

      return true;
    } catch (e) {
      return false;
    }
  },
};

const Subscription = {
  /**
   * Subscribes to notification created or deleted event
   */
  notificationCreatedOrDeleted: {
    subscribe: withFilter(
      () => pubSub.asyncIterator(NOTIFICATION_CREATED),
      (payload, variables, { authUser }) => {
        const receiverId = payload.notificationCreated.notification.user.toString();

        return authUser && authUser.id === receiverId;
      }
    ),
  },
};

export default { Query, Mutation, Subscription };
