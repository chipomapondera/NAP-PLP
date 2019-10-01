import React from 'react'
import {createComponent} from 'react-fela'

const ToggleBox = createComponent (() => ({
    width: '45%',
    backgroundColor: 'white',
    borderBottom: '1px dashed grey',
    paddingBottom: '10px',
}), 'div')

const ToggleButton = createComponent (() => ({
    width: '120px',
    height: '25px',
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '11px',
    color: 'dimgray',
    letterSpacing: '1px',
}), 'button')

const ViewToggle = ({mensButton}) => {
    return (
        <ToggleBox>
            <ToggleButton>{mensButton}</ToggleButton>
        </ToggleBox>
    )
}

export default ViewToggle

