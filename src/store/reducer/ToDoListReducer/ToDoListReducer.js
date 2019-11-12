/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 16:02:50
 * @LastEditTime: 2019-10-17 15:05:31
 * @LastEditors: Please set LastEditors
 */
import { ADDITEM, CHANGEVALUE, DELITEM } from '../../actionTypes'
const initialState = {
  inputValue: 'asas',
  list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]
};
let ToDoList = (state = initialState, action) => {
  switch (action.type) {
    case ADDITEM:
      let newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = ''
      newState.list.push(action.value)
      return newState
    case CHANGEVALUE:
      let newChangeState = JSON.parse(JSON.stringify(state))
      newChangeState.inputValue = action.value
      return newChangeState
    case DELITEM:
      let delState = JSON.parse(JSON.stringify(state))
      delState.list.splice(action.index, 1)
      return delState
    default:
      return state;
  }
}
export default ToDoList