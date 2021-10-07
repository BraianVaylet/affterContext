import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Cart from 'pages/Cart';
import Products from 'pages/Products/Products';

const WrapperRoutes = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="*">
            404
          </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default WrapperRoutes
