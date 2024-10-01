require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Course = require("./models/Course");
const app = express()
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI || "";
app.use(express.json());

mongoose.connect(URI, {
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

app.post("/addreview", async function handlePostRequest(req, res){
  const courseCode = req.body.courseCode
  const courseReviewJson = req.body
  try{
    const updatedCourse = await Course.findOneAndUpdate(
      { "Code/DPT": courseCode },  // Query to find the course
      { $push: { reviews: courseReviewJson } },  // Update to push the review
      { new: true }  // Option to return the updated document
    );
    if (updatedCourse) {
      res.json({
        reviewAdded: courseReviewJson,
        message: "Successful"
      });
    } else {
      res.status(404).json({
        message: "Course not found"
      });
    }
  } catch (error){
    console.error(error);
    res.status(500).send("Add Review Error");
  }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))