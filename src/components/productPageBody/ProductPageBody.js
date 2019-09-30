import React from 'react'
import {createComponent} from 'react-fela'
import ShoeListing from '../productPageBody/shoeListing/ShoeListing'

const ProductBody = createComponent (() => ({

}), 'div')

const ProductPageBody = ({productPageInfo}) => {
    const {brandName, prodDescription, prodPrice, prodColor, prodImageUrl, modelImageUrl} = productPageInfo
    return (
        <ProductBody>
            <ShoeListing brandName={brandName} prodDescription={prodDescription} prodPrice={prodPrice} prodColor={prodColor} prodImageUrl={prodImageUrl} modelImageUrl={modelImageUrl} />
        </ProductBody>
    )
}

export default ProductPageBody