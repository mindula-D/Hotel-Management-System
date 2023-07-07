import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eventSchema = new Schema(
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

    address: {
      type: String,
      required: true,
    },

    phone_number: {
      type: String,
      required: true,
    },

    function_type: {
      type: String,
      required: true,
    },

    hall_type: {
      type: String,
      required: true,
    },

    fee_based_Activities: {
      type: Number,
      required: true,
    },

    plate_type: {
      type: Number,
      required: true,
    },
    additional_charges: {
      type: Number,
      required: true,
    },

    totalSalary: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
