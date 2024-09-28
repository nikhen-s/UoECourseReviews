import {Text} from '@chakra-ui/react'
import { Rating } from 'react-simple-star-rating'
import { useState, useEffect } from "react";
import {
    FormControl,
    FormLabel,
    Flex,
    Box,
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
    
    return (
        <FormControl p={4} m={2} rounded="md" width={"98%"} spacing={2}>
            <Stack spacing={2}>
                <FormLabel fontWeight={"bold"}>Course Name</FormLabel>
                <Input type='text' borderColor={'black'} backgroundColor="white"/>          
                <HStack>
                <FormLabel as='legend' width={"10%"} fontWeight={"bold"}>Type of Student</FormLabel>
                <RadioGroup defaultValue='Undergraduate' width={"40%"}>
                    <HStack spacing='24px'>
                    <Radio value='Undergraduate' borderColor={'grey'}>Undergraduate</Radio>
                    <Radio value='Masters' borderColor={'grey'}>Masters</Radio>
                    <Radio value='PHD' borderColor={'grey'}>PHD</Radio>
                    <Radio value='Exchange' borderColor={'grey'}>Exchange</Radio>
                    </HStack>
                </RadioGroup>
                <FormLabel width={"20%"} fontWeight={"bold"}>When did you take this course?</FormLabel>
                <NumberInput max={2024} min={1900} defaultValue={2024} borderColor={'black'} width={"30%"}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                </HStack>
                <FormLabel fontWeight={"bold"}>Review/Study Tips</FormLabel>
                <Input type='text' borderColor={'black'} height={70}/>
                <Text fontWeight={"bold"}>Rating</Text>
                <Stack rounded="md" borderColor={"black"} border={"1px"} p ={4}>
                <RatingCriteriaBox ratingCriteria={"Teaching Quality"}></RatingCriteriaBox>
                <RatingCriteriaBox ratingCriteria={"Usefulness"}></RatingCriteriaBox>
                <RatingCriteriaBox ratingCriteria={"Workload Balance"}></RatingCriteriaBox> 
                </Stack>
            </Stack> 
        </FormControl>
    )
}

const RatingCriteriaBox = ({ratingCriteria}) => {
    const [rating, setRating] = useState(0)
    const handleRating = (rate, index) => {
        setRating(rate)
    }
    return (
        <Flex direction="row" alignItems="center" >
            <Text display={"flex"} width={"15%"}>{ratingCriteria}</Text>
            <Rating
                display={"flex"}
                width={"85%"}
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