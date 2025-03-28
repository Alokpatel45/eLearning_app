import express from "express";
import {
  getSingleCourse,
  getAllCourses,
  getAllLectures,
  getSingleCourses,
} from "../controllers/courses.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.get("/course/all", getAllCourses);
router.get("/course/:id", getSingleCourse);
router.get("/lectures/:id", isAuth, getAllLectures);
router.get("/lecture/:id", isAuth, getSingleCourses);

export default router;
