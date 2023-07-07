import mongoose from "mongoose";

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    employeeID : {
        type : String,
        required: true,
        unique:true 
        

    },

    employeeName : {
        type : String,
        required : true
    },

    dateOfBirth:{
        type : String,
        required : true
    },

    gender:{
         type:String,
         required:true
    },

    phoneNumber:{
        type:Number,
        required:true,
        unique:true
        
    },

    address:{
        type:String,
        required:true
    },

    employeeTitle:{
        type:String,
        required:true
    },

    salary:{
        type:Number,
        required:true
    }


},
{timestamps:true})




export default mongoose.model("Employee", employeeSchema);