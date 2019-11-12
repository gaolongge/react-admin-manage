/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 16:02:50
 * @LastEditTime: 2019-10-17 14:59:48
 * @LastEditors: Please set LastEditors
 */
import {INCREMENT,DECREMENT} from '../../actionTypes'
const initialState = {
  count: 0
};
export default (state=initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}