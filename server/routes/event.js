import express from "express";
const router = express.Router();
import Event from "../models/EventModel.js";

//add   and read

//post method
router.route("/").post((req, res) => {
  const customer_name = req.body.customer_name;
  const date = req.body.date;
  const timeSlot = req.body.timeSlot;
  const total_count = Number(req.body.total_count);
  const email = req.body.email;
  const address = req.body.address;
  const phone_number = Number(req.body.phone_number);
  const function_type = req.body.function_type;
  const hall_type = req.body.hall_type;
  const fee_based_Activities = Number(req.body.fee_based_Activities);
  const plate_type = Number(req.body.plate_type);
  const additional_charges = Number(req.body.additional_charges);
  const totalSalary = Number(
    total_count * plate_type + fee_based_Activities + additional_charges
  );

  const newEvent = new Event({
    customer_name,
    date,
    timeSlot,
    total_count,
    email,
    address,
    phone_number,
    function_type,
    hall_type,
    fee_based_Activities,
    plate_type,
    additional_charges,
    totalSalary,
  });

  //validation part
  newEvent
    .save()
    .then(() => {
      res.json("Event Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//get/read  method

router.route("/").get((req, res) => {
  Event.find()
    .then((event) => {
      res.json(event);
    })
    .catch((err) => {
      console.log(err);
    });
});

// delete and update
//put method
//async task crash wenne nha multiple task orderely wenva
router.route("/:id").put(async (req, res) => {
  //id eka fetch karana widiya
  let userId = req.params.id;

  // D strucher
  const {
    customer_name,
    date,
    timeSlot,
    phone_number,
    email,
    address,
    function_type,
    hall_type,
    total_count,
    fee_based_Activities,
    plate_type,
    additional_charges,
    totalSalary,
  } = req.body;
  const updateEvent = {
    customer_name,
    date,
    timeSlot,
    total_count,
    email,
    address,
    phone_number,
    function_type,
    hall_type,
    fee_based_Activities,
    plate_type,
    additional_charges,
    totalSalary,
  };

  //me userge id eka yatathe mehema user kenek innvada kiyala check karanva
  //email,NIC find kranvanm findbyone use karanva
  //objectid find krnvanm  findbyid
  //await eken kiyanne poddak inna complete wenkn

  const update = await Event.findByIdAndUpdate(userId, updateEvent)
    .then(() => {
      res.status(200).send({ status: " User update" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

router.route("/:id").delete(async (req, res) => {
  let userID = req.params.id;

  await Event.findByIdAndDelete(userID)
    .then(() => {
      res.status(200).send({ status: "User Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Erro with delete user", error: err.message });
    });
});

router.route("/:id").get(async (req, res) => {
  try {
    let userId = req.params.id;
    const user = await Event.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
  //            .then((event) =>{
  //                   res.status(200).send({ status : "User fetched",event})

  //  }).catch(() =>{

  //      console.log(err.message);
  //      res.status(500).send({status: "Error withe get user", error: err.message});
  //  })
});

export default router;
