/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 10:29:28
 * @LastEditTime: 2019-10-16 17:45:10
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'
import ToDoList from '../todolist/ToDoList'
import Counter from '../Counter';
class layoutRightMain extends Component {
  render() {
    return (
      <div>
        我是layoutRightMain
        <div>
          <ToDoList />
          <Counter />
        </div>
      </div>
    )
  }
}
export default layoutRightMain