import express from "express";
const router = express.Router();
import RMhotel from "../models/RMhotel.js"
// const router = require("express").Router();
// const { response } = require("express");
// let RMhotel = require("../models/RMhotel");


//------CREATE API-------

//server is common file http://localhost:8070/rmhotel
//but inorder to create complete link http://localhost:8070/rmhotel/add

router.route("/add").post((req,res) =>{

    //execute body
    const bookingid = req.body.bookingid;
    const nic = req.body.nic;
    const name = req.body.name;
    const phone = Number(req.body.phone);
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const state = req.body.state;
    const zip = Number(req.body.zip);
    const email = req.body.email;
    const checkin = new Date(req.body.checkin).toISOString().substring(0, 10);
    const checkout = new Date(req.body.checkout).toISOString().substring(0, 10);
    const roomtype = req.body.roomtype;
    const roomCount = Number(req.body.roomCount);
    const totRoom = Number(req.body.totRoom);
    const noadults = Number(req.body.noadults);
    const nochildren = Number(req.body.nochildren);

    const newRMhotel = new RMhotel({

        bookingid,
        nic,
        name,
        phone,
        address1,
        address2,
        city,
        state,
        zip,
        email,
        checkin,
        checkout,
        roomtype,
        roomCount,
        totRoom,
        noadults,
        nochildren
    })
    //using crated model shcema pass valus as document
    // js promise
    newRMhotel.save().then(()=>{
        res.json("Reservation Added!!")
    }).catch((err)=>{

        console.log()
    })


})

//-----READ API (TO SEE ENTERED VALUES)-----

//server is common file http://localhost:8070/rmhotel
//but inorder to create complete link http://localhost:8070/rmhotel

router.route("/").get((req,res)=>{

    //body
    //find for all
    //find by id for specific value
    //find by id to delete specific data

    RMhotel.find().then((rmhotel)=>{
        res.json(rmhotel)
    }).catch((err)=>{
        console.log(err)
    })
})

//--------UPDATE API--------

//server is common file http://localhost:8070/rmhotel
//but inorder to create complete link http://localhost:8070/rmhotel/update/obj id
//......./update = Obj id

router.route("/update/:id").put(async (req,res) => {
    //id name want to same as route and params
    let userId = req.params.id;

    //destructor method

    //const{front end passing values} = req.body;
    const{bookingid,nic,name,phone,address1,address2,city,state,zip,email,checkin,checkout,roomtype,roomCount,totRoom,noadults,nochildren} = req.body;

    //now we know update user id and what we want toupdate values

    const updateRMhotel = {

        bookingid,
        nic,
        name,
        phone,
        address1,
        address2,
        city,
        state,
        zip,
        email,
        checkin,
        checkout,
        roomtype,
        roomCount,
        totRoom,
        noadults,
        nochildren
    }

    const update = await RMhotel.findByIdAndUpdate(userId,updateRMhotel)
    .then(() => {
          res.status(200).send({status:"User updated"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})

//---------DELETE API----------

//server is common file http://localhost:8070/rmhotel
//but inorder to create complete link http://localhost:8070/rmhotel/delete/obj id
//......./delete = Obj id
//http://localhost:8070/rmhotel/644dd6ee9962223394aaf95b - Example
router.route("/:id").delete(async(req,res) => {
   let userId = req.params.id;

   await RMhotel.findByIdAndDelete(userId)
   .then(() => {
    res.status(200).send({status : "User deleted"});

   }).catch((err) => {
    console.log(err.message);
    res.status(500).send({status : "Error with delete user",error: err.message});
   })
})

//------TO GET ONE USER ENTERED DATA (FECHED DATA)-------

router.route("/get/:id").get(async (req,res) => {

    try {
        let userId = req.params.id;
        const user = await RMhotel.findById(userId)
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json(error);
      }


})

export default router;
// module.exports = router;//remember to export