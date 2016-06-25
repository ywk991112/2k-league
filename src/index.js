import React from 'react';
import ReactDOM, { render } from 'react-dom'; //why other js don't need to import render
import { Router, Route, hashHistory } from 'react-router';
import HomePage from './component/HomePage.js';
// import ChatApp from './component/ChatApp.js';
// import Profile from './component/Profile.js';
import './index.css';

// Why render is worked without ReactDOM.render...
render((
  <Router history={hashHistory}>
    <Route path='/' component={HomePage}/>
  </Router>
), document.getElementById('root'));
