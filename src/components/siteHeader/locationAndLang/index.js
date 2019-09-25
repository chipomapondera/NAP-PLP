import React from 'react'
import {createComponent} from 'react-fela'
import { relative } from 'path'

const LocationAndLangBox = createComponent (() => ({
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
}), 'div')

const LocationText = createComponent (() => ({  
    display: 'flex',
    position: 'relative',
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '14px',
    marginRight: '15px',
}), 'div')

const LanguageText = createComponent (() => ({  
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '14px',
}), 'div')

const LogoLink = createComponent(() => ({  
    borderLeft: '1px solid grey',
    paddingLeft: '10px',
}),'a')

const LocationAndLang = ({userCountry, userLanguage}) => {
    return (
        <LocationAndLangBox >
            <LocationText>{userCountry}</LocationText>
            <LanguageText><LogoLink>{userLanguage}</LogoLink></LanguageText>
        </LocationAndLangBox>
    )
}

export default LocationAndLang

