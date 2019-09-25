import React from 'react';
import ServiceMessage from './components/serviceMessage'
import SiteHeader from './components/siteHeader'
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
      <ServiceMessage info={data.serviceMessage}/>
      <SiteHeader info={data.siteHeader}/>
      </AppBox>
  );
}

export default App
