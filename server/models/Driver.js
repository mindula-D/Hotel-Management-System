import mongoose from "mongoose";

const Schema = mongoose.Schema;

const driverSchema = new Schema({

    DriverID : {
        type : String,
        required : true
    },

    DriverFirstName : {
        type : String,
        required : true
    },
    DriverLastName : {
        type : String,
        required : true
    },
    DriverAge : {
        type : Number,
        required : true
    },
    ContactNumber : {
        type : Number,
        required : true
    },
    DriverEmail : {
        type : String,
        required : true
    },
    VehicleManufacture : {
        type : String,
        required : true
    },
    VehicleModel : {
        type : String,
        required : true
    },
    VehicleNumber : {
        type : String,
        required : true
    },
    TotalSeats : {
        type : Number,
        required : true
    },
    Category : {
        type : String,
        required : true
    },
    GuestDriverNIC : {
        type : String,
        required : true
    },
    GuestDriverLicenceIssue : {
        type : String,
        required : true
    },
    GuestDriverLicenceExpire : {
        type : String,
        required : true
    }

})


export default mongoose.model("Driver", driverSchema);