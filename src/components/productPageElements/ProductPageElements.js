import React, {Fragment, useState} from 'react'
import {createComponent} from 'react-fela'
import PageHeaderButtons from './productPageHeader/pageHeaderButtons/PageHeaderButtons'
import HeaderName from './productPageHeader/headerName/HeaderName'
import PageNumber from './productPageHeader/pageNumber/PageNumber'
import ProductPageBody from './productPageBody/ProductPageBody'

const PageHeaderWrapper = createComponent ((props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    padding: '0',
    //backgroundColor: props.color,
    maxWidth: '1000px',
    height: '55px',
}), 'div')

const ProductPageElements = ({productPageTitle, productPageInfo}) => {
    const {pageTitle, pageResults, mensButton, womensButton, showColorButton, hideColorButton, pageNumberCount} = productPageTitle
    const [showMaleProduct, setShowMaleProduct] = useState(false)
    const [showColors, setShowColors] = useState(false)
    const womenMenButtonText = showMaleProduct ? womensButton : mensButton
    const colourButtonText = showColors ? hideColorButton : showColorButton
    const finalProducts = showMaleProduct ? productPageInfo.shoeListing.mensShoes : productPageInfo.shoeListing.womensShoes
        
    return (
        <>
            <PageHeaderWrapper productPageTitle={productPageTitle} color='blue'>
                <PageHeaderButtons womenMenButtonText={womenMenButtonText} 
                showMaleProduct={showMaleProduct}
                setShowMaleProduct={setShowMaleProduct}
                colourButtonText = {colourButtonText}
                showColors={showColors}
                setShowColors={setShowColors}

                /> 
                <HeaderName pageTitle={pageTitle} pageResults={pageResults} />
                <PageNumber pageNumberCount={pageNumberCount}/>
            </PageHeaderWrapper>
            <ProductPageBody finalProducts={finalProducts}/>
        </>
    )
}

export default ProductPageElements

