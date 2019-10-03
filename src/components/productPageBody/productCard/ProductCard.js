import React, {Fragment, useState} from 'react'
import {createComponent} from 'react-fela'


const ShoeImageWrapper = createComponent (() => ({
    width: '100%',
    height: '300px', 
    display: 'block',
}), 'div')

const ShoeImage = createComponent (() => ({
    width: '80%',
    height: '300px',
    backgroundSize: 'cover',  
    display: 'block',
}), 'img', ['src','onMouseOver','onMouseOut'])

const ShoeInfoWrapper = createComponent (() => ({
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15px',
}), 'div')

const ShoeBrand = createComponent (() => ({
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '14px',
    fontWeight: '600',
}), 'div')

const ShoeDescription = createComponent (() => ({
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '14px',
}), 'div')

const ShoePrice = createComponent (() => ({
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '14px',
}), 'div')

const ProductCard = ({shoesPair}) => {
    const {brandName, prodDescription, prodPrice, prodImageUrl, modelImageUrl} = shoesPair
    const [imgUrl, setImgUrl] = useState(prodImageUrl)

    return (
        <>
        <ShoeImageWrapper> 
            <ShoeImage src={imgUrl}  
                onMouseOver ={(mouseIn) => {
                    mouseIn = setImgUrl(modelImageUrl)                   
                }} onMouseOut ={(mouseOut) => {
                    mouseOut = setImgUrl(prodImageUrl);
                }}
                    />
        </ShoeImageWrapper>
        <ShoeInfoWrapper>
            <ShoeBrand brandName={brandName}>{brandName}</ShoeBrand>
            <ShoeDescription prodDescription={prodDescription}>{prodDescription}</ShoeDescription>
            <ShoePrice prodPrice={prodPrice}>{prodPrice}</ShoePrice> 
        </ShoeInfoWrapper>
        </>
    )
}

export default ProductCard

