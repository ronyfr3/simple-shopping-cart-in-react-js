import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './Header';
import Products from './Products';
import {DataProvider} from './ProductProvider'
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import './App.css';

function App() {
  return (
    <DataProvider>
          <div className="App">
            <Router>
              <Header/>   
                <Routes>
                    <Route path="products" element={<Products/>}/>
                    <Route path="products/:id" element={<ProductDetails/>}/>
                    <Route path="cart" element={<Cart/>}/>
                </Routes>
            </Router>
          </div>
    </DataProvider>
  );
}

export default App;
