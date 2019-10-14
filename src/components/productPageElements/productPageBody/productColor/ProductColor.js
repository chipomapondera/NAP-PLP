import React from 'react'
import {createComponent} from 'react-fela'

const ShoeColor = createComponent (({colorInfo}) => ({
    backgroundColor: colorInfo,
    width: '15px',
    height: '15px',
    border: '1px solid grey',
    boxSizing: 'border-box',
    margin: '5px 5px 5px 0px'
}), 'div')

const ProductColor = ({colorInfo}) => <ShoeColor colorInfo={colorInfo} /> 

export default ProductColor