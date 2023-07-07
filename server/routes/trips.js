//let TransportManagementTrip = require("../models/Trip");
import express from "express";
import Trip from "../models/Trip.js";
const router = express.Router();

//create CRUD

http://localhost:8070/trip

router.route("/").post((req, res) => {

    const TripID = req.body.TripID;
    const RequesterID = req.body.RequesterID;
    const RequesterName = req.body.RequesterName;
    const RequesterContactNumber = Number(req.body.RequesterContactNumber);
    const NoOfPassengers = Number(req.body.NoOfPassengers);
    const TripDate = req.body.TripDate;
    const PickUpTime = req.body.PickUpTime;
    const PickUpLocation = req.body.PickUpLocation;
    const DropOffLocation = req.body.DropOffLocation;
    const TripPackageType = req.body.TripPackageType;
    const TotalDistance = Number(req.body.TotalDistance);
    const TripDriverID = req.body.TripDriverID;
    const TotalFee = Number(req.body.TotalFee);


    const newTrip = new Trip({

        TripID,
        RequesterID,
        RequesterName,
        RequesterContactNumber,
        NoOfPassengers,
        TripDate,
        PickUpTime,
        PickUpLocation,
        DropOffLocation,
        TripPackageType,
        TotalDistance,
        TripDriverID,
        TotalFee

    })

    newTrip.save().then(() => {
        res.json("Trip Details Added")
    }).catch((err) => {
        console.log(err);
    })


})

//retrieve CRUD

http://localhost:8070/trip

router.route("/").get((req, res)=>{

    Trip.find().then((trips)=>{
        res.json(trips)
    }).catch((err)=>{
        console.log(err);
    })

})

//update CRUD

http://localhost:8070/trip/update/4df56f56sf6dfd

router.route("/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {TripID, RequesterID, RequesterName, RequesterContactNumber, NoOfPassengers, TripDate, PickUpTime, PickUpLocation, DropOffLocation, TripPackageType, TotalDistance, TripDriverID, TotalFee} = req.body; //destructure method (from single line)

    const updateTrip = {
        TripID,
        RequesterID,
        RequesterName,
        RequesterContactNumber,
        NoOfPassengers,
        TripDate,
        PickUpTime,
        PickUpLocation,
        DropOffLocation,
        TripPackageType,
        TotalDistance,
        TripDriverID,
        TotalFee
    }

    const update = await Trip.findByIdAndUpdate(userId, updateTrip)
    .then(() => { 
        res.status(200).send({status: "Trip Details Updated",})
    }).catch((err) => { 
        console.log(err);
        res.status(500).send({status: "Error with Updating Trip Details", error: err.message});
    })    
})

//delete CRUD

http://localhost:8070/trip/delete/4df56f56sf6dfd

router.route("/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Trip.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Trip Details Deleted"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with Deleting Trip Details", error: err.message});
    })
})

//retrive a single CRUD

http://localhost:8070/trip/get/4df56f56sf6dfd

router.route("/:id").get(async (req, res) => {
    try{
        let userId = req.params.id;
        const user = await Trip.findById(userId)
        res.status(200).json(user);}
        catch (error) {
            res.status(500).json(error);
          }
})

export default router;