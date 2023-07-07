import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import jobRoute from "./routes/jobsRoute.js";
import feedbackRoute from "./routes/feedbacksRoute.js";
import loginRoute from "./routes/loginRoute.js";
import foodRoute from "./routes/Foods.js";
import foodCountRoute from "./routes/FoodCounts.js";
import eventRouter from "./routes/event.js";
import calRouter from "./routes/cal.js";
import feeBaseRouter from "./routes/feeBase.js";
import rmhotelRouter from "./routes/rmhotel.js";
import employeeRouter from "./routes/employees.js";
import salaryRouter from "./routes/salary.js";
import paymentRouter from "./routes/payments.js";
import driverRouter from "./routes/drivers.js";
import staffRouter from "./routes/staffs.js";
import tripRouter from "./routes/trips.js";

const app = express();
dotenv.config();

//making the db connection function
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

//calling connect() function
app.listen(8800, () => {
  connect();
  console.log("Connected to the backend.");
});

//if db disconnected
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB Disconnected");
});

//if db reconnected
mongoose.connection.on("connected", () => {
  console.log("mongoDB Reconnected");
});

//middlewares
app.use(express.json());
app.use("/jobs", jobRoute);
app.use("/feedbacks", feedbackRoute);
app.use("/login", loginRoute);

app.use("/food", foodRoute);
app.use("/foodCount", foodCountRoute);

app.use("/event", eventRouter);
app.use("/cal", calRouter);
app.use("/feeBase", feeBaseRouter);

app.use("/rmhotel", rmhotelRouter);

app.use("/employee", employeeRouter);
app.use("/salary", salaryRouter);

app.use("/payment", paymentRouter);

app.use("/driver", driverRouter);
app.use("/staff", staffRouter);
app.use("/trip", tripRouter);
