import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import { connectDB } from "./database/db.js";
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.use("/api", userRoute);

app.listen(port, () => {
  console.log(`running on port ${port}`);
  connectDB();
});
