import React from 'react'
import {createComponent} from 'react-fela'

const DesignerFilterBox = createComponent (() => ({
    backgroundColor: 'purple',
    width: '100%',
    height: '350px',
    borderBottom: '1px dashed red',
}), 'div')

const ShoeDesignerList = createComponent (() => ({
    display: 'block',
    justifyContent: 'left',
    marginLeft: '0',
    padding: '0',
}), 'div')

const ShoeDesignerItem = createComponent (() => ({
    display: 'block',
    justifyContent: 'left',
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
}), 'div')

const ShoeDesignerFilter = ({}) => {
    return (
        <DesignerFilterBox>
            <ShoeDesignerList>
                <ShoeDesignerItem> </ShoeDesignerItem>
            </ShoeDesignerList>
        </DesignerFilterBox>
    )
}

export default ShoeDesignerFilter
