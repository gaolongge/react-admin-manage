import React from 'react'
// 首页
import Index from '../pages/index/index'
// todolist
import ToDoList from '../pages/todolist/todolist'
import Counter from '../pages/counter/counter'
import CommonButton from '../pages/common/button'
import CommonIcon from '../pages/common/icon'
const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
    { path: '/demo/todolist', exact: false, name: 'todolist', component: ToDoList, auth: [1] },
    { path: '/demo/counter', exact: false, name: 'Counter', component: Counter, auth: [1] },
    { path: '/common/button', exact: false, name: 'CommonButton', component: CommonButton, auth: [1] },
    { path: '/common/icon', exact: false, name: 'CommonIcon', component: CommonIcon, auth: [1] },
    // { path: '/public/button', exact: false, name: '按钮', component: ButtonView, auth: [1] },
    // { path: '/public/icon', exact: false, name: '图标', component: IconView, auth: [1] },

]

export default routes
