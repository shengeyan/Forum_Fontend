# 项目架构
技术栈：TS + React + Vite + Arco Design Pro

# 项目结构

├─public                 静态资源
│  └─home
└─src
    ├─api                  模块化API封装
    │  ├─article
    │  └─link
    ├─assets              全局的样式文件
    │  ├─css
    │  └─img
    ├─common              公共组件
    │  ├─articleDetail
    │  ├─articleItem
    │  ├─imageShow
    │  ├─linkItem
    │  └─linkShow
    ├─components          业务组件
    │  ├─content
    │  ├─footer
    │  ├─nav
    │  └─sider
    ├─layout                        布局
    ├─router                        路由
    ├─store                         全局状态管理
    ├─types                         类型定义
    │  ├─commonType       全局状态类型定义
    │  ├─defaultType          默认类型定义
    │  └─linkType                友链类型定义 
    ├─utils                           工具类 
    └─views                         页面
        └─PC
            ├─AboutUS
            ├─Blog
            ├─CommentSection
            ├─Home
            │  └─components
            │      └─FirstBlock
            └─Link