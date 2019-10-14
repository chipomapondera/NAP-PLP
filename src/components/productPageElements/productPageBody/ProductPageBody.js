import React from 'react'
import {createComponent} from 'react-fela'
import ShoeListing from './shoeListing/ShoeListing'
import ShoeStyleFilter from './shoeStyleFilter/ShoeStyleFilter'
import ShoeDesignerFilter from './shoeDesignerFilter/ShoeDesignerFilter'
import ShoeColorFilter from './shoeColorFilter/ShoeColorFilter'
import ShoeSizeFilter from './shoeSizeFilter/ShoeSizeFilter'


const ProductBody = createComponent (() => ({
    display: 'flex',
    margin: '0 auto',
    padding: '0',
    backgroundColor: 'white',
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
    height: '2500px',
}), 'div')

const ProductPageBody = ({finalProducts, showColors}) => {
     
    return (
        <ProductBody>
            <ShoeFilterColumn> 
                <ShoeStyleFilter />
                <ShoeDesignerFilter />
                <ShoeColorFilter />
                <ShoeSizeFilter />
            </ShoeFilterColumn>
            <ProductListColumn> 
                <ShoeListing finalProducts={finalProducts} showColors={showColors}/>
            </ProductListColumn>
        </ProductBody>
    )
}

export default ProductPageBody