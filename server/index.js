import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import courseRoute from "./routes/courses.js";
import adminRoute from "./routes/admin.js";
import { connectDB } from "./database/db.js";
import Razorpay from "razorpay";

dotenv.config();
import cors from "cors";

export const instance = new Razorpay({
  key_id: process.env.Razorpay_Key,
  key_secret: process.env.Razorpay_Secret,
});
const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
const port = process.env.PORT;
app.use("/api", userRoute);
app.use("/api", courseRoute);
app.use("/api", adminRoute);
app.listen(port, () => {
  console.log(`running on port ${port}`);
  connectDB();
});
