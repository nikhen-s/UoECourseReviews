import { Popover, PopoverTrigger, Spacer, Stack, Divider, useColorModeValue, Center} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { MdOutlineSchool } from "react-icons/md";
const DesktopNavBar = () => { 
  //style the stack, inside it there is logo + elements
  const mainCourseReviewLink = "/"
  const aboutUsLink = "/aboutus"
  const addReviewLink = "/review"
  const navBarColor = useColorModeValue('gray.800', 'gray.200')
  return(
    <>
    <Stack direction={'row'} width="100%" bg = {navBarColor} pr = {4} pl = {4}>
      <IconMenuItem icon = {<Icon as={MdOutlineSchool} boxSize={5}/>} label = {
          <strong>UoECourseReviews</strong>
      } link = {mainCourseReviewLink}></IconMenuItem>
      <Spacer></Spacer>
      <MenuItem label = "About Us" link = {aboutUsLink}></MenuItem>
      <MenuItem label = "Add Course Review" link = {addReviewLink}></MenuItem>
    </Stack>
    <Divider orientation='horizontal' />
    </>
  )
}
  const IconMenuItem = ({icon, label, link}) => {
    const linkColor = useColorModeValue('white', 'gray.800')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('gray.200', 'gray.800')
    return (
        <Popover trigger={'hover'}>
          <PopoverTrigger>
            <Center
              p = {4}
              as="a"
              href={link}
              color={linkColor}
              gap={1}
              _hover={{
                bg: popoverContentBgColor,
                textDecoration: 'none',
                color: linkHoverColor,
              }}>
                {icon}
                {label}
            </Center>
          </PopoverTrigger>
        </Popover>
    )
  }

  const MenuItem = ({label, link}) => {
    const linkColor = useColorModeValue('white', 'gray.800')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('gray.200', 'gray.800')
    return (
        <Popover trigger={'hover'}>
          <PopoverTrigger>
            <Center
              p = {4}
              as="a"
              href={link}

              color={linkColor}
              _hover={{
                bg: popoverContentBgColor,
                textDecoration: 'none',
                color: linkHoverColor,
              }}>
              {label}
            </Center>
          </PopoverTrigger>
        </Popover>
    )
  }

export default DesktopNavBar;