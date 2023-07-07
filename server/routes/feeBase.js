import express from "express";
const router = express.Router();
import FeeBase from "../models/FeeBaseModel.js";

//add   and read

//post method
router.route("/").post((req, res) => {
  const customer_name = req.body.customer_name;
  const date = req.body.date;
  const timeSlot = req.body.timeSlot;
  const total_count = Number(req.body.total_count);
  const email = req.body.email;
  const phone_number = Number(req.body.phone_number);
  const pool = Number(req.body.pool);
  const boatRide = Number(req.body.boatRide);
  const photoShoot = Number(req.body.photoShoot);
  const totalAmount = Number(total_count * pool + boatRide + photoShoot);

  const newFeeBase = new FeeBase({
    customer_name,
    date,
    timeSlot,
    total_count,
    email,
    phone_number,
    pool,
    boatRide,
    photoShoot,
    totalAmount,
  });

  //validation part
  newFeeBase
    .save()
    .then(() => {
      res.json("Fee Base Activity Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//get/read  method

router.route("/").get((req, res) => {
  FeeBase.find()
    .then((feeBase) => {
      res.json(feeBase);
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
    total_count,
    pool,
    boatRide,
    photoShoot,
    totalAmount,
  } = req.body;
  const updateFeeBase = {
    customer_name,
    date,
    timeSlot,
    total_count,
    email,
    phone_number,
    pool,
    boatRide,
    photoShoot,
    totalAmount,
  };

  //me userge id eka yatathe mehema user kenek innvada kiyala check karanva
  //email,NIC find kranvanm findbyone use karanva
  //objectid find krnvanm  findbyid
  //await eken kiyanne poddak inna complete wenkn

  const update = await FeeBase.findByIdAndUpdate(userId, updateFeeBase)
    .then(() => {
      res.status(200).send({ status: " Activity update" });
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

  await FeeBase.findByIdAndDelete(userID)
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
  let userId = req.params.id;
  const user = await FeeBase.findById(userId)
    .then((feeBase) => {
      res.status(200).send({ status: "User fetched", feeBase });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error withe get user", error: err.message });
    });
});

export default router;
