import React from 'react'
import {createComponent} from 'react-fela'
 
const TitleBox = createComponent (() => ({

}), 'div')

const CategoryName = createComponent (() => ({
    
}), 'div')

const CategoryResults = createComponent (() => ({
    
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