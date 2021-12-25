import React from 'react'
import {connect} from 'react-redux'
import { addedToCart } from '../Redux/Shopping/ShoppingAction'

const Product = ({productData, addedToCart}) => {
    return (
        <div className='productClass' key = {productData.productID}>
        <div className='productWrapper'>
            <div className='image'><img src= {productData.images[0].src}/></div>
           
            <div className='brand'>{productData.brand}</div>
            <div className='brandCategory'>{productData.productName}</div>
            <div className='price'>Rs. {productData.price}</div>
        <div className = "wishlist">Wishlist</div>
        <div className = "addtocart" onClick={() => addedToCart(productData.productId) }>Add to cart</div>
        </div>
        </div> 
    )
}
const mapDispatchTOProps = (dispatch) => {
    return {
      addedToCart: (id) => dispatch(addedToCart(id))
    }
}
export default connect(null, mapDispatchTOProps)(Product)
