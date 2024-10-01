import './App.css';
import * as React from 'react'
import { ChakraProvider, Accordion } from '@chakra-ui/react'
import theme from './Theme'
import SearchAndFilterBar from './components/SearchAndFilterBar';
import CourseAccordionItem from './components/CourseAccordion';
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
      <SearchAndFilterBar setCourses={setCourses}></SearchAndFilterBar>
      <Accordion allowMultiple={true}>
            {courses.map((course, index) => 
            <CourseAccordionItem key ={index} courseCode={course["Code/DPT"]} courseLink ={course["DPMT_Link"]} 
              courseName = {course["Course_Name"]} courseDelivery = {course["Delivery"]} 
              courseWorkExamRatio={course["Work%/Exam%"]} courseCredits={course["Credits"]} 
              courseLevel = {course["Level"]} description = "This is a test description." 
              listOfStudentReviews = {course["reviews"] || []}>
            </CourseAccordionItem>)}
      </Accordion>
    </ChakraProvider>
  );
}

export default Home;
