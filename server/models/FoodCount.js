import mongoose from "mongoose";
const Schema = mongoose.Schema;

const foodCountSchema = new Schema(
  {
    foodNameCount: {
      type: String,
      requiered: true,
      //unique: [true, 'Food name must be unique'],
      maxlength: 10
    },
    typeCount: { //addded consumed
      type: String,
      requiered: true,
    
    },
    date: { //date
      type: String,
      requiered: true,
    },
    availability: {  
      type: String,
      requiered: true,
      //default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("FoodCount", foodCountSchema);
