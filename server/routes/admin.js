import express from "express";
import { isAdmin, isAuth } from "../middlewares/isAuth.js";
import {
  addLecture,
  allStats,
  createCourse,
  deleteCourse,
  deleteLecture,
} from "../controllers/admin.js";
import { uploadFiles } from "../middlewares/multer.js";
import multer from "multer";
import { getMyCourses } from "../controllers/courses.js";
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/course/new", isAuth, isAdmin, uploadFiles, createCourse);

router.post("/course/:id", isAuth, isAdmin, uploadFiles, addLecture);

router.get("/stats", isAuth, isAdmin, allStats);

router.get("/mycourses", isAuth, isAdmin, getMyCourses);

router.delete("/course/:id", isAuth, isAdmin, deleteCourse);

router.delete("/lecture/:id", isAuth, isAdmin, deleteLecture);

export default router;
