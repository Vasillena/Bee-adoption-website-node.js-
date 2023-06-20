const mongoose = require("mongoose");

const beehiveSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "All fields are required"],
  },
  address: {
    type: String,
    required: [true, "All fields are required"],
  },
  beehiveName: {
    type: String,
    required: [true, "All fields are required"],
  },
  queenName: {
    type: String,
    required: [true, "All fields are required"],
  },
  honeyLabel: {
    type: String,
    validate: /^https?:\/\//,
    required: [true, "All fields are required"],
  },
});

const Beehive = mongoose.model("Beehive", beehiveSchema);

module.exports = Beehive;
