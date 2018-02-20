import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/link" component={Link} />
      <Route path="/" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));
});