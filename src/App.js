/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 16:25:32
 * @LastEditTime: 2019-10-16 16:32:27
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import Pages404 from './components/common/serve/404.js'
import Pages500 from './components/common/serve/500.js'
import Login from './pages/login/index'
import Layout from './pages/layout/layout'


class App extends Component {
  state = {
  };
  render() {
    return (
      <div>
        <Router>
          <ul>
            <li><Link to="/500">About</Link></li>
            <li><Link to="/404">Inbox</Link></li>
          </ul>
          <Switch>
            <Route path='/' exact  render = {() => <Redirect to='/index' />}></Route>
            <Route path='/404' component={Pages404} />
            <Route path='/500' component={Pages500} />
            <Route path='/login' component={Login} />
            {/* 默认布局 */}
            <Route component={Layout} />
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
