const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var playerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    club: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      require: true,
    },
    goals: {
      type: Number,
      require: true,
    },
    isCaptain: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

var Players = mongoose.model("players", playerSchema);

module.exports = Players;
