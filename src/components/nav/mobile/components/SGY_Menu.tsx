import { Menu } from '@arco-design/web-react'

export default function SGY_Menu() {
    const MenuItem = Menu.Item

    return (
        <>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
                className="menu"
            >
                <MenuItem key="1">首页</MenuItem>
                <MenuItem key="2">文章</MenuItem>
                <MenuItem key="3">博客</MenuItem>
                <MenuItem key="4">知识库</MenuItem>
                <MenuItem key="5">留言板</MenuItem>
            </Menu>

        </>
    )
}
