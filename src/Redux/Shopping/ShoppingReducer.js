import { LOAD_ITEMS, ADDED_TO_CART, REMOVE_FROM_CART, ADJUST_QTY } from "./ShoppingTypes"


const initialState = {
    products: [],
    cartItems: []
}


const ShoppingReducer = (state = initialState, action) => {
     switch(action.type) {
       case LOAD_ITEMS : 
       return {
           ...state,
           products: action.payload
       }
       case ADDED_TO_CART: 
           const item = state.products.find((prods) => prods.productId === action.payload.id);
          
           const inCart = state.cartItems.find((item) => item.productId === action.payload.id ? true : false)
           return {
               ...state,
               cartItems: inCart ? state.cartItems.map((item) => item.productId === action.payload.id 
                ? {...item, qty: item.qty + 1}
                : item ) : [...state.cartItems, {...item, qty: 1}]
            //cartItems: [...state.cartItems, {...item}]
          
           }
       
       case REMOVE_FROM_CART: 
       return {
           cartItems: state.cartItems.filter((item) => item.productId !== action.payload.id)
       }

       case ADJUST_QTY:
           return {
               cartItems: state.cartItems.map(item => item.productId === action.payload.id ? 
                {...item, qty: +action.payload.qty} : item)
           }
       default: return state
     }
}

export default ShoppingReducer