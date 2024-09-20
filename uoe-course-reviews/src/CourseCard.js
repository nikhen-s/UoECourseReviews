import { Heading, Box, Card, CardBody, Text, Stack, Spacer} from '@chakra-ui/react'

function CourseDetailsBox({courseCode, courseName}){
    return (
    <Box>
      <Heading fontSize='xl'>{courseCode} - {courseName}</Heading>
    </Box>
    )
  }
  
  function CourseRatingBox({averageRating, numberOfReviews}){ //to implement -> numberOfReviews
    return (
    <Box bg='tomato' w='10%' borderRadius='md' p={4} color='white' height={10}>
      {averageRating}
      <Text fontSize='xs'> {numberOfReviews} reviews</Text>
    </Box>
    )
  }
  
  function CourseCard({courseCode, courseName, averageRating, numberOfReviews}){
    return(
    <Card m = {5}>
      <CardBody>
        <Stack direction={['column', 'row']} spacing='24px'>
            <CourseDetailsBox courseCode={courseCode} courseName={courseName}></CourseDetailsBox>
            <Spacer />
            <CourseRatingBox averageRating={averageRating} numberOfReviews={numberOfReviews}></CourseRatingBox>
        </Stack>
      </CardBody>
    </Card>
    )
  }

export default CourseCard;