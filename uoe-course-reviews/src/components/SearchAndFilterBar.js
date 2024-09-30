//Box containing search and filter => maybe flex instead? 
import { Spacer, Menu, MenuButton, MenuList, MenuItem, Button, Flex, InputGroup, InputLeftElement, Input} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { RiSearch2Line } from "react-icons/ri";
import {  BsChevronDown } from "react-icons/bs";
const SearchAndFilterBar = () => {
    //why 110%?
    return(
        //include beginning icon for ascending/descending!
        <Flex p = {4} gap = {1} width = "100%">
            <FilterBar filterName = "School" filterMenuItems={["School of Informatics"]} width ="7%"></FilterBar>
            <SearchBar width ="52%"></SearchBar>
            <FilterBar filterName = "Delivery" filterMenuItems={["SEM1","SEM2","YR","FLEX"]} width ="8%"></FilterBar>
            <FilterBar filterName = "Credits" filterMenuItems={["10","20","40"]} width ="7%"></FilterBar>
            <FilterBar filterName = "CW%/Exam%" filterMenuItems={["Ascending, Descending"]} width ="10%"></FilterBar>
            <FilterBar filterName = "Level" filterMenuItems={["8","10","11"]} width ="6%"></FilterBar>
            <Button variant='outline' borderColor={'black'} display="flex" width="10%">
                Ratings
            </Button>
        </Flex>
    )
}

const SearchBar = ({width}) => {
    return(
        <InputGroup borderColor={'black'} w ={width}>
            <InputLeftElement><Icon as={RiSearch2Line} boxSize={5}/></InputLeftElement>
            <Input placeholder='search a course by prof, name, or code...' />
        </InputGroup>
    )
}

const FilterBar = ({filterName, filterMenuItems, width}) => {
    return(
    <Menu>
        <MenuButton
            as={Button}
            aria-label='Filter'
            rightIcon={<BsChevronDown />}
            variant='outline'
            width={width || "100%"}
            justifyContent="space-between"
            display="flex"
            borderColor={'black'}
        >{filterName}</MenuButton>
        <MenuList>
            {filterMenuItems.map((menuItem, index) => (
                    <MenuItem key={index}>
                        {menuItem}
                    </MenuItem>
                ))}

        </MenuList>
    </Menu>
    )
}

export default SearchAndFilterBar;