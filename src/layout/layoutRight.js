/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 10:29:28
 * @LastEditTime: 2019-10-12 17:56:14
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'
import { Icon, Button } from 'antd';
import LayoutRightTop from './layoutRightTop.js'
import LayoutRightMain from './layoutRightMain.js'
class LayoutRight extends Component {
  toggleCollapsed = () => {
    const {setCollapsed,collapsed} = this.props
    setCollapsed(!collapsed)
  }
  render() {
    return (
      <div className='layout-right-wrap'>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <LayoutRightTop />
        <LayoutRightMain />
      </div>
    )
  }
}
export default LayoutRight