/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 16:25:32
 * @LastEditTime: 2019-10-17 14:20:36
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css'; 
import './assets/css/reset.css';
import './assets/css/index.css';
import './assets/css/common.css'

import store from './store/index'
import Layout from './layout/layout'
import App from './App'
// import Counter from './Counter';


ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <Layout /> */}
  </Provider>,
  document.getElementById('root')
);
