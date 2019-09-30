import React from 'react'
import {createComponent} from 'react-fela'
import HeaderName from './headerName/HeaderName'

const BodyHeaderWrapper = createComponent (() => ({
    
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
