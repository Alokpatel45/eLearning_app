import tryCatch from "../middlewares/tryCatch.js";
import { Courses } from "../models/Courses.js";
import { Lecture } from "../models/lecture.js";
import { User } from "../models/user.js";
export const getAllCourses = tryCatch(async (req, res) => {
  const courses = await Courses.find();
  res.status(200).json({
    courses,
  });
});

export const getSingleCourse = tryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);
  res.status(200).json({
    course,
  });
});

export const getAllLectures = tryCatch(async (req, res) => {
  const lectures = await Lecture.find({ course: req.params.id });
  const user = await User.findById(req.user._id);
  if (user.role == "admin") {
    return res.status(200).json({
      lectures,
    });
  }
  if (!user.subscription.includes(req.params.id)) {
    return res.status(400).json({
      message: "You are not subscribed to this course",
    });
  }
  res.status(200).json({
    lectures,
  });
});
export const getSingleCourses = tryCatch(async (req, res) => {
  const lecture = await Lecture.findById(req.params.id);
  const user = await User.findById(req.user._id);
  if (user.role == "admin") {
    return res.status(200).json({
      lecture,
    });
  }
  if (!user.subscription.includes(req.params.id)) {
    return res.status(400).json({
      message: "You are not subscribed to this course",
    });
  }
  res.status(200).json({
    lecture,
  });
});

export const getMyCourses = tryCatch(async (req, res) => {
  const courses = await Courses.find({ _id: req.user.subscription });
  res.status(200).json({
    courses: courses,
  });
});
