const Comment = {
  post: async ({ post: postId }, args, { Post }) => {
    const post = await Post.findOne({ _id: postId });
    return post;
  },
  author: async ({ author: authorId }, args, { User }) => {
    const author = await User.findOne({ _id: authorId });
    return author;
  },
};

const Query = {
  /**
   * Gets all posts
   *
   * @param {string} authUserId
   * @param {int} skip how many posts to skip
   * @param {int} limit how many posts to limit
   */
  getCommentsByPostId: async (
    root,
    { postId, skip, limit },
    { authUser, Comment }
  ) => {
    if (!authUser) throw new Error("Not Authorized");
    const allComments = await Comment.find({ post: postId })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: "desc" });

    return allComments;
  },
};

const Mutation = {
  /**
   * Creates a new post
   *
   * @param {string} title
   * @param {string} image
   * @param {string} authorId
   */
  createCommentByPostId: async (
    root,
    { input: { title, postId } },
    { authUser, Post, Comment }
  ) => {
    if (!authUser) {
      throw new Error("Not Authorized");
    }
    if (!title) {
      throw new Error("Comment title is required.");
    }

    const newComment = await new Comment({
      post: postId,
      title,
      author: authUser.id,
    }).save();

    await Post.findOneAndUpdate(
      { _id: newComment.post },
      { $push: { comments: newComment.id } }
    );

    return newComment;
  },
  /**
   * Deletes a user post
   *
   * @param {string} id
   * @param {imagePublicId} id
   */
  deleteComment: async (root, { input: { id } }, { Comment, Post }) => {
    // Find post and remove it
    const comment = await Comment.findByIdAndRemove(id);

    // Delete post from authors (users) posts collection
    await Post.findOneAndUpdate(
      { _id: comment.post },
      { $pull: { comments: comment.id } }
    );

    return true;
  },
};

export default { Comment, Query, Mutation };
