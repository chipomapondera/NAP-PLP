import React from 'react'
import {createComponent} from 'react-fela'

const ProdWrapper = createComponent (() => ({

}), 'div')

const ProdCard = createComponent (() => ({

}), 'div')

const ShoeListing = ({brandName, prodDescription, prodPrice, prodColor, prodImageUrl, modelImageUrl}) => {
    return (
        <ProdWrapper>
            <ProdCard>
                {brandName} 
                {prodDescription} 
                {prodPrice} 
                {prodColor} 
                {prodImageUrl} 
                {modelImageUrl}
            </ProdCard>
        </ProdWrapper>
    )
}

export default ShoeListing
