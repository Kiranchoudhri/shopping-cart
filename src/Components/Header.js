import React from 'react'
import '../App.css'
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Header(props) {
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        let count = 0
        props.cartItems.forEach((item) => {
            count += item.qty})
            setCartCount(count)
    }, [props.cartItems, cartCount])
    return(
        <div className='container'>
           
           <Link to ="/products" className='main'> <div>Shopping cart</div> </Link>
            <div className='iconContainer'>

          <Link to="/basket" className='cartIcon'> <div>Cart <span className='cartQty'>{cartCount}</span></div> </Link>
    
            <div className = "signIcon">Sign In</div>
            </div>
        
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}
export default connect(mapStateToProps, null)(Header)