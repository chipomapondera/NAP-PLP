import React from 'react'
import {createComponent} from 'react-fela'
 
const TitleBox = createComponent (() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    backgroundColor: 'white',
}), 'div')

const CategoryName = createComponent (() => ({
    fontFamily: 'ModernNAP-Text',
    fontSize: '21px',
    letterSpacing: '1px',
}), 'div')

const CategoryResults = createComponent (() => ({
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '14px',
    color: 'grey',
}), 'div')

const HeaderName = ({pageTitle, pageResults}) => {
    return (
        <TitleBox> 
            <CategoryName>{pageTitle}</CategoryName>
            <CategoryResults>{pageResults}</CategoryResults>
        </TitleBox>
    )
}

export default HeaderName