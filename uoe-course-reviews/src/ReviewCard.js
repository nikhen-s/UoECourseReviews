import { Card, Flex, CardBody, Avatar, Box, Heading, Stack, Text } from '@chakra-ui/react'
import { TiStar } from "react-icons/ti";
const ReviewCard = () => {
    return(
        <Card variant ={"outline"} borderColor="lightgrey" p ={1} size="sm">
        <CardBody>
        <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Box>
                <Heading size='sm'>Anonymous UG Student</Heading>
                <Stack direction='row' spacing='0'>
                    <TiStar color="gold"/>
                    <TiStar color="gold"/>
                    <TiStar color="gold"/>
                    <TiStar color="gold"/>
                    <TiStar color="gold"/>
                </Stack>
                </Box>
            </Flex>
            <Text>2024-2025</Text>
            </Flex>
            <Text>
            Review
            </Text>
        </CardBody>
        </Card>
    )
}

export default ReviewCard;