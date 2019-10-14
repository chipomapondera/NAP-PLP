import React from 'react'
import {createComponent} from 'react-fela'

const ButtonWrapper = createComponent (() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDiection: 'row',
    width: '45%',
    backgroundColor: 'white',
    paddingBottom: '10px',
    borderBottom: '1px dashed, grey',
}), 'div')

const WomenMenButtonBox = createComponent (() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    marginRight: '30px',
    width: '23%',
    backgroundColor: 'white',
}), 'div', ['onClick'])

const WomenMenButton = createComponent (() => ({
    width: '120px',
    height: '25px',
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '11px',
    color: 'dimgray',
    letterSpacing: '1px',
}), 'button')

const ColorButtonBox = createComponent (() => ({
    display: 'flex',
    justifyContent: 'flex-start', 
    width: '23%',
    backgroundColor: 'white',
borderBottom: '1px dashed, grey',
}), 'div', ['onClick'])

const ColorButton = createComponent (() => ({
    width: '110px',
    height: '25px',
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '11px',
    color: 'dimgrey',
    letterSpacing: '1px',
}), 'button')

const PageHeaderButtons = ({womenMenButtonText, showMaleProduct, setShowMaleProduct, colourButtonText, showColors, setShowColors}) => {
    return (
        <ButtonWrapper> 
            <WomenMenButtonBox onClick={()=> setShowMaleProduct(!showMaleProduct)}>
                <WomenMenButton>{womenMenButtonText}</WomenMenButton>
            </WomenMenButtonBox>
            <ColorButtonBox onClick={()=> setShowColors(!showColors)}>
                <ColorButton>{colourButtonText}</ColorButton>
            </ColorButtonBox>
        </ButtonWrapper>
    )
}

export default PageHeaderButtons

