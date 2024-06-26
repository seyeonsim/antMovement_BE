const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const VirtualSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  profit: {
    type: Number,
    required: true,
  },
  // 한번에 가장 크게 먹은 이득
  highest_profit: {
    type: Number,
  },
  win: {
    type: Number,
  },
  loss: {
    type: Number,
  },
  profitArray: {
    type: [Number],
  },
});

module.exports = mongoose.model("Virtual", VirtualSchema);
