import React, { Component} from 'react'
import MainHeader from './mainHeader'
import MainFooter from './mainFooter'
import MainContent from './mainContent'
import MainAside from './mainAside'
import { Layout } from 'antd';
const { Header, Footer,  Content} = Layout;
import menu from './menu'
class LayoutIndex extends Component {
    render() {
        return (
            <Layout className = 'common-height-100'>
              <MainAside menu={menu}/>                
              <Layout>
                <Header style={style.header}>
                  <MainHeader />
                </Header>
                <Content>
                  <MainContent />
                </Content>
                <Footer>
                  <MainFooter />
                </Footer>
              </Layout>
            </Layout>
        )
    }
}
export default LayoutIndex
const style = {
    header: {
       padding: "0 10px",
       backgroundColor: '#fff'
    }
}