import mongoose from "mongoose";

const GuestBookSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    startTime: {
      type: Date,
      required: true,
    },
    finishedTime: {
      type: Date,
      required: true,
    },
    // Keperluan
    usagePurpose: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.GuestBook ||
  mongoose.model("GuestBook", GuestBookSchema);
