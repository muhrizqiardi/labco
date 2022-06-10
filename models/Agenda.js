import mongoose from "mongoose";

const AgendaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    finishedTime: {
      type: Date,
      required: true,
    },
    lecturer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Agenda || mongoose.model("Agenda", AgendaSchema);
