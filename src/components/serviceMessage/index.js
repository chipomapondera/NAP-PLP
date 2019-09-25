import React from 'react'
import {createComponent} from 'react-fela'

const ServiceMessageBox = createComponent (() => ({
  maxWidth: '1680px',
  height: '53px',
  backgroundColor: '#EEEEEE',
  borderBottom: '1px solid #EEEEEE',
  display: 'flex',
  position: 'relative'
}), 'div')

const ServiceMainText = createComponent (() => ({
  margin: 'auto',
  display: 'inline-block',
  fontSize: '15px',
  fontStyle: 'italic',
  fontWeight: '500',
  fontFamily: 'ModernNAP-Text'
}), 'div')

const ServiceText1 = createComponent (() => ({
  display: 'inline-block',
  position: 'absolute',
  top: '17px',
  left: '25px',
  fontSize: '11px',
  fontFamily: 'Gill Sans MT, sans-serif',
}), 'div')

const ServiceText2 = createComponent (() => ({
  display: 'inline-block',
  position: 'absolute',
  top: '17px',
  right: '80px',
  fontSize: '11px',
  fontWeight: '500',
  fontFamily: 'Gill Sans MT, sans-serif',
}), 'div')

const ServiceMenu = createComponent (() => ({
  display: 'inline-block',
  position: 'absolute',
  top: '17px',
  right: '20px',
  fontSize: '11px',
}), 'div')

const ServiceLink = createComponent(() => ({
  borderLeft: '1px solid black',
  paddingLeft: '20px',
  textDecoration: 'none',
  color: 'black',
}),'a')


const ServiceMessage = ({info})=> {
    const {contactNumber, message, otherSite} =info
    return (
    <ServiceMessageBox> 
            <ServiceText1>{contactNumber}</ServiceText1>
            <ServiceMainText>{message}</ServiceMainText>
            <ServiceText2><ServiceLink href="https://www.mrporter.com/en-gb/">{otherSite}</ServiceLink></ServiceText2>
            <ServiceMenu><ServiceLink href="https://www.mrporter.com/en-gb/" >MR</ServiceLink></ServiceMenu>
    </ServiceMessageBox>)
}


export default ServiceMessage