import mongoose from "mongoose";
const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
      unique: [true, "Employee ID must be unique"],
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
      //default: Date.now,
    },
    workingShift: {
      type: String,
      required: true,
    },
    jobDesc: {
      type: String,
    },
  },
  { timestamps: true }
);
// const jobSchema = new Schema(
//   {
//     jobTitle: {
//       type: String,
//       required: true,
//       unique: true,
//       maxlength: 5,
//     },
//     employeeId: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     location: {
//       type: String,
//       required: true,
//     },
//     date: {
//       type: String,
//       required: true,
//       //default: Date.now,
//     },
//     workingShift: {
//       type: String,
//       required: true,
//     },
//     jobDesc: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

export default mongoose.model("Job", jobSchema);
