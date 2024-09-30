const mongoose = require("mongoose");

const courseReviewSchema = new mongoose.Schema({
  typeOfStudent: { type: String, required: true },
  review: { type: String, required: true },
  teachingQualityRating: { type: Number, required: true, min: 1, max: 5 },
  learningImpactRating: { type: Number, required: true, min: 1, max: 5 },
  workloadBalanceRating: { type: Number, required: true, min: 1, max: 5 },
  yearTaken: { type: Number, required: true }
});
module.exports = mongoose.model("Review", courseReviewSchema)

const courseSchema = new mongoose.Schema({
    courseName: { type: String},                              // "Course_Name"
    codeDpt: { type: String},                                 // "Code/DPT"
    acronym: { type: String },                                // "Acronym"
    restricted: { type: String },                             // "Restricted"
    quota: { type: mongoose.Schema.Types.Mixed },             // "Quota"
    level: { type: Number},                                   // "Level"
    credits: { type: Number},                                 // "Credits"
    year: { type: Number },                                   // "Year"
    delivery: { type: String },                               // "Delivery"
    examDiet: { type: String },                               // "Exam Diet"
    workExamRatio: { type: String },                          // "Work%/Exam%"
    courseOrganiser: { type: String },                        // "Course Organiser"
    additionalLecturers: { type: String },                    // "Additional Lecturers"
    dpmLink: { type: String },                                // "DPMT_Link"
    reviews: [courseReviewSchema]
  }, { timestamps: true });
module.exports = mongoose.model("Course", courseSchema, 'CoursesCollection')