import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
//import RootReducer from "./RootReducer";
import ShoppingReducer from "./Shopping/ShoppingReducer";

const Store = createStore(ShoppingReducer, composeWithDevTools(applyMiddleware(logger)))

export default Store