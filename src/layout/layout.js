/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 10:25:57
 * @LastEditTime: 2019-10-12 18:03:23
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'
import LayoutLeft from './layoutLeft'
import LayoutRight from './layoutRight'
class Layout extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: false,
    }
  }
  setCollapsed = (value) => {
    this.setState({
      collapsed: value,
    });
  }
  render() {
    return (
      <div className='layout-wrap clearfix'>
        <LayoutLeft collapsed={this.state.collapsed}/>
        <LayoutRight setCollapsed={this.setCollapsed} collapsed={this.state.collapsed}/>
      </div>
    )
  }
}
export default Layout