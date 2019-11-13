/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 16:59:01
 * @LastEditTime: 2019-10-17 15:09:50
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'
import { connect } from 'react-redux';
import { List, Input, Button, Typography } from 'antd';
// import { addNameCreater, addNameAsync } from '../../store/action'
import * as type from '../../store/actionTypes'

const { Title} = Typography;

class ToDoList extends Component {
  constructor(props) {
    super(props)
  }
  addItem = () => {
    if (!this.props.inputValue) return
    this.props.dispatch({
      type: type.ADDITEM,
      value: this.props.inputValue
    })
  }
  changValue = (e) => {
    let action = {
      type: type.CHANGEVALUE,
      value: e.target.value
    }
    this.props.dispatch(action)
  }
  delItem = (index) => {
    let action = {
      type: type.DELITEM,
      index
    }
    // 第一种：
    this.props.dispatch(action)
    // 第二种：（异步）
    // this.props.dispatch(addNameCreater(index))
    // this.props.dispatch(addNameAsync(index))
  }
  render() {
    return (
      <div style={{padding: '20px'}}>
        <Title>结合react-redux的todolist Demo</Title>
        {/* {this.props.count} */}
        <div style={{padding:20}}>
          <Input 
            onChange={this.changValue} 
            placeholder='请输入内容' 
            style={{width:200,marginLeft:-20,marginRight: 20}} 
            value={this.props.inputValue}
            allowClear
          />
          <Button onClick={this.addItem}>添加</Button>
        </div>
        <List
          size="small"
          bordered
          dataSource={this.props.list}
          renderItem={
            (item,index) => <List.Item onClick={this.delItem.bind(this,index)}>{item}</List.Item>
          }
          
        />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    inputValue: state.ToDoListReducer.inputValue,
    list: state.ToDoListReducer.list,
    count: state.CountReducer.count
  };
}
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(dispatch, ownProps,'dispatch, ownProps')
  return {
    onClick: () => {
      console.log()
      let action = {
        type: type.DELITEM,
        index: 1
      }
      dispatch(action)
    }
  }
}
// export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);
export default connect(mapStateToProps)(ToDoList);