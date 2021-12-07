const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  question1: {
    type: String,
    required: `Field is empty!`,
  },
  question2: {
    type: String,
  },
  question3: {
    type: String,
    required: `Field is empty!`,
  },
});

const Test = mongoose.model("Test", Schema);

module.exports = Test;
