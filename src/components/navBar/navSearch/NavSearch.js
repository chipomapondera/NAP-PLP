import React from 'react'
import {createComponent} from 'react-fela'

const NavSearchBox = createComponent (() => ({
    display: 'flex',
    height: '30px',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '20px',
    backgroundColor: 'white',
}), 'div')

const NavSearchText = createComponent (() => ({
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '11px',
    letterSpacing: '1px',
    color: 'grey'
}), 'div')

const SearchIconWrapper = createComponent (() => ({
    marginRight: '20px',
    paddingLeft: '10px',
    boxSizing: 'border-box',
}), 'div')

const NavSearchIcon = createComponent (() => ({ 
    width: '20px',
    height: '20px',
    backgroundImage: 'url("https://i.postimg.cc/MHZQL1yp/Nav-Search-Icon.png")',
    backgroundSize: 'cover',  
    display: 'block',
}), 'a')

const NavSearch = ({navSearchText}) => {
    return (
        <NavSearchBox>
            <NavSearchText>{navSearchText}</NavSearchText>
            <SearchIconWrapper><NavSearchIcon/></SearchIconWrapper>
        </NavSearchBox>
    )
}

export default NavSearch

