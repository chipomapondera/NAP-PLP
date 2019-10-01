import React from 'react'
import {createComponent} from 'react-fela'

const StyleFilterBox = createComponent (() => ({
    backgroundColor: 'green',
    width: '100%',
    height: '350px',
    borderBottom: '1px dashed red',
}), 'div')

const ShoeStyleList = createComponent (() => ({
    display: 'block',
    justifyContent: 'left',
    marginLeft: '0',
    padding: '0',
}), 'div')

const ShoeStyleItem = createComponent (() => ({
    display: 'block',
    justifyContent: 'left',
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
}), 'div')

const ShoeStyleFilter = ({}) => {
    return (
        <StyleFilterBox>
            <ShoeStyleList> 
                <ShoeStyleItem> </ShoeStyleItem>
            </ShoeStyleList>
        </StyleFilterBox>
    )
}

export default ShoeStyleFilter