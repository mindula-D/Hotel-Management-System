import mongoose from "mongoose";
const Schema = mongoose.Schema;

const feeBaseSchema = new Schema(
  {
    customer_name: {
      type: String,
      required: true,
      //unique : true
    },

    date: {
      type: String,
      requiered: true,
      //default: Date.now,
    },

    timeSlot: {
      type: String,
      required: true,
    },

    total_count: {
      type: Number,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone_number: {
      type: String,
      required: true,
    },

    pool: {
      type: Number,
    },

    boatRide: {
      type: Number,
    },

    photoShoot: {
      type: Number,
    },

    totalAmount: {
      type: Number,
    },
  },

  { timestamps: true }
);

export default mongoose.model("FeeBase", feeBaseSchema);
