//Box containing search and filter => maybe flex instead? 
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, InputGroup, InputLeftElement, Input} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { RiSearch2Line } from "react-icons/ri";
import {  BsChevronDown } from "react-icons/bs";
const SearchAndFilterBar = () => {
    return(
        <Flex p = {4} gap = {1}>
            <FilterBar filterName = "School" filterMenuItems={["School of Informatics", ""]} width = "7%"></FilterBar>
            <SearchBar width = "47%"></SearchBar>
            <FilterBar filterName = "Delivery" filterMenuItems={["SEM1","SEM2","YR"]} width = "10%"></FilterBar>
            <FilterBar filterName = "Credits" filterMenuItems={["10","20"]} width = "10%"></FilterBar>
            <FilterBar filterName = "CW%/Exam%" filterMenuItems={["No Exam"]} width = "10%"></FilterBar>
            <FilterBar filterName = "Level" filterMenuItems={["8","10","11"]} width = "10%"></FilterBar>
        </Flex>
    )
}

const SearchBar = ({width}) => {
    return(
        <InputGroup borderColor={'black'} w = {width}>
            <InputLeftElement><Icon as={RiSearch2Line} boxSize={5}/></InputLeftElement>
            <Input placeholder='search a course by prof, name, or code...' />
        </InputGroup>
    )
}

const FilterBar = ({filterName, filterMenuItems, width}) => {
    return(
    <Menu w = {width}>
        <MenuButton
            as={Button}
            aria-label='Filter'
            rightIcon={<BsChevronDown />}
            variant='outline'
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