import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";
const router = express.Router();

//createUser
router.post("/register", createUser);

//loginUser
router.post("/", loginUser);

export default router;
