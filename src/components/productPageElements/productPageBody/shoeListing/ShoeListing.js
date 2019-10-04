import React from 'react'
import {createComponent} from 'react-fela'
import ProductCard from '../productCard/ProductCard'

const ProdWrapper = createComponent (() => ({
    width: '100%',
    height: '2000px',
    boxSizing: 'border-box',
    backgroundColor: 'white',
}), 'div')

const ProdContainer = createComponent (() => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    listStyle: 'none',
    boxSizing: 'border-box',
    width: '100%',
    height: '1600px',
    marginLeft: '60px',
    padding: '0',
    backgroundColor: 'white',
}), 'ul')

const ProdCardContainer = createComponent (() => ({
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    boxSizing: 'border-box',
    width: '30%',
    height: '415px',
    backgroundColor: 'white'
}), 'li')

const ShoeListing = ({finalProducts}) => {
    // console.log(womensShoes, ">>")
    return (
        <ProdWrapper>
            <ProdContainer>
                {finalProducts.map((shoesPair) => {return <ProdCardContainer>
                    <ProductCard shoesPair={shoesPair} />
                </ProdCardContainer>})}
            </ProdContainer>
        </ProdWrapper>
    )
}

export default ShoeListing
