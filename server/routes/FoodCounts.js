import express from "express";
import FoodCount from "../models/FoodCount.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const newCount = new FoodCount(req.body);
  let emptyFields=[]
  if(!req.body.foodNameCount){
    emptyFields.push('foodNameCount')
  }
  
  if(!req.body.typeCount){
    emptyFields.push('typeCount')
  }
  
  if(!req.body.date){
    emptyFields.push('date')
  }
  
  if(!req.body.availability){
    emptyFields.push('availability')
  }

  if(emptyFields.length>0){
    return res.status(200).json({error:'Please fill in all the fields', emptyFields})
  }
  try {
    const savedCount = await newCount.save();
    res.status(200).json(savedCount);
  } catch (error) {
    res.status(500).json(error);
  }
});


//get
router.get("/:id", async (req, res) => {
  try {
    const counts = await FoodCount.findById(req.params.id);
    res.status(200).json(counts);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all
router.get("/", async (req, res) => {
  try {
    const foodCounts = await FoodCount.find(req.params.id);
    res.status(200).json(foodCounts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await FoodCount.findByIdAndDelete(req.params.id);
    res.status(200).json("Food deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
export default router;
