import { Stack, Box, Flex, Center, Text, Spacer} from '@chakra-ui/react'
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { useState, useEffect } from "react";
import ReviewCard from './ReviewCard'
function CourseDetailsBox({courseCode, courseLink, courseName, courseDelivery, courseWorkExamRatio, courseCredits, courseLevel, averageRating, numberOfReviews}){
    return (
    <Flex justifyContent="space-between" w = "100%">
      <Box display={"flex"} w ="7%" textAlign={"left"}>
        <a href={courseLink}>{courseCode}</a>
      </Box>
      <Box display={"flex"} w ="54%" textAlign={"left"}>
      <strong>{courseName}</strong>
      </Box>
      <Box display={"flex"} w ="8%" textAlign={"left"}>
        {courseDelivery}
      </Box>
      <Box display={"flex"} w ="8%" textAlign={"left"}>
        {courseCredits}
      </Box>
      <Box display={"flex"} w ="9%" textAlign={"left"}>
        {courseWorkExamRatio}
      </Box>
      <Box display={"flex"} w ="6%" textAlign={"left"}>
        {courseLevel}
      </Box>
      <Center display={"flex"} bg='gray.500' w="9%" borderRadius='md' color='white' height="28px">
        <Text fontSize='xs'>{averageRating} <Text as='sub'>({numberOfReviews})</Text></Text>
      </Center>
    </Flex>
    )
  }
  
  function CourseAccordionItem({courseCode, courseLink, courseName, courseDelivery, courseWorkExamRatio, courseCredits, courseLevel, averageRating, numberOfReviews, listOfStudentReviews}){
    const [studentReviews, setStudentReviews] = useState(listOfStudentReviews);
    return(
      <AccordionItem borderRadius='md' marginLeft={4} marginRight={4}>
      <h2>
        <AccordionButton p = {3}>
          <Flex w={"100%"}>
            <CourseDetailsBox courseCode={courseCode} courseLink={courseLink} courseName={courseName} courseDelivery={courseDelivery} courseWorkExamRatio={courseWorkExamRatio} courseCredits={courseCredits} courseLevel={courseLevel} averageRating={averageRating} numberOfReviews={numberOfReviews}></CourseDetailsBox>
          </Flex>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={2}>
      <Stack spacing={2}>
        {studentReviews.map((review, index) => (
          <ReviewCard key={index}></ReviewCard>
        ))}
      </Stack>
      </AccordionPanel>
    </AccordionItem>
    )
  }

export default CourseAccordionItem;