import { Layout } from '@arco-design/web-react'
import React from 'react'

// import MySider from '@/components/sider/pc/Index.tsx'
import MyContent from '@/components/content/pc/Index.tsx'
import styles from './index.module.scss'

// const Sider = Layout.Sider
const Content = Layout.Content

const PC: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* <Sider className={styles.sider}>
                <MySider></MySider>
            </Sider> */}
            <Content className={styles.content}>
                <MyContent></MyContent>
            </Content>
        </div>
    )
}

export default PC
