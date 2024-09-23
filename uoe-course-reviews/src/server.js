const express = require("express");
const mongoose = require("mongoose");
const Course = require("./models/Course");
const app = express()
const PORT = process.env.PORT || 4000;

mongoose.connect("mongodb+srv://nikh3n:Otherside70%25@uoecoursescluster.h1jg4.mongodb.net/UoECoursesData", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));;

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))