import {Text} from '@chakra-ui/react'
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
    const [courseName, setCourseName] = useState('')
    const [typeOfStudent, setTypeOfStudent] = useState('Undergraduate')
    const [yearTaken, setYearTaken] = useState(2024)
    const [teachingQualityRating, setTeachingQualityRating] = useState(0)
    const [learningImpactRating, setLearningImpactRating] = useState(0)
    const [workloadBalanceRating, setWorkloadBalanceRating] = useState(0)
    const [review, setReview] = useState('')

    const addReview = () => {
        //courseName, typeOfStudent, review, teachingQualityRating, learningImpactRating, workloadBalanceRating, yearTaken
        axios.post('/addreview', {
            courseName: courseName,
            typeOfStudent: typeOfStudent,
            yearTaken: yearTaken,
            teachingQualityRating: teachingQualityRating,
            learningImpactRating: learningImpactRating,
            workloadBalanceRating: workloadBalanceRating,
            review: review
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    //Do a post request from server using axios, the post request should create a courseReview then add it to the addReview function! then input validation.

    return (
        <FormControl paddingTop={5} paddingLeft={10} paddingRight={10} verticalAlign={"center"} rounded="md" spacing={3}>
            <Stack spacing={2}>
                <FormLabel fontWeight={"bold"}>Course Name</FormLabel>
                <Input type='text' borderColor={'black'} backgroundColor="white" onChange={(event)=>setCourseName(event.target.value)}/>          
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
                <Button width="7%" backgroundColor="gray.800" color="white" onClick={addReview}>
                    Submit
                </Button>
            </Stack> 
        </FormControl>
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