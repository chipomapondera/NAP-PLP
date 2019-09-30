import React from 'react'
import {createComponent} from 'react-fela'
import ShoeListing from '../productPageBody/shoeListing/ShoeListing'

const ProductBody = createComponent (() => ({
    margin: '0 auto',
    padding: '0',
    backgroundColor: 'yellow',
    maxWidth: '1000px',
    height: '2000px',
}), 'div')

const ProductPageBody = ({productPageInfo}) => {
    const {brandName, prodDescription, prodPrice, prodColor, prodImageUrl, modelImageUrl, womensButton, mensButton, pageTitle, pageResults} = productPageInfo
    return (
        <ProductBody>
            <ShoeListing brandName={brandName} prodDescription={prodDescription} prodPrice={prodPrice} prodColor={prodColor} prodImageUrl={prodImageUrl} modelImageUrl={modelImageUrl} />
        </ProductBody>
    )
}

export default ProductPageBody