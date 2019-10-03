import React, {Fragment, useState} from 'react'
import {createComponent} from 'react-fela'
import WomenMenButton from './productPageHeader/womenMenButton/WomenMenButton'
import HeaderName from './productPageHeader/headerName/HeaderName'
import PageNumber from './productPageHeader/pageNumber/PageNumber'
import ProductPageBody from './productPageBody/ProductPageBody'

const PageHeaderWrapper = createComponent (() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    padding: '0',
    backgroundColor: 'white',
    maxWidth: '1000px',
    height: '55px',
}), 'div')

const ProductPageElements = ({productPageTitle, productPageInfo}) => {
    const {pageTitle, pageResults, mensButton, womensButton, pageNumberCount} = productPageTitle
    // const [productGender, setProductGender] = useState(productPageInfo.shoeListing.womensShoes)
    const [showMaleProduct, setShowMaleProduct] = useState(false)
    const buttonText = showMaleProduct ? womensButton : mensButton
    const finalProducts = showMaleProduct ? productPageInfo.shoeListing.mensShoes : productPageInfo.shoeListing.womensShoes
    console.log('buttonText', buttonText)
    // console.log('finalProducts', finalProducts)
        
    return (
        <>
            <PageHeaderWrapper productPageTitle={productPageTitle}>
                <WomenMenButton buttonText={buttonText} 
                showMaleProduct={showMaleProduct}
                setShowMaleProduct={setShowMaleProduct}
                /> 
                <HeaderName pageTitle={pageTitle} pageResults={pageResults} />
                <PageNumber pageNumberCount={pageNumberCount}/>
            </PageHeaderWrapper>
            <ProductPageBody finalProducts={finalProducts}/>
        </>
    )
}

export default ProductPageElements

