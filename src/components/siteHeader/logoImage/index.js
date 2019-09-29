import React from 'react'
import {createComponent} from 'react-fela'

const LogoImageBox = createComponent (() => ({
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    alignItems: 'center',
}), 'a')

const NAPLogo = createComponent (() => ({ 
    width: '350px',
    height: '25px',
    backgroundImage: 'url("https://i.postimg.cc/s2ZqHXZ6/NAP-logo-vector.png")',
    backgroundSize: 'cover',  
    display: 'block',
}), 'a')

const LogoImage = () => {
    return (
        <LogoImageBox><NAPLogo/></LogoImageBox>
    )
}

export default LogoImage

