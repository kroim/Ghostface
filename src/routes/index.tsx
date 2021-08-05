import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import AppRoute from "~/routes/route";

const Routes: React.FC = () => (
  <Switch>
    <AppRoute path="/dashboard" component={Dashboard} layout={'dashboard'}/>
    <AppRoute path="/" component={Home} layout={'home'}/>
  </Switch>
);


export default Routes;