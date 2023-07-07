//let TransportManagementDriver = require("../models/Driver");
import express from "express";
import Driver from "../models/Driver.js";
const router = express.Router();

//create CRUD

http://localhost:8070/driver

router.route("/").post((req, res) => {

    const DriverID = req.body.DriverID;
    const DriverFirstName = req.body.DriverFirstName;
    const DriverLastName = req.body.DriverLastName;
    const DriverAge = Number(req.body.DriverAge);
    const ContactNumber = Number(req.body.ContactNumber);
    const DriverEmail = req.body.DriverEmail;
    const VehicleManufacture = req.body.VehicleManufacture;
    const VehicleModel = req.body.VehicleModel;
    const VehicleNumber = req.body.VehicleNumber;
    const TotalSeats = Number(req.body.TotalSeats);
    const Category = req.body.Category;
    const GuestDriverNIC = req.body.GuestDriverNIC;
    const GuestDriverLicenceIssue = req.body.GuestDriverLicenceIssue;
    const GuestDriverLicenceExpire = req.body.GuestDriverLicenceExpire;


    const newDriver = new Driver({

        DriverID,
        DriverFirstName,
        DriverLastName,
        DriverAge,
        ContactNumber,
        DriverEmail,
        VehicleManufacture,
        VehicleModel,
        VehicleNumber,
        TotalSeats,
        Category,
        GuestDriverNIC,
        GuestDriverLicenceIssue,
        GuestDriverLicenceExpire,

    })

    newDriver.save().then(() => {
        res.json("Guest Driver Details Added")
    }).catch((err) => {
        console.log(err);
    })


})

//retrieve CRUD

http://localhost:8070/driver

router.route("/").get((req, res)=>{

    Driver.find().then((drivers)=>{
        res.json(drivers)
    }).catch((err)=>{
        console.log(err);
    })

})

//update CRUD

http://localhost:8070/driver/update/4df56f56sf6dfd

router.route("/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {DriverID, DriverFirstName, DriverLastName, DriverAge, ContactNumber, DriverEmail, VehicleManufacture, VehicleModel, VehicleNumber, TotalSeats, Category, GuestDriverNIC, GuestDriverLicenceIssue, GuestDriverLicenceExpire} = req.body; //destructure method (from single line)

    const updateDriver = {
        DriverID,
        DriverFirstName,
        DriverLastName,
        DriverAge,
        ContactNumber,
        DriverEmail,
        VehicleManufacture,
        VehicleModel,
        VehicleNumber,
        TotalSeats,
        Category,
        GuestDriverNIC,
        GuestDriverLicenceIssue,
        GuestDriverLicenceExpire
    }

    const update = await Driver.findByIdAndUpdate(userId, updateDriver)
    .then(() => { 
        res.status(200).send({status: "Guest Driver Details Updated",})
    }).catch((err) => { 
        console.log(err);
        res.status(500).send({status: "Error with Updating Guest Driver Details", error: err.message});
    })    
})

//delete CRUD

http://localhost:8070/driver/delete/4df56f56sf6dfd

router.route("/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Driver.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Guest Driver Deleted"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with Deleting Guest Driver", error: err.message});
    })
})

//retrive a single CRUD

http://localhost:8070/driver/get/4df56f56sf6dfd

router.route("/:id").get(async (req, res) => {
    try{
        let userId = req.params.id;
        const user = await Driver.findById(userId)
        res.status(200).json(user);}
        catch (error) {
            res.status(500).json(error);
          }
})

export default router;