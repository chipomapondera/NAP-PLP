import React, {useState, useEffect} from 'react';
import ServiceMessage from './components/serviceMessage'
import SiteHeader from './components/siteHeader'
import NavBar from './components/navBar'
import ProductPageElements from './components/productPageElements/ProductPageElements'
import data from './data/'

const App =()=> {
  const [productsData, setProductsData] = useState()

  const grabProductsData = async() => {
    const res = await fetch('https://api.net-a-porter.com/NAP/GB/en/categories')
    const fetchData = await res.json()
    return fetchData
  }

  useEffect(async() => {
    const fetchedProducts = await grabProductsData()
    setProductsData(fetchedProducts)
    const filterData = fetchedProducts.categories
    const shoeCategory = filterData.filter((category) => {
      return category.id == 4 && category.name=='Shoes' && category.urlKey=='Shoes'
    })
  }, [])

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
