//Box containing search and filter => maybe flex instead? 
import { Checkbox, Spacer, Stack, Text, Menu, MenuButton, MenuList, MenuItem, Button, Flex, InputGroup, InputLeftElement, Input, Divider} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { RiSearch2Line } from "react-icons/ri";
import {  BsChevronDown } from "react-icons/bs";
import axios from "axios";
const SearchAndFilterBar = ({setCourses}) => {
    
    const setSearchQuery = (searchQuery) => {
        axios.get("/api/courses")
            .then(response => {
                setCourses(response.data.filter((course)=>course["Course_Name"].toLowerCase().includes(searchQuery.toLowerCase())))
            }
                )
            .catch(error => console.error(error));
    }

    return(
        //include beginning icon for ascending/descending!
        <Flex p = {4} gap = {1} width = "100%">
            <FilterBar filterName = "School" filterMenuItems={["School of Informatics"]} width ="7%"></FilterBar>
            <SearchBar width="50%" setSearchQuery={setSearchQuery}></SearchBar>
            <FilterBar filterName = "Delivery" filterMenuItems={["SEM1","SEM2","YR","FLEX"]} width ="8%"></FilterBar>
            <FilterBar filterName = "Credits" filterMenuItems={["10","20","40"]} width ="7%"></FilterBar>
            <FilterBar filterName = "CW%/Exam%" filterMenuItems={["No Coursework", "No Exam"]} width ="10%"></FilterBar>
            <FilterBar filterName = "Level" filterMenuItems={["8","10","11"]} width ="6%"></FilterBar>
            <Button variant='outline' borderColor={'black'} display="flex" width="10%">
                Ratings
            </Button>
        </Flex>
    )
}

const SearchBar = ({width, setSearchQuery}) => {
    return(
        <InputGroup borderColor={'black'} w ={width}>
            <InputLeftElement><Icon as={RiSearch2Line} boxSize={5}/></InputLeftElement>
            <Input onChange={(e)=>setSearchQuery(e.target.value)} placeholder='search a course by prof, name, or code...' />
        </InputGroup>
    )
}

const FilterBar = ({filterName, filterMenuItems, width, filter, setFilter}) => {
    return(
    <Menu>
        <MenuButton
            as={Button}
            aria-label='Filter'
            // rightIcon={<BsChevronDown />}
            variant='outline'
            width={width || "100%"}
            justifyContent="space-between"
            display="flex"
            borderColor={'black'}
            onChange={setFilter}
        >
            {filterName}
        </MenuButton>
        {/* <MenuList p={2}>
            <Stack>
                {filterMenuItems.map((menuItem, index) => (
                        <Checkbox key={index} colorScheme='red' onChange={(e) => setFilter()}>
                            {menuItem} 
                        </Checkbox>
                    ))}
            </Stack>
        </MenuList> */}
    </Menu>
    )
}

export default SearchAndFilterBar;