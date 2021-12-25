import logo from './logo.svg';
import {Provider} from 'react-redux'
import Store from './Redux/Store';
import './App.css';
import Header from './Components/Header'
import Products from './Components/Products';
import Login from './Components/Login';
import Basket from './Components/Basket';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 




function App() {
  return (
        <Provider store = {Store}>

       <Router>
           
             <Header />

           
           <Routes>
             <Route path = "/products" element = {<Products />} />
             <Route path = "/basket" element = {<Basket />} />
             
           </Routes>
           
       </Router>
           
       


        </Provider>
       
    
      
    
    
  );
}

export default App;
