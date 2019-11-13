import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom'
import { Row, Col, Icon } from 'antd';
import { toggleMenuHand } from '../../store/actions/toggleMenu'
class MainHeader extends Component {
  render() {
    let { toggleMenuDispatchHand } = this.props
    return (
      <div className = 'main-header-wrap'>
        <Row>
          <Col span={4}>
            <Icon type="menu-fold" style={{ fontSize: '28px' }} onClick={toggleMenuDispatchHand}/>
          </Col>
          <Col span={20} className='common-rigth'>col-12</Col>
        </Row>
      </div>
    )
  }
}
const dispatchToProp = dispatch => ({
  toggleMenuDispatchHand() {
    // 触发action的第三种方法
    dispatch(toggleMenuHand())
  }
})
export default withRouter( connect(null, dispatchToProp)(MainHeader) )
