import express from "express";
import {
  createJob,
  updateJob,
  deleteJob,
  getJob,
  getAllJobs,
} from "../controllers/jobController.js";
const router = express.Router();

//create
router.post("/", createJob);

//update
router.put("/:id", updateJob);

//delete
router.delete("/:id", deleteJob);

//get
router.get("/:id", getJob);

//get all
router.get("/", getAllJobs);

export default router;
