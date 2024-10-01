import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Text } from '@chakra-ui/react';


const AboutUs = () => {
    return(
        <>
        <Card>
        <CardHeader>
            <Heading size='md'>FAQ</Heading>
        </CardHeader>

        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                What is UoECourseReviews?
                </Heading>
                <Text pt='2' fontSize='sm'>
                This site was made to help University of Edinburgh students choose their courses by letting everyone create and read course reviews.
                </Text>
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Contact Us
                </Heading>
                <Text pt='2' fontSize='sm'>
                uoecoursereviews@gmail.com
                </Text>
            </Box>
            </Stack>
        </CardBody>
        </Card>
        
        </>
    )
}

export default AboutUs;