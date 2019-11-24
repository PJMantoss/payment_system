import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Products from './components/Products'
import Checkout from './components/Checkout'
import { products } from './products'
import './App.css';

const history = createBrowserHistory()

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return(
        <BrowserRouter>
            <Switch>
                <Route 
                       exact path="/" 
                       render={() => (
                         <Products 
                             products={products} 
                             selectProduct={setSelectedProduct} 
                             history={history} 
                         />
                       )}
                />
                <Route 
                    path="/checkout" 
                    render={() => (
                        <Checkout selectedProduct={selectedProduct} history={history} />
                    )} 
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;