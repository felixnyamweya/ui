import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Dashboard from './Dashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={App} />
    <Route path="/dashboard" component={Dashboard} />
  </Route>
);