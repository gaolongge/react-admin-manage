import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
class MainContent extends Component {
  render() {
    const { routes } = this.props
    console.log(routes,'routes')
    return (
      <div className = 'main-contnent-wrap'>
        <Switch>
          {
            routes.map((item, index) => {
              return (
                <Route 
                  path={item.path} 
                  component={item.component} 
                  key={item.path} 
                  render={props => <item.component {...props} />}
                />
              )
            })          
          }
        </Switch>
      </div>
    )
  }
}
export default MainContent