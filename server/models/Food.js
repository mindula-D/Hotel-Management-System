import mongoose from "mongoose";
const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    foodName: {
      type: String,
      requiered: true,
      unique: [true, "Food name must be unique"],
      maxlength: 10,
    },
    type: {
      type: String,
      requiered: true,
      maxlength: 15,
    },
    quantity: {
      type: Number,
      requiered: true,
    },
    unitPrice: {
      type: Number,
      requiered: true,
      //default: Date.now,
    },
    date: {
      //date
      type: String,
      requiered: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("FoodStocknew", foodSchema);
