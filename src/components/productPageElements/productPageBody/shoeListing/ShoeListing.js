import React from 'react'
import {createComponent} from 'react-fela'
import ProductCard from '../productCard/ProductCard'
import ProductColor from '../productColor/ProductColor'

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
    height: '390px',
    backgroundColor: 'white'
}), 'li')

const ColorContainer = createComponent (() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    height: '20px',
    margin: '0px',
}), 'div')

const ShoeListing = ({finalProducts}) => {
    // console.log(womensShoes, ">>")
    console.log('finalProducts', finalProducts)
    return (
        <ProdWrapper>
            <ProdContainer>
                {finalProducts.map((shoesPair,) => {return <ProdCardContainer>
                    <ProductCard shoesPair={shoesPair} />
                    <ColorContainer>
                        {shoesPair.prodColor && shoesPair.prodColor.map((colorInfo) =>  
                        <ProductColor colorInfo={colorInfo}>{colorInfo}</ProductColor>)}
                    </ColorContainer>
                </ProdCardContainer>})}
            </ProdContainer>
        </ProdWrapper>
    )
}

export default ShoeListing
