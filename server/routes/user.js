import express from "express";

import { loginUser, Register, verifyUser } from "../controllers/user.js";

const router = express.Router();

router.post("/user/register", Register);

router.post("/user/verify", verifyUser);

router.post("/user/login", loginUser);
export default router;
