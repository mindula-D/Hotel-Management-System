import express from "express";
import {
  createFeedback,
  deleteFeedback,
  getFeedback,
  getAllFeedbacks,
} from "../controllers/feedbackController.js";
const router = express.Router();

//create
router.post("/", createFeedback);

//delete
router.delete("/:id", deleteFeedback);

//get
router.get("/:id", getFeedback);

//get all
router.get("/", getAllFeedbacks);

export default router;
