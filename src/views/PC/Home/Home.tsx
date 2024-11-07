import React from 'react'
import FirstBlock from './components/FirstBlock/FirstBlock'
import styles from './index.module.scss'

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.firstBlock}>
                <FirstBlock />
            </div>
            <div className={styles.secondBlock}></div>
        </div>
    )
}

export default Home
