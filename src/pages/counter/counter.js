/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 16:07:51
 * @LastEditTime: 2019-10-17 15:00:57
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd'

import {INCREMENT,DECREMENT} from '../../store/actionTypes'

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
          <Button type="primary" icon="minus" onClick={this.decrement}></Button>
          <span>{this.props.count}</span>
          <Button  icon="plus" onClick={this.increment}></Button>
        </div>
      </div>
    )
  }
}

const  mapStateToProps = (state) => {
  return {
    count: state.CountReducer.count
  };
}
export default connect(mapStateToProps)(Counter);