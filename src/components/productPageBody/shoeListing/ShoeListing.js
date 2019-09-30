import React from 'react'
import {createComponent} from 'react-fela'

const ProdWrapper = createComponent (() => ({
    
}), 'div')

const ProdCard = createComponent (() => ({

}), 'ul')

const ProdCardItem = createComponent (() => ({
    
}), 'li')

const ShoeListing = ({brandName, prodDescription, prodPrice, prodImageUrl, modelImageUrl}) => {
    return (
        <ProdWrapper>
            <ProdCard>
                <ProdCardItem>
                    {prodImageUrl} 
                    {modelImageUrl} 
                    {brandName} 
                    {prodDescription} 
                    {prodPrice}
                </ProdCardItem>
                
            </ProdCard>
        </ProdWrapper>
    )
}

export default ShoeListing
