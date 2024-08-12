import { Menu } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'

export default function SGY_Menu() {
    const navigate = useNavigate()
    const MenuItem = Menu.Item

    const handleRouter = (key: string) => {
        switch (key) {
            case '1':
                navigate('/')
                break
            case '4':
                navigate('/blogs')
                break
            case '2':
                navigate('/knowledge')
                break
            case '3':
                navigate('/messages')
                break
            case '5':
                navigate('/about')
                break
            case '6':
                navigate('/links')
                break
            default:
                break
        }
    }

    return (
        <>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
                className="menu"
                onClickMenuItem={handleRouter}
            >
                <MenuItem key="1">首页</MenuItem>
                <MenuItem key="2">知识库</MenuItem>
                <MenuItem key="3">留言板</MenuItem>
                <MenuItem key="4">博客文章</MenuItem>
                <MenuItem key="5">关于我们</MenuItem>
                <MenuItem key="6" style={{ textAlign: 'center' }}>
                    友链
                </MenuItem>
            </Menu>
            <style jsx>{`
                .menu {
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </>
    )
}
