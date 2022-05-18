import mongoose, { Schema } from "mongoose";

export default LabInformation = mongoose.model(
  "LabInformation",
  new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  })
);
