import bcrypt from "bcryptjs";
// import { withFilter } from "apollo-server";
import { generateToken } from "../utils/generate-token";
// import { pubSub } from "../utils/apollo-server";

// import { IS_USER_ONLINE } from "../constants/Subscriptions";

const AUTH_TOKEN_EXPIRY = "1y";

const User = {
  posts: async ({ id }, _, { Post }) => {
    return await Post.find({ author: id });
  },
};

const Query = {
  /**
   * Gets the currently logged in user
   */
  getMe: async (root, args, { authUser, User }) => {
    if (!authUser) throw new Error("Not authorized");
    // If user is authenticated, update it's isOnline field to true
    const user = await User.findOne({
      username: authUser.username,
    });

    return user;
  },
  /**
   * Gets user by username and id
   *
   * @param {string} username
   */
  getUserById: async (root, { username, id }, { authUser, User }) => {
    if (!authUser) throw new Error("Not authorized");

    if (!username && !id) {
      throw new Error("username or id is required params.");
    }

    if (username && id) {
      throw new Error("please pass only username or only id as a param");
    }

    const query = username ? { username: username } : { _id: id };
    const user = await User.findOne(query);
    // .populate({
    //   path: "posts",
    //   options: { sort: { createdAt: "desc" } },
    // });

    if (!user) {
      throw new Error("User with given params doesn't exists.");
    }

    return user;
  },
};

const Mutation = {
  /**
   * Signs in user
   *
   * @param {string} emailOrUsername
   * @param {string} password
   */
  signin: async (root, { input: { username, password } }, { User }) => {
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("User not found.");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error("Invalid password.");
    }

    return generateToken(user, process.env.SECRET, AUTH_TOKEN_EXPIRY);
  },
  /**
   * Signs up user
   *
   * @param {string} fullName
   * @param {string} email
   * @param {string} username
   * @param {string} password
   */
  signup: async (root, { input: { email, username, password } }, { User }) => {
    // Check if user with given email or username already exists
    const user = await User.findOne().or([{ email }, { username }]);
    if (user) {
      const field = user.email === email ? "email" : "username";
      throw new Error(`User with given ${field} already exists.`);
    }

    // Empty field validation
    if (!email || !username || !password) {
      throw new Error("All fields are required.");
    }

    // Email validation
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(String(email).toLowerCase())) {
      throw new Error("Enter a valid email address.");
    }

    // Username validation
    const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
    if (!usernameRegex.test(username)) {
      throw new Error(
        "Usernames can only use letters, numbers, underscores and periods."
      );
    }
    if (username.length > 20) {
      throw new Error("Username no more than 50 characters.");
    }
    if (username.length < 3) {
      throw new Error("Username min 3 characters.");
    }
    // const frontEndPages = [
    //   "forgot-password",
    //   "reset-password",
    //   "explore",
    //   "people",
    //   "notifications",
    //   "post",
    // ];
    // if (frontEndPages.includes(username)) {
    //   throw new Error("This username isn't available. Please try another.");
    // }

    // Password validation
    if (password.length < 6) {
      throw new Error("Password min 6 characters.");
    }

    const newUser = await new User({
      email,
      username,
      password,
    }).save();

    return generateToken(newUser, process.env.SECRET, AUTH_TOKEN_EXPIRY);
  },
};
export default { User, Query, Mutation };
