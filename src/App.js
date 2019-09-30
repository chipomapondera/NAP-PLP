import React from 'react';
import ServiceMessage from './components/serviceMessage'
import SiteHeader from './components/siteHeader'
import NavBar from './components/navBar'
import ProductPageHeader from './components/productPageHeader/ProductPageHeader'
import ProductPageBody from './components/productPageBody/ProductPageBody'
import { createComponent } from 'react-fela'
// import './App.css';
import data from './data/'

const appBox = ()=>({
  width: '100%',
  display: 'block',
  margin: '0 auto',
  boxizing: 'border-box',
})

const AppBox = createComponent (appBox, 'div')  

const App =()=> {
  return (
    <AppBox>
      <ServiceMessage info={data.serviceMessage} />
      <SiteHeader info={data.siteHeader} />
      <NavBar info={data.navBar} />
      <ProductPageHeader productPageTitle ={data.productPageHeader} />
      <ProductPageBody productPageInfo={data.productPageBody} />

    </AppBox>
  );
}

export default App
