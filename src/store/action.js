/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 17:24:33
 * @LastEditTime: 2019-10-17 14:04:16
 * @LastEditors: Please set LastEditors
 */
import { DELITEM } from './actionTypes'
//包含所有的
export const addNameCreater = (index) =>({type: DELITEM,index})
export const addAgeCreater = (age) => ({type: 'addAgeCreater',data: age})
export const addNameAsync = (index) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(addNameCreater(index))
        },2000);
    }
}