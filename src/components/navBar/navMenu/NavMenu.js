import React from 'react'
import {createComponent} from 'react-fela'

const NavMenuList = createComponent (() => ({
    listStyle: 'none',
    display: 'flex',
    margin: '0px',
    padding: '0px',
}), 'ul')

const NavMenuListItem = createComponent (() => ({
    display: 'flex',
    alignItems: 'center',
    margin: '0px',
    paddingRight: '40px',
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '11px',
    letterSpacing: '1px',
    color: 'white'
}), 'li')

const LogoLink = createComponent (() => ({
    textDecoration: 'none',
}))

const NavMenu = ({whatsNewMenu, designersMenu, clothingMenu, shoesMenu, bagsMenu, accessoriesMenu, jewelryMenu, lingerieMenu, beautyMenu, wearMenu}) => {
    return (
            <NavMenuList>
                <NavMenuListItem><LogoLink>{whatsNewMenu}</LogoLink></NavMenuListItem>
                <NavMenuListItem><LogoLink>{designersMenu}</LogoLink></NavMenuListItem>
                <NavMenuListItem><LogoLink>{clothingMenu}</LogoLink></NavMenuListItem>
                <NavMenuListItem><LogoLink>{shoesMenu}</LogoLink></NavMenuListItem>
                <NavMenuListItem><LogoLink>{bagsMenu}</LogoLink></NavMenuListItem>
                <NavMenuListItem><LogoLink>{accessoriesMenu}</LogoLink></NavMenuListItem>
                <NavMenuListItem><LogoLink>{jewelryMenu}</LogoLink></NavMenuListItem>
                <NavMenuListItem><LogoLink>{lingerieMenu}</LogoLink></NavMenuListItem>
                <NavMenuListItem><LogoLink>{beautyMenu}</LogoLink></NavMenuListItem>
                <NavMenuListItem><LogoLink>{wearMenu}</LogoLink></NavMenuListItem>
            </NavMenuList>
    )
}

export default NavMenu