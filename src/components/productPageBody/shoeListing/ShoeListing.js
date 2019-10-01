import React from 'react'
import {createComponent} from 'react-fela'

const ProdWrapper = createComponent (() => ({
    backgroundColor: 'pink',
    width: '100%',
    height: '2000px',
    boxSizing: 'border-box',
}), 'div')

const ProdContainer = createComponent (() => ({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    listStyle: 'none',
    boxSizing: 'border-box',
    width: '100%',
    height: '1600px',
    margin: '0',
    padding: '0',
    backgroundColor: 'orange',
}), 'ul')

const ProdCardContainer = createComponent (() => ({
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    boxSizing: 'border-box',
    width: '30%',
    height: '370px',
    backgroundColor: 'crimson'
}), 'li')

const ShoeListing = ({womensShoes}) => {
    console.log(womensShoes, ">>")
    return (
        <ProdWrapper>
            <ProdContainer>
                {womensShoes.map((shoesPair) => {return <ProdCardContainer shoesPair={shoesPair} />})}
            </ProdContainer>
        </ProdWrapper>
    )
}

export default ShoeListing
