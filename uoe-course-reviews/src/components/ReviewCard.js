import { Card, Flex, CardBody, Avatar, Box, Heading, Stack, Text } from '@chakra-ui/react'


const ReviewCard = ({typeOfStudent, yearTaken, teachingQualityRating, learningImpactRating, workloadBalanceRating, review}) => {
    return(
        <Card variant ={"outline"} borderColor="lightgrey" p ={1} size="sm">
        <CardBody>
        <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Box>
                <Heading size='sm'>Anonymous {typeOfStudent} Student</Heading>
                <Flex flexDirection={"row"} gap="1">
                <Box borderRadius={"10"} bgColor={"gray.400"} textAlign={"center"} p={1} width={"35%"} fontSize="small"> Teaching: {teachingQualityRating} </Box>
                <Box borderRadius={"10"} bgColor={"gray.400"} textAlign={"center"} p={1} width={"35%"} fontSize="small"> Learning: {learningImpactRating} </Box>
                <Box borderRadius={"10"} bgColor={"gray.400"} textAlign={"center"} p={1} width={"35%"} fontSize="small"> WB: {workloadBalanceRating} </Box>
                </Flex>
                </Box>
            </Flex>
            <Text>Year Course Taken: <strong>{yearTaken}</strong></Text>
            </Flex>
            <Text style={{"font-style":"italic"}}>
            "{review}"
            </Text>
        </CardBody>
        </Card>
    )
}

export default ReviewCard;