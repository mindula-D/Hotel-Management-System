// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

import mongoose from "mongoose";
const Schema = mongoose.Schema;


const RMhotelSchema = new Schema({  //RMhotelSchema means shema object and it has properties like below

    bookingid : {
        type : String,
        required: true
    },
    nic : {
        type : String,
        required: true
    }, 
    name : {
        type :String,
        required: true
    },
    phone : {
        type :Number,
        required: true,
        maxLength: 10
    },
    address1 : {
        type : String,
        required: true
    },
    address2 : {
        type :String,
        required: true
    },
    city : {
        type :String,
        required: true
    },
    state : {
        type : String,
        required: true
    },
    zip : {
        type :Number,
        required: true
    },
    email : {
        type :String,
        required: true,
        unique: [true, 'This email is already exits']
    },
    checkin : {
        type : Date,
        required: true
    },
    checkout : {
        type :Date,
        required: true
    },
    roomtype : {
        type :String,
        required: true
    },
    roomCount : {
        type : Number,////////////String changed to number
        required: true
    },
    totRoom : {
        type :Number,
        required: true
    },
    noadults : {
        type :Number,
        required: true
    },
    nochildren : {
        type :Number,
        required: true
    }

})
//create Reservation object with using ("table name/document name",given above schema object name)
// const Reservation = mongoose.model("Reservation",RMhotelSchema);

// module.exports = Reservation;//remember to export your given created reservation / object

export default mongoose.model("Reservation",RMhotelSchema);

