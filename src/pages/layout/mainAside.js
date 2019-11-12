import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleMenuHand } from '../../store/actions/toggleMenu'
import { Menu, Icon, Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
const { Sider } = Layout
const { SubMenu } = Menu

class MainAside extends Component {
  state = {
  };
  renderMenuItemHand = ({ title, key, icon }) => {
    // 遍历第一级菜单
    // console.log( title, key, icon )
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          {icon && <Icon type={icon} />}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }
  renderSubMenuItemHand = ({ title, key, icon, subs }) => {
    // 递归遍历子级菜单
    return (
      <SubMenu
        key={key}
        title={
          <span>
             {icon && <Icon type={icon} />}
            <span>{title}</span>
          </span>
        }>
        {
          subs && subs.map(item => {
            return item.subs && item.subs.length > 0 ? this.renderSubMenuItemHand(item) : this.renderMenuItemHand(item)
          })
        }
      </SubMenu>
    )
  }
  toggleCollapsedHand = () => {
    // 触发action的第一种方法
    // let actions = {
    //   type: 'TOGGLEMENU',
    //   collapsed: !this.props.collapsed
    // }
    // this.props.dispatch(actions)
    // 触发action的第二种方法
    // this.props.dispatch(toggleMenuHand())
  };
  render() {
    let { menu, collapsed, toggleMenuHand } = this.props
    return (
      <Sider className='main-aside-wrap' collapsed={collapsed}>
        {/* <div className="logo" onClick={this.toggleCollapsedHand}> 我是 logo</div> */}
        <div className="logo" onClick={toggleMenuHand}> 我是 logo</div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          {
            menu && menu.map(item => {
              return item.subs && item.subs.length > 0 ? this.renderSubMenuItemHand(item) : this.renderMenuItemHand(item)
            })
          }
        </Menu>
      </Sider>
    )
  }
}
function mapStateToProps(state) {
  return {
    collapsed: state.COLLAPSED.collapsed
  };
}
const dispatchToProp = dispatch => ({
  toggleMenuHand() {
    // 触发action的第三种方法
    dispatch(toggleMenuHand())
  }
})
export default withRouter(connect( mapStateToProps, dispatchToProp )(MainAside))