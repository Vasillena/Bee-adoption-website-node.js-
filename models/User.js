const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    minLength: 10,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
