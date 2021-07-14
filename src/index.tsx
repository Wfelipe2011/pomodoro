import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from './pages/Login';
import { ContentProvider } from './contexts/Content';




ReactDOM.render(
  <BrowserRouter>
   <ContentProvider>
   <Switch>
      <Route path="/"  component={Login} exact />
      <Route path="/countDown"  component={App} exact />
      <Route path="/countDown/:id"  component={App} />
      <Route component={()=> <div>Page 404</div>} exact />
    </Switch>
   </ContentProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

