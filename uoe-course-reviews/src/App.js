import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Review from "./Review"
import DesktopNavBar from "./NavBar";
import theme from './Theme'
function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <DesktopNavBar></DesktopNavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Review />} />
          <Route path="/aboutus" element={<Home />} />
        </Routes>
        </ChakraProvider>
    </Router>
  );
}

export default App;
