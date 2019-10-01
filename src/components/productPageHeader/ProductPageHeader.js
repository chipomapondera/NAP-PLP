import React from 'react'
import {createComponent} from 'react-fela'
import HeaderName from './headerName/HeaderName'

const BodyHeaderWrapper = createComponent (() => ({
    margin: '0 auto',
    padding: '0',
    backgroundColor: 'blue',
    maxWidth: '1000px',
    height: '55px',
}), 'div')

const ProductPageHeader = ({productPageTitle}) => {

    const {pageTitle, pageResults} = productPageTitle
    return (
        <BodyHeaderWrapper> 
            <HeaderName pageTitle={pageTitle} pageResults={pageResults} />
        </BodyHeaderWrapper>
    )
}

export default ProductPageHeader
