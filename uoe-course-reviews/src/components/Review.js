import {Alert, AlertIcon, AlertTitle, AlertDescription, Text} from '@chakra-ui/react'
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";
import axios from "axios";
import {
    FormControl,
    FormLabel,
    Flex,
    Button,
    Stack,
    Select,
    FormErrorMessage,
    RadioGroup,
    HStack,
    Radio,
    FormHelperText,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
  } from '@chakra-ui/react'
const Review = () => {
    const [courseCode, setCourseCode] = useState('')
    const [courseName, setCourseName] = useState('')
    const [typeOfStudent, setTypeOfStudent] = useState('Undergraduate')
    const [yearTaken, setYearTaken] = useState(2024)
    const [teachingQualityRating, setTeachingQualityRating] = useState(0)
    const [learningImpactRating, setLearningImpactRating] = useState(0)
    const [workloadBalanceRating, setWorkloadBalanceRating] = useState(0)
    const [review, setReview] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [errorStatus, setErrorStatus] = useState(false)
    const [addReviewStatus, setAddReviewStatus] = useState(false)
    //what happens if i set
    const validationCheck = () => {
        if (searchQuery.length === 0){
            setErrorStatus(true)
        }
        else if (searchQuery!== courseCode + " - " + courseName){
            setErrorStatus(true)
        }
        else if (typeof yearTaken !== "number") {
            setErrorStatus(true);
        }
        else if (review.length === 0){
            setErrorStatus(true)
        }
    }

    const addReview = () => {
        //courseName, typeOfStudent, review, teachingQualityRating, learningImpactRating, workloadBalanceRating, yearTaken
        axios.post('/addreview', {
            courseCode: courseCode,
            typeOfStudent: typeOfStudent,
            yearTaken: yearTaken,
            teachingQualityRating: teachingQualityRating,
            learningImpactRating: learningImpactRating,
            workloadBalanceRating: workloadBalanceRating,
            review: review
        }).then(function (response) {
            setAddReviewStatus(true)
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    //Do a post request from server using axios, the post request should create a courseReview then add it to the addReview function! then input validation.
    const [courseDropDown, setCourseDropDown] = useState([])
    const filterCourses = (filterQuery) => {
        if (filterQuery.length == 0){
            setCourseDropDown([])
        } else {
            axios.get("/api/courses")
                .then(response => {
                    setCourseDropDown(response.data.filter((course)=>course["Course_Name"].toLowerCase().includes(searchQuery.toLowerCase())))
                }
                    )
                .catch(error => console.error(error));
        }
    }
    return (
        <>
        {addReviewStatus ? (
            <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
          >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              Review submitted!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              Thanks for submitting your review, your knowledge will be much appreciated by future UoE students.
              <a href="/">
                <Button backgroundColor={"green.400"}>See your review</Button>
              </a>
            </AlertDescription>
          </Alert>
          ) : (
                <FormControl paddingTop={5} paddingLeft={10} paddingRight={10} verticalAlign={"center"} rounded="md" spacing={3}>
                <Stack spacing={2}>
                    <FormLabel fontWeight={"bold"}>Course Name</FormLabel>
                    <Input type='text' value={searchQuery} 
                    borderColor={'black'} backgroundColor="white" 
                    onChange={(event)=> {
                    setSearchQuery(event.target.value)
                    filterCourses(event.target.value)
                    }}/>
                    {
                        courseDropDown.length > 0 && 
                        courseDropDown.map((course) => (
                            <Text key={course["Course_Name"]} onClick={() => {
                                setSearchQuery(course["Code/DPT"].toString() + " - " + course["Course_Name"].toString())
                                setCourseCode(course["Code/DPT"])
                                setCourseName(course["Course_Name"])
                                setCourseDropDown([])
                            }}>{course["Code/DPT"].toString()} - {course["Course_Name"].toString()}</Text>
                        ))
                    }

                    <FormLabel as='legend' fontWeight={"bold"}>Type of Student</FormLabel>
                    <RadioGroup defaultValue='Undergraduate' onChange={setTypeOfStudent} value={typeOfStudent}>
                        <HStack spacing='24px'>
                        <Radio value='Undergraduate' borderColor={'grey'}>Undergraduate</Radio>
                        <Radio value='Masters' borderColor={'grey'}>Masters</Radio>
                        <Radio value='PHD' borderColor={'grey'}>PHD</Radio>
                        <Radio value='Exchange' borderColor={'grey'}>Exchange</Radio>
                        </HStack>
                    </RadioGroup>
                    <FormLabel fontWeight={"bold"}>When did you take this course?</FormLabel>
                    <NumberInput max={2024} min={1900} defaultValue={2024} borderColor={'black'} onChange={setYearTaken}>
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Text fontWeight={"bold"}>Rating</Text>
                    <Stack rounded="md" borderColor={"black"} border={"1px"} p ={4} width={"100%"}>
                        <RatingCriteriaBox ratingCriteria={"Teaching Quality"} rating ={teachingQualityRating} setRating={setTeachingQualityRating}></RatingCriteriaBox>
                        <RatingCriteriaBox ratingCriteria={"Learning Impact"} rating={learningImpactRating} setRating={setLearningImpactRating}></RatingCriteriaBox>
                        <RatingCriteriaBox ratingCriteria={"Workload Balance"} rating={workloadBalanceRating} setRating={setWorkloadBalanceRating}></RatingCriteriaBox> 
                    </Stack>
                    <FormLabel fontWeight={"bold"}>Review/Study Tips</FormLabel>
                    <Input type='text' borderColor={'black'} height={70} onChange={(event) => setReview(event.target.value)}/>
                    <Button width="7%" backgroundColor="gray.800" color="white" onClick={
                        (review) => {
                            validationCheck()
                            if (errorStatus==false){
                                addReview(review)
                            } else{
                                alert("Please ensure all inputs are correct!")
                            }
                        }
                        }>
                        Submit
                    </Button>
                </Stack> 
            </FormControl>
          )}
        </>
    )
}

const RatingCriteriaBox = ({ratingCriteria, rating, setRating}) => {
    const handleRating = (rate, index) => {
        setRating(rate)
    }
    return (
        <Flex direction="row" alignItems="center" >
            <Text display={"flex"} width={"50%"}>{ratingCriteria}</Text>
            <Rating
                display={"flex"}
                width={"50%"}
                onClick={handleRating}
                initialValue={rating}
                allowFraction={false}
                SVGstyle={{
                display: 'inline'
                }}
            />
        </Flex>
    )
}

export default Review;