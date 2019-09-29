import React from 'react'
import {createComponent} from 'react-fela'

const NavSearchBox = createComponent (() => ({
    display: 'flex',
    height: '40px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'blue',
}), 'div')

const NavSearchText = createComponent (() => ({
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '11px',
    color: 'red'
}), 'div')

const SearchIconWrapper = createComponent (() => ({
    marginRight: '20px',
    paddingLeft: '10px',
    boxSizing: 'border-box',
}), 'div')

const NavSearchIcon = createComponent (() => ({ 
    width: '18px',
    height: '18px',
    backgroundImage: 'url("https://i.postimg.cc/pd8NBCDz/Nav-Search-Icon.png")',
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

