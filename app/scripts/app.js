import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app-main';
import Dashboard from './components/dashboard';
import {BrowserRouter as Router, Route}  from 'react-router-dom';
import 'whatwg-fetch';
require('es6-promise').polyfill();

window.React = React;
const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />

      </div>
    </Router>
  )

ReactDOM.render( routing , document.getElementById('app'));
