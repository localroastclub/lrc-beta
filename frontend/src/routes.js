import React from 'react';
import { Route } from 'react-router-dom';

import Landing from './containers/Landing';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Dashboard from './components/userdashboard/Dashboard';

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Landing} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/dashboard" component={Dashboard} />
  </div>
);

export default BaseRouter;
