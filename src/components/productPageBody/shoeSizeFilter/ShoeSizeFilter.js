import React from 'react'
import {createComponent} from 'react-fela'

const SizeFilterBox = createComponent (() => ({
    backgroundColor: 'violet',
    width: '100%',
    height: '350px',
    borderBottom: '1px dashed red'
}), 'div')

const ShoeSizeList = createComponent (() => ({

}), 'div')

const ShoeSizeItem = createComponent (() => ({

}), 'div')
 
const ShoeSizeFilter = ({}) => {
    return (
        <SizeFilterBox>
            <ShoeSizeList>
                <ShoeSizeItem> </ShoeSizeItem>
            </ShoeSizeList>
        </SizeFilterBox>
    )
}

export default ShoeSizeFilter

