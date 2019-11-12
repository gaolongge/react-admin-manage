/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 16:07:51
 * @LastEditTime: 2019-10-17 15:00:57
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { connect } from 'react-redux';
import {INCREMENT,DECREMENT} from './store/actionTypes'
class Counter extends React.Component {
  state = { count: 0 }
  increment = () => {
    console.log(this.props,'Counter.js')
    this.props.dispatch({ type: INCREMENT});   
  }
  decrement = () => {
    this.props.dispatch({ type: DECREMENT });
  }
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div style={{marginLeft:60}}>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.CountReducer.count
  };
}

export default connect(mapStateToProps)(Counter);