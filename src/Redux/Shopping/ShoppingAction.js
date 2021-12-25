import { LOAD_ITEMS, REMOVE_FROM_CART, ADJUST_QTY } from "./ShoppingTypes";
import {ADDED_TO_CART} from './ShoppingTypes'



export const loadItems = (products) => {
    return {
        type: LOAD_ITEMS,
        payload: products
    }
}

export const addedToCart = (id) => {
    return {
        type: ADDED_TO_CART,
        payload: {
            id: id
        }
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id: id
        }
    }
}

export const adjustQty = (id, value) => {
    return {
        type: ADJUST_QTY,
        payload: {
            id: id,
            qty: value
        }
    }
}



