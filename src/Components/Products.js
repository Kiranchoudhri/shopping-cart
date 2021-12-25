import React from 'react' 
import {useEffect} from 'react'
import axios from 'axios'
import '../App.css'
import {connect} from 'react-redux'
//import * as actions from '../Redux/Shopping/ShoppingAction'
import * as actions from '../Redux/Shopping/ShoppingAction'
import Product from './Product'


const Products = (props) => {
    
    useEffect(() => {
        axios.get("https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6")
        .then(response => {
            console.log(response.data.products)
              let items = response.data.products.slice(0, 9) 
           props.loadItems(items)
         
        })
        .catch(err => {
            console.log("Something went wrong")
        })
    }, [])
       console.log("loaded items", props)
       
    return(
       
    <div className='mainContainer'>

        {
            props.products.map((prods) => 
            <Product key = {prods.productId} productData = {prods}/>
            )
        }
        {/* {
           
           props.products.map((products) => 
            <div className='productClass' key = {products.productID}>
        <div className='productWrapper'>
            <div className='image'><img src= {products.images[0].src}/></div>
           
            <div className='brand'>{products.brand}</div>
            <div className='brandCategory'>{products.productName}</div>
            <div className='price'>Rs. {products.price}</div>
        <div className = "wishlist">Wishlist</div>
        <div className = "addtocart" onClick={(id) => props.addedToCart(products.productId)}>Add to cart</div>
        </div>
        </div> )
        }   */}
      
    </div>      
        
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

//  const mapDispatchTOProps = (dispatch) => {
//     return {
//         setItems: () => dispatch(loadItems())
//     }
//  }
export default connect(mapStateToProps, actions)(Products)