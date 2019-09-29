import React from 'react'
import {createComponent} from 'react-fela'

const NavMenuBox = createComponent (() => ({
    
}), 'div')

const NavMenuList = createComponent (() => ({
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
}), 'ul')

const NavMenuListItem = createComponent (() => ({
    padding: '0px 20px',
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '11px',
    color: 'red'
}), 'li')

const LogoLink = createComponent (() => ({
    textDecoration: 'none',
}))

const NavMenu = ({whatsNewMenu, designersMenu, clothingMenu, shoesMenu, bagsMenu, accessoriesMenu, jewelryMenu, lingerieMenu, beautyMenu, wearMenu}) => {
    return (
        <NavMenuBox>
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
        </NavMenuBox>
    )
}

export default NavMenu