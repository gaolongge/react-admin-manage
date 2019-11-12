/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 17:38:54
 * @LastEditTime: 2019-10-17 10:57:30
 * @LastEditors: Please set LastEditors
 */
import { combineReducers } from 'redux'
import CountReducer from './countReducer/CountReducer'
import ToDoListReducer from './ToDoListReducer/ToDoListReducer'
import COLLAPSED from './collapsedReducer/collapsedReducer'

export default combineReducers({
  CountReducer,
  ToDoListReducer,
  COLLAPSED,
})