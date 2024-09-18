import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import DesktopNavBar from './NavBar';
import theme from './Theme'
import SearchAndFilterBar from './SearchAndFilterBar';
import CourseCard from './CourseCard';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <DesktopNavBar></DesktopNavBar>
      <SearchAndFilterBar></SearchAndFilterBar>
      <CourseCard courseCode="INFXXXX" courseName = "Computer Architecture and Design" description = "This is a test description." averageRating="5.5" numberOfReviews="50">
      </CourseCard>
    </ChakraProvider>
  );
}

export default App;
