import React from 'react'
import {createComponent} from 'react-fela'

const ProdWrapper = createComponent (() => ({
    backgroundColor: 'pink',
    width: '100%',
    height: '2000px',
    boxSizing: 'border-box',
}), 'div')

const ProdCard = createComponent (() => ({
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
    backgroundColor: 'orange',
    width: '800px',
}), 'div')

const ProdCardItem = createComponent (() => ({
    boxSizing: 'border-box',
    height: '',
    width: '',
    
}), 'div')

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
