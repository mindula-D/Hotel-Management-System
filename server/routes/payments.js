// const router = require("express").Router();
// let Payment = require("../models/Payment");

import express from "express";
const router = express.Router();
import Payment from "../models/Payment.js";

//Insert data 
router.route("/").post((req,res) => {

    const paymentID = req.body.paymentID;
    const customerName = req.body.customerName;
    const email =  req.body.email;
    const contactNumber =  req.body.contactNumber;
    const paymentDate = req.body.paymentDate;
    const transactionType1 =  req.body.transactionType1;
    const amount1 = Number(req.body.amount1);
    const transactionType2 =  req.body.transactionType2;
    const amount2 = Number(req.body.amount2);
    const transactionType3 =  req.body.transactionType3;
    const amount3 = Number(req.body.amount3);
    const totalAmount = Number(req.body.totalAmount);
    const paymentMethod = req.body.paymentMethod;

    const newPayment = new Payment({
        paymentID,
        customerName,
        email,
        contactNumber,
        paymentDate,
        transactionType1,
        amount1,
        transactionType2,
        amount2,
        transactionType3,
        amount3,
        totalAmount,
        paymentMethod,
    })

    newPayment.save().then(()=> {
        res.json("Payment Entry Added")
    }).catch ((err)=>{
        console.log(err);

    })
})

//Get all data items  
router.route("/").get((req,res) => {

    Payment.find().then((payments)=> {
        res.json(payments)
    }).catch ((err)=>{
        console.log(err);
    })
})

//Update data 
router.route("/update/:id").put(async (req,res) => {
    let payid = req.params.id;
    const{paymentID, customerName, email, contactNumber, paymentDate, transactionType1,amount1, transactionType2, amount2, transactionType3, amount3, totalAmount, paymentMethod,} = req.body;

    const updatePayment = {
        paymentID,
        customerName,
        email,
        contactNumber,
        paymentDate,
        transactionType1,
        amount1,
        transactionType2,
        amount2,
        transactionType3,
        amount3,
        totalAmount,
        paymentMethod
    }

    const update = await Payment.findByIdAndUpdate(payid, updatePayment).then(()=> {
        res.status(200).send({status: "Payment details updated"});
    }).catch ((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating", error: err.message});
    })
})

//Delete data 
router.route("/:id").delete(async (req,res) => {
    let payid = req.params.id;

    await Payment.findByIdAndDelete (payid).then(()=> {
        res.status(200).send({status: "Payment deleted"});
    }).catch ((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting", error: err.message});
    })
})

//Get a single data item 
router.route("/get/:id").get(async (req,res) => {
    //let payId = req.params.id;

    // await Payment.findById(payId)
    // .then((Payment)=> {
    //     res.status(200).send({status: "Payment fetched", Payment});
    // }).catch (() => {
    //     console.log(err.message);
    //     res.status(500).send({status: "Error with get payment", error: err.message});
    // })

    try {
        let payId = req.params.id;
        const user = await Payment.findById(payId)
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json(error);
    }
})

// module.exports = router;
export default router;
