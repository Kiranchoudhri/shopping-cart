import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'
import { removeFromCart, adjustQty } from '../Redux/Shopping/ShoppingAction'


const BasketItem = ({cartItemData, removeFromCart, adjustQty}) => {
    const [cartItemQty, setcartItemQty] = useState(cartItemData.qty)
    const handleChange = (e) => {
        setcartItemQty(e.target.value)
        adjustQty(cartItemData.productId, e.target.value)
    }
    return (
        <div>
          <div className='cartMain1'>
            
            <div className='cartContainer1'>
        <div className='image1'>
            <img src= {cartItemData.images[0].src}/>
        </div>
        <div className='contents1'>
            <div className='brand1'>{cartItemData.brand}</div>
            <div className='productDescription1'>{cartItemData.productName}</div>
            <div className='qtyContainer1'>
                <div className='quantity1'>Qty</div>
                <input className='numOfItems1' value = {cartItemQty} onChange={handleChange}/>
                <button className='button1' >+</button>
                <button className='button1' >-</button>
            </div>
            <div className='price1'>Rs. {cartItemData.price}</div>
        </div>
        <div className='delete1' onClick={() => removeFromCart(cartItemData.productId)} >Delete</div>
        </div> 

    </div> 
        </div>
    )
}

const mapDispatchTOProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}
export default connect(null, mapDispatchTOProps)(BasketItem)
