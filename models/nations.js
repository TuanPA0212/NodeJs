const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var nationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Nations = mongoose.model("nations", nationSchema);

module.exports = Nations;
