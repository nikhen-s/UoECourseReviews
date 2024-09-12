import { Popover, PopoverTrigger, Box, Spacer, Stack, Divider, useColorModeValue, Center} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { MdOutlineSchool } from "react-icons/md";
const DesktopNavBar = () => { 
  //style the stack, inside it there is logo + elements
  const navBarColor = useColorModeValue('gray.800', 'gray.200')
  return(
    <div>
    <Stack direction={'row'} width="100%" bg = {navBarColor}>
      <IconMenuItem icon = {<Icon as={MdOutlineSchool} boxSize={5}/>} label = {
          <strong>UoECourseReviews</strong>
      } link = "www.google.com"></IconMenuItem>
      <Spacer></Spacer>
      <MenuItem label = "About Us" link = "www.google.com"></MenuItem>
      <MenuItem label = "Leave a Review" link = "www.google.com"></MenuItem>
    </Stack>
    <Divider orientation='horizontal' />
    </div>
  )
}
  const IconMenuItem = ({icon, label, link}) => {
    const linkColor = useColorModeValue('white', 'gray.800')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('gray.200', 'gray.800')
    return (
      <Box>
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
      </Box> 
    )
  }

  const MenuItem = ({label, link}) => {
    const linkColor = useColorModeValue('white', 'gray.800')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('gray.200', 'gray.800')
    return (
      <Box>
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
      </Box> 
    )
  }

export default DesktopNavBar;