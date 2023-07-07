import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tripSchema = new Schema({

    TripID : {
        type : String,
        required : true
    },
    RequesterID : {
        type : String,
        required : true
    },

    RequesterName : {
        type : String,
        required : true
    },
    RequesterContactNumber : {
        type : String,
        required : true
    },
    NoOfPassengers : {
        type : Number,
        required : true
    },
    TripDate : {
        type : String,
        required : true
    },
    PickUpTime : {
        type : String,
        required : true
    },    
    PickUpLocation : {
        type : String,
        required : true
    },
    DropOffLocation : {
        type : String,
        required : true
    },   
    TripPackageType : {
        type : String,
        required : true
    },
    TotalDistance : {
        type : Number,
        required : true
    },
    TripDriverID : {
        type : String,
        required : true
    },
    TotalFee : {
        type : Number,
        required : true
    }

})

export default mongoose.model("Trip", tripSchema);