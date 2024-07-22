import { Layout } from '@arco-design/web-react'
import Nav from '@/components/nav/pc/Index'
import MyFooter from '@/components/footer/pc/Index'
const Sider = Layout.Sider
const Header = Layout.Header
const Footer = Layout.Footer
const Content = Layout.Content

const PClayout = () => {
    return (
        <>
            <div className="layout">
                <Layout>
                    <Header className="header">
                        <Nav></Nav>
                    </Header>
                    <Layout>
                        <Sider className="sider">Sider</Sider>
                        <Content className="content">Content</Content>
                    </Layout>
                    <Footer className="footer" style={{ textAlign: 'center' }}>
                        <MyFooter></MyFooter>
                    </Footer>
                </Layout>
            </div>
            <style jsx>{`
                .layout {
                    width: 100vw;
                    height: 100vh;
                    .arco-layout {
                        width: 100%;
                        height: 100%;
                    }
                    .header {
                    }
                    .sider {
                        background-color: aqua;
                    }
                    .content {
                        background-color: bisque;
                    }
                    .footer {
                        width: 100%;
                        height: 10vh;
                    }
                }
            `}</style>
        </>
    )
}

export default PClayout
