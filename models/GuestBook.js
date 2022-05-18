import mongoose, { Schema } from "mongoose";

export default GuestBook = mongoose.model(
  "GuestBook",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    timeVisited: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
  })
);
