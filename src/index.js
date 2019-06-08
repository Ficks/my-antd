import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 路由
import {BrowserRouter} from 'react-router-dom';
import Router from './Router/Router';
// 状态
import {Provider} from 'react-redux';
import Store from './Store';
ReactDOM.render (
  <Provider store={Store}>
    <BrowserRouter>
      <Router>
        <App />
      </Router>
    </BrowserRouter>
  </Provider>,
  document.getElementById ('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister ();
