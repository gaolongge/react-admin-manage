const menu = [{
        url: '/index',
        title: '首页',
        icon: 'home',
        auth: [1]
    },
    {
        url: '/todolist',
        title: 'ToDoList',
        icon: 'schedule',
        auth: [1],
        children: [
            {
                title: 'ToDoList',
                url: '/todolist',
                icon: '',
            }
        ]
    },
    {
        title: '通用',
        url: '/public',
        icon: 'appstore',
        auth: [1],
        children: [{
            title: '按钮',
            url: '/public/button',
            icon: ''
        }, {
            title: '图标',
            url: '/public/icon',
            icon: ''
        }]
    },
   
    {
        title: '导航',
        url: '/nav',
        icon: 'bulb',
        children: [{
                title: '下拉菜单',
                url: '/nav/dropdown',
                icon: ''
            },
            {
                title: '导航菜单',
                url: '/nav/menu',
                icon: ''
            },
            {
                title: '步骤条',
                url: '/nav/steps',
                icon: ''
            }
        ]
    },
    {
        title: '表单',
        url: '/form',
        icon: 'form',
        children: [{
                title: '基础表单',
                url: '/form/base-form',
                icon: ''
            },
            {
                title: '步骤表单',
                url: '/form/step-form',
                icon: ''
            }
        ]
    },
    {
        title: '展示',
        url: '/show',
        icon: 'pie-chart',
        children: [{
                title: '表格',
                url: '/show/table',
                icon: ''
            },
            {
                title: '折叠面板',
                url: '/show/collapse',
                icon: ''
            },
            {
                title: '树形控件',
                url: '/show/tree',
                icon: ''
            },
            {
                title: '标签页',
                url: '/show/tabs',
                icon: ''
            }
        ]
    },
    {
        title: '其它',
        url: '/others',
        icon: 'paper-clip',
        auth: [1],
        children: [{
                title: '进度条',
                url: '/others/progress',
                icon: ''
            },
            {
                title: '动画',
                url: '/others/animation',
                icon: ''
            },
            {
                title: '上传',
                url: '/others/upload',
                icon: ''
            },
            {
                title: '富文本',
                url: '/others/editor',
                icon: ''
            },
            {
                title: '404',
                url: '/404',
                icon: ''
            },
            {
                title: '500',
                url: '/500',
                icon: ''
            }
        ]
    },
    {
        title: '多级导航',
        url: '/one',
        icon: 'bars',
        children: [{
            title: '二级',
            url: '/one/two',
            icon: '',
            children: [{
                title: '三级',
                url: '/one/two/three',
                icon: ''
            }]
        }]
    },
    {
        title: '关于',
        url: '/about',
        icon: 'user',
        auth: [1]
    }
]

export default menu
