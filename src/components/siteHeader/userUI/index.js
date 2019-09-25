import React from 'react'
import {createComponent} from 'react-fela'

const UserUIBox = createComponent (() => ({ 
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
}), 'div')

const WishListWrapper = createComponent (() => ({ 
    boxSizing: 'border-box',
    marginRight: '20px',
}), 'div')

const FavStar = createComponent (() => ({ 
    width: '25px',
    height: '25px',
    backgroundImage: 'url("https://i.postimg.cc/pLrg8kVt/favStar.png")',
    backgroundSize: 'cover',
    display: 'block',
}), 'a')

const BagWrapper = createComponent (() => ({
    borderLeft: '1px solid grey',
    paddingLeft: '15px',
    marginRight: '15px',
    boxSizing: 'border-box',
}), 'div')

const ShoppingBag = createComponent (() => ({ 
    width: '18px',
    height: '18px',
    backgroundImage: 'url("https://i.postimg.cc/RZY2TfqJ/shopping-Bag.jpg")',
    backgroundSize: 'cover',  
    display: 'block',
}), 'a')

const RegisterText = createComponent(() => ({
    fontSize: '14px',
    fontFamily: 'Gill Sans MT, sans-serif',
    marginRight: '10px',
}),'div')

const LoginText = createComponent(() => ({
    fontSize: '14px',
    fontFamily: 'Gill Sans MT, sans-serif',
}),'div')

const LogoLink = createComponent(() => ({  
    borderLeft: '1px solid grey',
    paddingLeft: '10px',
}),'a')

const UserUI = ({userRegistration, userLogin}) => {
    return (
        <UserUIBox >
            <WishListWrapper><FavStar/></WishListWrapper>
            <BagWrapper><ShoppingBag/></BagWrapper>
            <RegisterText><LogoLink>{userRegistration}</LogoLink></RegisterText>
            <LoginText><LogoLink>{userLogin}</LogoLink></LoginText>
        </UserUIBox>
    )
}
export default UserUI

