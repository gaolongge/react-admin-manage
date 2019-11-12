/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 16:02:01
 * @LastEditTime: 2019-10-17 10:42:57
 * @LastEditors: Please set LastEditors
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer/index'
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
export default store