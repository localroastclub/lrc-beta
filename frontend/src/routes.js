import React from 'react';
import { Route } from 'react-router-dom';

import Landing from './containers/Landing';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Dashboard from './components/userdashboard/Dashboard';
import Cart from './components/cart/Cart';
import Product from './components/product/Product';
import SubscriptionSteps from './components/product/SubscriptionSteps';
import Shop from './components/product/shop/Shop';
import NotFound from './components/NotFound';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={Landing} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/dashboard' component={Dashboard} />
    <Route exact path='/cart' component={Cart} />
    <Route exact path='/order' component={Product} />
    <Route exact path='/subscribe' component={SubscriptionSteps} />
    <Route exact path='/shop' component={Shop} />
    <NotFound default={true} component={NotFound} />
  </div>
);

export default BaseRouter;
