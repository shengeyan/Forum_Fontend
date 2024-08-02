import { Layout } from '@arco-design/web-react'
import Nav from '@/components/nav/pc/Index'
import MyFooter from '@/components/footer/pc/Index'

import styles from './index.module.scss'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Header = Layout.Header
const Footer = Layout.Footer

const PClayout = () => {
    return (
        <>
            <div className={styles.layout}>
                <Layout className={styles['full-height-layout']}>
                    <Header className={styles.header}>
                        <Nav></Nav>
                    </Header>
                    <Layout className={styles['middle-layout']}>
                        <Suspense>
                            <Outlet></Outlet>
                        </Suspense>
                    </Layout>
                    <Footer
                        className={styles.footer}
                        style={{ textAlign: 'center' }}
                    >
                        <MyFooter></MyFooter>
                    </Footer>
                </Layout>
            </div>
        </>
    )
}

export default PClayout
