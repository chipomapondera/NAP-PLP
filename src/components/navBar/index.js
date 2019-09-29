import React from 'react'
import {createComponent} from 'react-fela'
import NavMenu from '../navBar/navMenu/NavMenu'
import NavSearch from '../navBar/navSearch/NavSearch'

const NavBarWrapper = createComponent (() => ({
    maxWidth: '1680px',
    margin: '0 auto',
    height: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'black'
}), 'div')

const NavBarElements = createComponent (() => ({
    maxWidth: '1120px',
    margin: '0 auto',
    height: '40px',
    backgroundColor: 'yellow',
}), 'div')

const NavBar = ({info}) => {
    console.log('info', info)
    
    const {whatsNewMenu, designersMenu, clothingMenu, shoesMenu, bagsMenu, accessoriesMenu, jewelryMenu, lingerieMenu, beautyMenu, wearMenu, navSearchText} = info
    return (
        <NavBarWrapper>
            <NavBarElements>
                <NavMenu
                whatsNewMenu={whatsNewMenu}
                designersMenu={designersMenu}
                clothingMenu={clothingMenu}
                shoesMenu={shoesMenu}
                bagsMenu={bagsMenu}
                accessoriesMenu={accessoriesMenu}
                jewelryMenu={jewelryMenu}
                lingerieMenu={lingerieMenu}
                beautyMenu={beautyMenu}
                wearMenu={wearMenu}
                />
                <NavSearch navSearchText={navSearchText}/>
            </NavBarElements>
        </NavBarWrapper>
    )
}

export default NavBar