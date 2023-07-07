//Assign mongoose package to a variable 
// const mongoose= require('mongoose');

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const paymentSchema = new Schema({

    paymentID : {
        type : String,
        required : true//A backend validation 
    },

    customerName : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique: [true, 'This email is already exits']
    },

    contactNumber : {
        type : String,
        required : true,
        maxLength: 10
    },

    paymentDate : {
        type : String,
        required : true
    },

    transactionType1 : {
        type : String,
    },

    amount1 : {
        type : Number,
    },

    transactionType2 : {
        type : String,
    },

    amount2 : {
        type : Number,
    },

    transactionType3 : {
        type : String,
    },

    amount3 : {
        type : Number,
    },

    totalAmount : {
        type : Number,
        required : true
    },

    paymentMethod : {
        type : String,
        required : true
    }

})

// const Payment = mongoose.model("Payment",paymentSchema);

// module.exports = Payment;

export default mongoose.model("Payment", paymentSchema);