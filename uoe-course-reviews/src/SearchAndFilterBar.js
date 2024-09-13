//Box containing search and filter => maybe flex instead? 
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, InputGroup, InputLeftElement, Input} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { RiSearch2Line } from "react-icons/ri";
import {  BsChevronDown } from "react-icons/bs";
const SearchAndFilterBar = () => {
    return(
        <Flex p = {4} gap = {1}>
            <FilterBar></FilterBar>
            <SearchBar></SearchBar>
        </Flex>
    )
}

const SearchBar = () => {
    return(
        <InputGroup borderColor={'black'}>
            <InputLeftElement><Icon as={RiSearch2Line} boxSize={5}/></InputLeftElement>
            <Input placeholder='search a course by prof, name, or code...' />
        </InputGroup>
    )
}

const FilterBar = () => {
    return(
    <Menu>
        <MenuButton
            as={Button}
            aria-label='Filter'
            rightIcon={<BsChevronDown />}
            variant='outline'
            borderColor={'black'}
        >School</MenuButton>
        <MenuList>
            <MenuItem>
            School of Informatics
            </MenuItem>
            <MenuItem>
            School of Maths
            </MenuItem>
        </MenuList>
    </Menu>
    )
}

export default SearchAndFilterBar;