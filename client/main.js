import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';


Meteor.startup(() => {
  ReactDOM.render(<BrowserRouter>
    <Switch>
      <Route path="/signup" component={Signup} />
    </Switch>
  </BrowserRouter>, document.getElementById("app"));
});