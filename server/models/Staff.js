import mongoose from "mongoose";

const Schema = mongoose.Schema;

const staffSchema = new Schema({

    StaffDriverID : {
        type : String,
        required : true
    },

    StaffDriverFirstName : {
        type : String,
        required : true
    },
    StaffDriverLastName : {
        type : String,
        required : true
    },
    TelephoneNumber : {
        type : Number,
        required : true
    },
    StartingPoint : {
        type : String,
        required : true
    },
    StartingTime : {
        type : String,
        required : true
    },
    ArrivalTime : {
        type : String,
        required : true
    },
    DepartureTime : {
        type : String,
        required : true
    },
    Vehicle : {
        type : String,
        required : true
    },
    StaffVehicleNumber : {
        type : String,
        required : true
    },
    StaffTotalSeats : {
        type : Number,
        required : true
    },
    StaffDriverNIC : {
        type : String,
        required : true
    },
    StaffDriverLicenceIssue : {
        type : String,
        required : true
    },
    StaffDriverLicenceExpire : {
        type : String,
        required : true
    }

})

export default mongoose.model("Staff", staffSchema);