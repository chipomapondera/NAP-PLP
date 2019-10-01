import React from 'react'
import {createComponent} from 'react-fela'

const PageNumberBox = createComponent (() => ({
    display: 'flex',
    justifyContent: 'flex-end',
    width: '45%',
    paddingBottom: '10px',
    backgroundColor: 'white',
    borderBottom: '1px dashed grey',
}), 'div')

const PageNumberSelector = createComponent (() => ({
    fontFamily: 'Gill Sans MT, sans-serif',
    fontSize: '14px',
    letterSpacing: '3px',
}), 'div')

const PageNumber = ({pageNumberCount}) => {
    return (
        <PageNumberBox>
            <PageNumberSelector>{pageNumberCount}</PageNumberSelector>
        </PageNumberBox>
    )
}

export default PageNumber

