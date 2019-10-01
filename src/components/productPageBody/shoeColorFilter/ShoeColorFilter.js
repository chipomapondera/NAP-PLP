import React from 'react'
import  {createComponent} from 'react-fela'

const ColorFilterBox = createComponent (() => ({
    backgroundColor: 'lightblue',
    width: '100%',
    height: '350px',
    borderBottom: '1px dashed red',
}), 'div')

const ShoeColorList = createComponent (() => ({
    display: 'block',
    justifyContent: 'left',
    marginLeft: '0',
    padding: '0',
}), 'div')

const ShoeColorItem = createComponent (() => ({
    display: 'block',
    justifyContent: 'left',
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
}), 'div')

const ShoeColorFilter = ({}) => {
    return (
        <ColorFilterBox>
            <ShoeColorList>
                <ShoeColorItem> </ShoeColorItem>
            </ShoeColorList>
        </ColorFilterBox>
    )
}

export default ShoeColorFilter

