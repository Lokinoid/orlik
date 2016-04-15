import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Layout from './ui/layouts/Layout';
import MainView from './ui/views/MainView';

// import './main.css'

var app = document.getElementById('app');
ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path = '/' component = {Layout}>
            <IndexRoute component = {MainView}></IndexRoute>
        </Route>
    </Router>, 
    app);
