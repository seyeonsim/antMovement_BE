const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const WordSchema = new Schema({
  no: {
    required: true,
    type: Number,
  },
  word: {
    required: true,
    type: String,
  },
  explanation: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Word", WordSchema);
