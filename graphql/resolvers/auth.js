const bcrypt = require("bcryptjs");

// import models
const User = require("../../models/user");

module.exports = {
  createUser: async args => {
    try {
      const existinUser = await User.findOne({
        email: args.userInput.email
      });
      if (existinUser) {
        throw new Error("User already exist!");
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

      const user = new User({
        email: args.userInput.email,
        password: hashedPassword
      });
      const result = await user.save();
      return { ...result._doc, password: null };
    } catch (err) {
      throw err;
    }
  }
};
