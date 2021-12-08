const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  question1: {
    type: String,
    required: `Field is empty!`,
  },
  question2: {
    type: String,
    required: `Field is empty!`,
  },
  question3: {
    type: String,
    required: `Field is empty!`,
  },
});

const Test = mongoose.model("Test", Schema);

module.exports = Test;
