import React from 'react'
import {createComponent} from 'react-fela'

const NavSearchBox = createComponent (() => ({

}), 'div')

const NavSearchIcon = createComponent (() => ({

}), 'div')

const NavSearch = () => {
    return (
        <NavSearchBox><NavSearchIcon /></NavSearchBox>
    )
}

export default NavSearch

