import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from './pages/Login';




ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/"  component={Login} exact />
      <Route path="/countDown"  component={App} exact />
      <Route path="/countDown/:id"  component={App} />
      <Route component={()=> <div>Page 404</div>} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

