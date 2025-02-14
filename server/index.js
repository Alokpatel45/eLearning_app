import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import courseRoute from "./routes/courses.js";
import adminRoute from "./routes/admin.js";
import { connectDB } from "./database/db.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));
const port = process.env.PORT;
app.use("/api", userRoute);
app.use("/api", courseRoute);
app.use("/api", adminRoute);
app.listen(port, () => {
  console.log(`running on port ${port}`);
  connectDB();
});
