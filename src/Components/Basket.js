import React, {useState, useEffect} from 'react'
import "./Basket.css"
import {connect} from 'react-redux'
import BasketItem from './BasketItem'

function Basket(props) {
 const [totalQty, setTotalQty] = useState(0)
  const [total, setTotal] = useState(0)
   
  
  useEffect(() => {
      let quantity = 0
      let total = 0
      props.cartItems.map((item) => {
          quantity += item.qty
          total += item.qty * item.price
      })

      setTotalQty(quantity)
      setTotal(total)

      

  }, [props.cartItems, totalQty, total, setTotalQty, setTotal])

  
    return (

        <div>
            
          {
             props.cartItems.map((items) => 
             <BasketItem key = {items.productId} cartItemData = {items}/>
             )
        
         } 

          <div className='checkoutContainer'>
              <div className='cartSummary'>Cart Summary</div>
            <div className='total'>Total ({totalQty} items)- Rs. {total}</div>
            <div className='checkoutButtonContainer'><div className='checkoutButton'>Proceed to checkout</div></div>
          </div>

        </div>
            
       
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       removeFromCart: (id) => dispatch(removeFromCart(id)),
//        adjustQty: (id, value) => dispatch(adjustQty(id, value))
//     }
// }


export default connect(mapStateToProps, null)(Basket)

