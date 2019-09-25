import React from 'react'
import { createComponent } from 'react-fela'
import LocationAndLang from './locationAndLang'
import LogoImage from './logoImage'
import UserUI from './userUI'


const SiteHeaderWrapper = createComponent(() => ({
    maxWidth: '1120px',
    margin: '0 auto',
    height: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid black',
}), 'div')

const SiteHeader = ({ info }) => {
  console.log('info', info)

    const { userCountry, userLanguage, userRegistration, userLogin } = info
    return (
        <SiteHeaderWrapper>
            <LocationAndLang userCountry={userCountry} userLanguage={userLanguage} />
            <LogoImage/>
            <UserUI userRegistration={userRegistration} userLogin={userLogin} />
        </SiteHeaderWrapper>
    )
}
export default SiteHeader