import {Text} from '@chakra-ui/react'
import { Rating } from 'react-simple-star-rating'
import { useState, useEffect } from "react";
import {
    FormControl,
    FormLabel,
    Flex,
    Box,
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
    
    return (
        <FormControl paddingTop={5} paddingLeft={10} paddingRight={10} verticalAlign={"center"} rounded="md" spacing={3}>
            <Stack spacing={2}>
                <FormLabel fontWeight={"bold"}>Course Name</FormLabel>
                <Input type='text' borderColor={'black'} backgroundColor="white"/>          
                <FormLabel as='legend' fontWeight={"bold"}>Type of Student</FormLabel>
                <RadioGroup defaultValue='Undergraduate'>
                    <HStack spacing='24px'>
                    <Radio value='Undergraduate' borderColor={'grey'}>Undergraduate</Radio>
                    <Radio value='Masters' borderColor={'grey'}>Masters</Radio>
                    <Radio value='PHD' borderColor={'grey'}>PHD</Radio>
                    <Radio value='Exchange' borderColor={'grey'}>Exchange</Radio>
                    </HStack>
                </RadioGroup>
                <FormLabel fontWeight={"bold"}>When did you take this course?</FormLabel>
                <NumberInput max={2024} min={1900} defaultValue={2024} borderColor={'black'}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Text fontWeight={"bold"}>Rating</Text>
                <Stack rounded="md" borderColor={"black"} border={"1px"} p ={4} width={"100%"}>
                    <RatingCriteriaBox ratingCriteria={"Teaching Quality"}></RatingCriteriaBox>
                    <RatingCriteriaBox ratingCriteria={"Usefulness"}></RatingCriteriaBox>
                    <RatingCriteriaBox ratingCriteria={"Workload Balance"}></RatingCriteriaBox> 
                </Stack>
                <FormLabel fontWeight={"bold"}>Review/Study Tips</FormLabel>
                <Input type='text' borderColor={'black'} height={70}/>
                <Button width="7%" backgroundColor="gray.800" color="white">
                    Submit
                </Button>
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