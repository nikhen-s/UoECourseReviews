import { Card, Flex, CardBody, Avatar, Box, Heading, Stack, Text } from '@chakra-ui/react'
import { TiStar } from "react-icons/ti";
import { Rating } from 'react-simple-star-rating'
const ReviewCard = ({typeOfStudent, yearTaken, teachingQualityRating, learningImpactRating, workloadBalanceRating, review}) => {
    const averageRating = (teachingQualityRating + learningImpactRating + workloadBalanceRating)/3
    return(
        <Card variant ={"outline"} borderColor="lightgrey" p ={1} size="sm">
        <CardBody>
        <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Box>
                <Heading size='sm'>Anonymous {typeOfStudent} Student</Heading>
                <Rating
                display={"flex"}
                size={"25px"}
                readonly={true}
                width={"50%"}
                initialValue={averageRating}
                allowFraction={true}
                SVGstyle={{
                display: 'inline'
                }}/>
                </Box>
            </Flex>
            <Text>Year Course Taken: <strong>{yearTaken}</strong></Text>
            </Flex>
            <Text>
            {review}
            </Text>
        </CardBody>
        </Card>
    )
}

export default ReviewCard;