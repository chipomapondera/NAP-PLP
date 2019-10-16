import React from 'react';
import ServiceMessage from './components/serviceMessage'
import SiteHeader from './components/siteHeader'
import NavBar from './components/navBar'
import ProductPageElements from './components/productPageElements/ProductPageElements'
import data from './data/'

const App =()=> {
  return (
    <div>
      <ServiceMessage info={data.serviceMessage} />
      <SiteHeader info={data.siteHeader} />
      <NavBar info={data.navBar} />
      <ProductPageElements 
          productPageTitle ={data.productPageHeader}
          productPageInfo={data.productPageBody} />
    </div>
  );
}

export default App
