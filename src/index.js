import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import reducer from './store/reducer';
import defaultState from './store/state';
import {Provider} from 'react-redux';

//公共资源
import './assets/css/base.css';
// import './assets/css/index.css';
//home中banner中的searchbox样式要求index.css在layout前面
import './assets/css/layout.css';
import './assets/css/alert.css';

const store=createStore(reducer,defaultState);


import RouteConfig from './RouteConfig';
ReactDom.render(
  <Provider store={store}>
    <RouteConfig/>
  </Provider>,
document.querySelector('#app')
)
;