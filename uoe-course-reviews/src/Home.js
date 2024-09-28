import './App.css';
import * as React from 'react'
import { ChakraProvider, Accordion } from '@chakra-ui/react'
import theme from './Theme'
import SearchAndFilterBar from './SearchAndFilterBar';
import CourseAccordionItem from './CourseAccordion';
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("/api/courses")
      .then(response => {
        setCourses(response.data)
      }
        )
      .catch(error => console.error(error));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <SearchAndFilterBar></SearchAndFilterBar>
      <Accordion allowMultiple={true}>
            {courses.map(course => 
            <CourseAccordionItem courseCode={course["Code/DPT"]} courseLink ={course["DPMT_Link"]} 
              courseName = {course["Course_Name"]} courseDelivery = {course["Delivery"]} 
              courseWorkExamRatio={course["Work%/Exam%"]} courseCredits={course["Credits"]} 
              courseLevel = {course["Level"]} description = "This is a test description." 
              averageRating="N/A" numberOfReviews="0" listOfStudentReviews = {["",""]}>
            </CourseAccordionItem>)}
      </Accordion>
    </ChakraProvider>
  );
}

export default Home;
