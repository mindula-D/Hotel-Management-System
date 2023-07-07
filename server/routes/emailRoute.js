import express from "express";
import { sendEmail, getEmail } from "../controllers/emailController";
const router = express.Router();

router.post("/", sendEmail);
