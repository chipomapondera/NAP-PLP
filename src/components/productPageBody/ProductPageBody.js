import React from 'react'
import {createComponent} from 'react-fela'
import ShoeListing from '../productPageBody/shoeListing/ShoeListing'
import ShoeStyleFilter from './shoeStyleFilter/ShoeStyleFilter'
import ShoeDesignerFilter from './shoeDesignerFilter/ShoeDesignerFilter'
import ShoeColorFilter from './shoeColorFilter/ShoeColorFilter'
import ShoeSizeFilter from './shoeSizeFilter/ShoeSizeFilter'


const ProductBody = createComponent (() => ({
    display: 'flex',
    margin: '0 auto',
    padding: '0',
    backgroundColor: 'yellow',
    width: '1000px',
    height: '2000px',
}), 'div')

const ShoeFilterColumn = createComponent (() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    height: '1400px',
}), 'div')

const ProductListColumn = createComponent (() => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
    height: '2000px',
}), 'div')

const ProductPageBody = ({productPageInfo}) => {
    const {brandName, prodDescription, prodPrice, prodColor, prodImageUrl, modelImageUrl, womensButton, mensButton, pageTitle, pageResults} = productPageInfo
    return (
        <ProductBody>
            <ShoeFilterColumn> 
                <ShoeStyleFilter />
                <ShoeDesignerFilter />
                <ShoeColorFilter />
                <ShoeSizeFilter />
            </ShoeFilterColumn>
            <ProductListColumn> 
                <ShoeListing brandName={brandName} prodDescription={prodDescription} prodPrice={prodPrice} prodColor={prodColor} prodImageUrl={prodImageUrl} modelImageUrl={modelImageUrl} />
            </ProductListColumn>
        </ProductBody>
    )
}

export default ProductPageBody