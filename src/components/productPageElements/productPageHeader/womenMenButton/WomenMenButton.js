import React from 'react'
import {createComponent} from 'react-fela'

const ToggleBox = createComponent (() => ({
    width: '45%',
    backgroundColor: 'white',
    borderBottom: '1px dashed grey',
    paddingBottom: '10px',
}), 'div', ['onClick'])

const ToggleButton = createComponent (() => ({
    width: '120px',
    height: '25px',
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '11px',
    color: 'dimgray',
    letterSpacing: '1px',
}), 'button')

const WomenMenButton = ({buttonText, showMaleProduct, setShowMaleProduct}) => {
    return (
        <ToggleBox onClick={()=> setShowMaleProduct(!showMaleProduct)}>
            <ToggleButton>{buttonText}</ToggleButton>
        </ToggleBox>
    )
}

export default WomenMenButton

