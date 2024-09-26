import { Box, Flex, Center, Text, Spacer} from '@chakra-ui/react'
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

function CourseDetailsBox({courseCode, courseLink, courseName, courseDelivery, courseWorkExamRatio, courseCredits, courseLevel}){
    return (
    <Flex justifyContent="space-between" w = "100%">
      <Box w ="7%" textAlign={"left"}>
        <a href={courseLink}>{courseCode}</a>
      </Box>
      <Box w ="53%" textAlign={"left"}>
      <strong>{courseName}</strong>
      </Box>
      <Box w ="10%" textAlign={"left"}>
        {courseDelivery}
      </Box>
      <Box w ="10%" textAlign={"left"}>
        {courseCredits}
      </Box>
      <Box w ="10%" textAlign={"left"}>
        {courseWorkExamRatio}
      </Box>
      <Box w ="10%" textAlign={"left"}>
        {courseLevel}
      </Box>
    </Flex>
    )
  }
  
  function CourseRatingBox({averageRating, numberOfReviews}){ //to implement -> numberOfReviews
    return (
      <Center bg='tomato' w="8%" borderRadius='md' color='white' height="28px">
        <Text fontSize='xs'>{averageRating} <Text as='sub'>({numberOfReviews})</Text></Text>
      </Center>
    )
  }
  
  function CourseAccordionItem({courseCode, courseLink, courseName, courseDelivery, courseWorkExamRatio, courseCredits, courseLevel, averageRating, numberOfReviews}){
    return(
      <AccordionItem borderRadius='md' marginLeft={4} marginRight={4}>
      <h2>
        <AccordionButton p = {3}>
          <CourseDetailsBox courseCode={courseCode} courseLink={courseLink} courseName={courseName} courseDelivery={courseDelivery} courseWorkExamRatio={courseWorkExamRatio} courseCredits={courseCredits} courseLevel={courseLevel}></CourseDetailsBox>
          <Spacer></Spacer>
          <CourseRatingBox averageRating={averageRating} numberOfReviews={numberOfReviews}></CourseRatingBox>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        This course is good, you should take it babe
      </AccordionPanel>
    </AccordionItem>
    )
  }

export default CourseAccordionItem;