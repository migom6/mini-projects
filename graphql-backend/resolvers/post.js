const Post = {
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
  getPosts: async (root, { skip, limit }, { authUser, Post }) => {
    if (!authUser) throw new Error("Not Authorized");
    const allPosts = await Post.find({})
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: "desc" });

    return allPosts;
  },

  /**
   * Gets post by id
   *
   * @param {string} id
   */
  getPost: async (root, { id }, { Post }) => {
    if (!authUser) throw new Error("Not Authorized");

    const post = await Post.findById(id);

    return post;
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
  createPost: async (root, { input: { title } }, { authUser, Post, User }) => {
    if (!authUser) {
      throw new Error("Not Authorized");
    }
    if (!title) {
      throw new Error("Post title is required.");
    }

    const newPost = await new Post({
      title,
      author: authUser.id,
    }).save();

    await User.findOneAndUpdate(
      { _id: authUser.id },
      { $push: { posts: newPost.id } }
    );

    return newPost;
  },
  /**
   * Deletes a user post
   *
   * @param {string} id
   * @param {imagePublicId} id
   */
  deletePost: async (root, { input: { id } }, { Post, User }) => {
    // Find post and remove it
    const post = await Post.findByIdAndRemove(id);

    // Delete post from authors (users) posts collection
    await User.findOneAndUpdate(
      { _id: post.author },
      { $pull: { posts: post.id } }
    );

    return post;
  },
};

export default { Post, Query, Mutation };
