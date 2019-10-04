import React from 'react';
import ServiceMessage from './components/serviceMessage'
import SiteHeader from './components/siteHeader'
import NavBar from './components/navBar'
import ProductPageElements from './components/productPageElements/ProductPageElements'
import { createComponent } from 'react-fela'
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
      <ProductPageElements 
          productPageTitle ={data.productPageHeader}
          productPageInfo={data.productPageBody} />

    </AppBox>
  );
}

export default App
