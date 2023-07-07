import mongoose from "mongoose";
const Schema = mongoose.Schema;

const feedbackSchema = new Schema(
  {
    customerName: {
      type: String,
      requiered: true,
    },
    customerEmail: {
      type: String,
      requiered: true,
    },
    roomId: {
      type: String,
      requiered: true,
    },
    feedbackBody: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
