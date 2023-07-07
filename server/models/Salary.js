import mongoose from "mongoose";

const Schema = mongoose.Schema;

const salarySchema = new Schema({

    employeeid : {
        type : String,
        required: true
    },

    basicSalary : {
        type : Number,
        required : true
    },

    allowance:{
        type : Number,
        required : true
    },

    overtime:{
         type:Number,
         required:true
    },

    attendance:{
        type:Number,
        required:true
    },


    totalSalary:{
        type:Number,
        
    }
})



export default mongoose.model("Salary", salarySchema);