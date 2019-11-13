import React from 'react'
// 首页
import Index from '../pages/index/index'
// todolist
import ToDoList from '../pages/todolist/todolist'
const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
    { path: '/todolist', exact: false, name: 'todolist', component: ToDoList, auth: [1] },

    // { path: '/public/button', exact: false, name: '按钮', component: ButtonView, auth: [1] },
    // { path: '/public/icon', exact: false, name: '图标', component: IconView, auth: [1] },
  
]

export default routes
