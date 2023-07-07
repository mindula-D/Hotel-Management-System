
//create
// router.post("/", async (req, res) => {
//   const newFood = new FoodStock(req.body);
//   let emptyFields=[]
//   if(!foodName){
//     emptyFields.push('foodName')
//   }
  
//   if(!type){
//     emptyFields.push('type')
//   }
  
//   if(!quantity){
//     emptyFields.push('quantity')
//   }
  
//   if(!unitPrice){
//     emptyFields.push('unitPrice')
//   }

//   if(emptyFields.length>0){
//     return res.status(200).json({error:'Please fill in all the fields', emptyFields})
//   }
//   try {
//     const savedFood = await newFood.save();
//     res.status(200).json(savedFood);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });//create

import express from "express";
import FoodStock from "../models/Food.js";
const router = express.Router();


router.post("/", async (req, res) => {
  const newFood = new FoodStock(req.body);
  let emptyFields=[]
  if(!req.body.foodName){
    emptyFields.push('foodName')
  }
  
  if(!req.body.type){
    emptyFields.push('type')
  }
  
  if(!req.body.quantity){
    emptyFields.push('quantity')
  }
  
  if(!req.body.unitPrice){
    emptyFields.push('unitPrice')
  }

  if(emptyFields.length>0){
    return res.status(200).json({error:'Please fill in all the fields', emptyFields})
  }
  try {
    const savedFood = await newFood.save();
    res.status(200).json(savedFood);
  } catch (error) {
    res.status(500).json(error);
  }
});


//update
router.put("/:id", async (req, res) => {
  try {
    const updatedFood = await FoodStock.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFood);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    await FoodStock.findByIdAndDelete(req.params.id);
    res.status(200).json("Food deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//get
router.get("/:id", async (req, res) => {
  try {
    const food = await FoodStock.findById(req.params.id);
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all
router.get("/", async (req, res) => {
  try {
    const foods = await FoodStock.find(req.params.id);
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
