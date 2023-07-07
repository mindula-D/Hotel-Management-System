import express from "express";
import Staff from "../models/Staff.js";
const router = express.Router();

//create CRUD

http://localhost:8070/staff

router.route("/").post((req, res) => {

    const StaffDriverID = req.body.StaffDriverID;
    const StaffDriverFirstName = req.body.StaffDriverFirstName;
    const StaffDriverLastName = req.body.StaffDriverLastName;
    const TelephoneNumber = Number(req.body.TelephoneNumber);
    const StartingPoint = req.body.StartingPoint;
    const StartingTime = req.body.StartingTime;
    const ArrivalTime = req.body.ArrivalTime;
    const DepartureTime = req.body.DepartureTime;
    const Vehicle = req.body.Vehicle;
    const StaffVehicleNumber = req.body.StaffVehicleNumber;
    const StaffTotalSeats = Number(req.body.StaffTotalSeats);
    const StaffDriverNIC = req.body.StaffDriverNIC;
    const StaffDriverLicenceIssue = req.body.StaffDriverLicenceIssue;
    const StaffDriverLicenceExpire = req.body.StaffDriverLicenceExpire;


    const newStaff = new Staff({

        StaffDriverID,
        StaffDriverFirstName,
        StaffDriverLastName,
        TelephoneNumber,
        StartingPoint,
        StartingTime,
        ArrivalTime,
        DepartureTime,
        Vehicle,
        StaffVehicleNumber,
        StaffTotalSeats,
        StaffDriverNIC,
        StaffDriverLicenceIssue,
        StaffDriverLicenceExpire

    })

    newStaff.save().then(() => {
        res.json("Staff Driver Details Added")
    }).catch((err) => {
        console.log(err);
    })


})

//retrieve CRUD

http://localhost:8070/staff

router.route("/").get((req, res)=>{

    Staff.find().then((staffs)=>{
        res.json(staffs)
    }).catch((err)=>{
        console.log(err);
    })

})

//update CRUD

http://localhost:8070/staff/update/4df56f56sf6dfd

router.route("/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {StaffDriverID, StaffDriverFirstName, StaffDriverLastName, TelephoneNumber, StartingPoint, StartingTime, ArrivalTime, DepartureTime, Vehicle, StaffVehicleNumber, StaffTotalSeats, StaffDriverNIC, StaffDriverLicenceIssue, StaffDriverLicenceExpire} = req.body; //destructure method (from single line)

    const updateStaff = {
        StaffDriverID,
        StaffDriverFirstName,
        StaffDriverLastName,
        TelephoneNumber,
        StartingPoint,
        StartingTime,
        ArrivalTime,
        DepartureTime,
        Vehicle,
        StaffVehicleNumber,
        StaffTotalSeats,
        StaffDriverNIC,
        StaffDriverLicenceIssue,
        StaffDriverLicenceExpire
    }

    const update = await Staff.findByIdAndUpdate(userId, updateStaff)
    .then(() => { 
        res.status(200).send({status: "Staff Driver Details Updated",})
    }).catch((err) => { 
        console.log(err);
        res.status(500).send({status: "Error with Updating Staff Driver Details", error: err.message});
    })    
})

//delete CRUD

http://localhost:8070/staff/delete/4df56f56sf6dfd

router.route("/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Staff.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Staff Driver Deleted"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with Deleting Staff Driver", error: err.message});
    })
})

//retrive a single CRUD

http://localhost:8070/staff/get/4df56f56sf6dfd

router.route("/:id").get(async (req, res) => {
    try{
        let userId = req.params.id;
        const user = await Staff.findById(userId)
        res.status(200).json(user);}
        catch (error) {
            res.status(500).json(error);
          }
})

export default router;