import mongoose from "mongoose";
const Schema = mongoose.Schema;

const calSchema = new Schema({
  customer_Id: {
    type: String,

    //unique : true
  },

  total_count: {
    type: Number,
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
  },

  totalSalary: {
    type: Number,
  },
});

export default mongoose.model("Cal", calSchema);
