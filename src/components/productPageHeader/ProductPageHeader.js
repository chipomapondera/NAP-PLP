import React from 'react'
import {createComponent} from 'react-fela'
import ViewToggle from './viewToggle/ViewToggle'
import HeaderName from './headerName/HeaderName'
import PageNumber from './pageNumber/PageNumber' 

const BodyHeaderWrapper = createComponent (() => ({
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

const ProductPageHeader = ({productPageTitle}) => {

    const {pageTitle, pageResults, mensButton, pageNumberCount} = productPageTitle
    return (
        <BodyHeaderWrapper> 
            <ViewToggle mensButton={mensButton}/> 
            <HeaderName pageTitle={pageTitle} pageResults={pageResults} />
            <PageNumber pageNumberCount={pageNumberCount}/>
        </BodyHeaderWrapper>
    )
}

export default ProductPageHeader
