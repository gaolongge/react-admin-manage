import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleMenuHand } from '../../store/actions/toggleMenu'
import { Menu, Icon, Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
const { Sider } = Layout
const { SubMenu } = Menu
import iconAvatar from '../../assets/images/icon-test.png';
class MainAside extends Component {
  state = {
  };
  renderMenuItemHand = ({ title, url, icon }) => {
    // 遍历第一级菜单
    return (
      <Menu.Item key={url}>
        <Link to={url}>
          {icon && <Icon type={icon} />}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }
  renderSubMenuItemHand = ({ title, url, icon, children }) => {
    // 递归遍历子级菜单
    return (
      <SubMenu
        key={url}
        title={
          <span>
            {icon && <Icon type={icon} />}
            <span>{title}</span>
          </span>
        }>
        {
          children && children.map(item => {
            return item.children && item.children.length > 0 ? this.renderSubMenuItemHand(item) : this.renderMenuItemHand(item)
          })
        }
      </SubMenu>
    )
  }
  toggleCollapsedHand = () => {
    // 触发action的第一种方法
    // let actions = {
    //   type: 'TOGGLEMENU',
    // }
    // this.props.dispatch(actions)
    // 触发action的第二种方法
    // this.props.dispatch(toggleMenuHand())
  };
  render() {
    let { menu, collapsed, toggleMenuDispatchHand } = this.props
    return (
      <Sider className='main-aside-wrap' collapsed={collapsed}>
        {/* <div className="logo" onClick={this.toggleCollapsedHand}> 我是 logo</div> */}
        {/* <div className="logo" onClick={toggleMenuDispatchHand}> 我是 logo</div> */}
        <div className="logo">
          <img src={iconAvatar} style={{width: '40px'}} />
          {/* <Icon type="github" /> */}
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          {
            menu && menu.map(item => {
              return item.children && item.children.length > 0 ? this.renderSubMenuItemHand(item) : this.renderMenuItemHand(item)
            })
          }
        </Menu>
      </Sider>
    )
  }
}
const mapStateToProps = state => {
  return {
    collapsed: state.COLLAPSED.collapsed
  };
}
const dispatchToProp = dispatch => ({
  toggleMenuDispatchHand() {
    // 触发action的第三种方法
    dispatch(toggleMenuHand())
  }
})
export default withRouter(connect( mapStateToProps, dispatchToProp )(MainAside))