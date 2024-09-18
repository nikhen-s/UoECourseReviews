import { Heading, Box, Card, CardBody, Text, Stack, Spacer} from '@chakra-ui/react'

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
  
  function CourseCard({courseCode, courseName, description, averageRating, numberOfReviews}){
    return(
    <Card m = {5}>
      <CardBody>
        <Stack direction={['column', 'row']} spacing='24px'>
            <CourseDetailsBox courseCode={courseCode} courseName={courseName} description={description}></CourseDetailsBox>
            <Spacer />
            <CourseRatingBox averageRating={averageRating} numberOfReviews={numberOfReviews}></CourseRatingBox>
        </Stack>
      </CardBody>
    </Card>
    )
  }

export default CourseCard;