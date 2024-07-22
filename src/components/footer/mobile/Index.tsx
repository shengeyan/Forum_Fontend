import { IconUser, IconShake, IconApps } from '@arco-design/web-react/icon'
import styles from './index.module.scss'

export default function Index() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerItem}>
                <IconShake className={styles.icon} />
                <span>分区</span>
            </div>
            <div className={styles.footerItem}>
                <IconApps className={styles.icon} />
                <span>发现</span>
            </div>
            <div className={styles.footerItem}>
                <IconUser className={styles.icon} />
                <span>我</span>
            </div>
        </div>
    )
}
