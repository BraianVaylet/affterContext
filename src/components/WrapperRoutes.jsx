import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Products from 'pages/Products/Products';

const WrapperRoutes = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="*">
            404
          </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default WrapperRoutes
