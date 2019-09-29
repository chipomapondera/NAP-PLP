import React from 'react'
import {createComponent} from 'react-fela'

const NavMenuBox = createComponent (() => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%'
}), 'div')

const NavMenuList = createComponent (() => ({
    listStyle: 'none',
    display: 'inline-block',
}), 'ul')

const NavMenuListItem = createComponent (() => ({
    display: 'flex',
    position: 'relative',
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '11px',
    color: '#FFFFFF'
}), 'li')

const NavMenu = ({whatsNewMenu, designersMenu, clothingMenu, shoesMenu, bagsMenu, accessoriesMenu, jewelryMenu, lingerieMenu, beautyMenu, wearMenu}) => {
    return (
        <NavMenuBox>
            <NavMenuList>
                <NavMenuListItem>{whatsNewMenu}</NavMenuListItem>
                <NavMenuListItem>{designersMenu}</NavMenuListItem>
                <NavMenuListItem>{clothingMenu}</NavMenuListItem>
                <NavMenuListItem>{shoesMenu}</NavMenuListItem>
                <NavMenuListItem>{bagsMenu}</NavMenuListItem>
                <NavMenuListItem>{accessoriesMenu}</NavMenuListItem>
                <NavMenuListItem>{jewelryMenu}</NavMenuListItem>
                <NavMenuListItem>{lingerieMenu}</NavMenuListItem>
                <NavMenuListItem>{beautyMenu}</NavMenuListItem>
                <NavMenuListItem>{wearMenu}</NavMenuListItem>
            </NavMenuList>
        </NavMenuBox>
    )
}

export default NavMenu