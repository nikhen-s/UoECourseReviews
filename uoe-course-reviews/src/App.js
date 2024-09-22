import './App.css';
import * as React from 'react'
import { ChakraProvider, Accordion } from '@chakra-ui/react'
import DesktopNavBar from './NavBar';
import theme from './Theme'
import SearchAndFilterBar from './SearchAndFilterBar';
import CourseAccordionItem from './CourseAccordion';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <DesktopNavBar></DesktopNavBar>
      <SearchAndFilterBar></SearchAndFilterBar>
      <Accordion defaultIndex={[0]} allowMultiple>
        <CourseAccordionItem courseCode="INFXXXX" courseName = "Computer Architecture and Design" descri
ption = "This is a test description." averageRating="5.5" numberOfReviews="50"></CourseAccordionItem>
      </Accordion>
    </ChakraProvider>
  );
}

export default App;
