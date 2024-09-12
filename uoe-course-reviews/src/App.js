import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Heading, Box, Card, CardBody, Text, Stack, Spacer} from '@chakra-ui/react'
import DesktopNavBar from './NavBar';
import theme from './Theme'

function CourseDetailsBox({courseCode, courseName, description}){
  return (
  <Box>
    <Heading fontSize='xl'>{courseCode} - {courseName}</Heading>
    <Text mt={4}>{description}</Text>
  </Box>
  )
}

function CourseRatingBox({averageRating, numberOfReviews}){ //to implement -> numberOfReviews
  return (
  <Box bg='tomato' w='20%' borderRadius='md' p={4} color='white'>
    {averageRating}
  </Box>
  )
}

function CourseCard({courseDetailsBox, courseRatingBox}){
  return(
  <Card m = {5}>
    <CardBody>
    <Stack direction={['column', 'row']} spacing='24px'>
      {courseDetailsBox}
      <Spacer />
      {courseRatingBox}
    </Stack>
    </CardBody>
  </Card>
  )
}

function App() {

  return (
    <ChakraProvider theme={theme}>
      <DesktopNavBar></DesktopNavBar>
      <CourseCard courseDetailsBox={<CourseDetailsBox courseCode="INFXXXX" courseName = "Computer Architecture and Design" description = "This is a test description."></CourseDetailsBox>} courseRatingBox={<CourseRatingBox averageRating="5.5" numberOfReviews="50"></CourseRatingBox>}>
      </CourseCard>
      <CourseCard courseDetailsBox={<CourseDetailsBox courseCode="INFXXXX" courseName = "Computer Architecture and Design" description = "This is a test description."></CourseDetailsBox>} courseRatingBox={<CourseRatingBox averageRating="5.5" numberOfReviews="50"></CourseRatingBox>}>
      </CourseCard>
    </ChakraProvider>
  );
}

export default App;
