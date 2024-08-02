import React from 'react'
import { ImageShowType } from '@/types/commonType/imageType'
import styles from './index.module.scss'

// import { Container } from './styles';

const imageShow: React.FC<ImageShowType> = (props) => {
    return (
        <div className={styles.container}>
            {/* 背景图 */}
            <div
                className={styles.BCbox}
                style={{ backgroundImage: `url(${props.url})` }}
            >
                <div className={styles.fontTop}></div>
                <div className={styles.middleBackground}></div>
                <div className={styles.fontBottom}></div>
            </div>
            {/* 滑动框 */}
            <div
                className={styles.Slide}
                style={{ backgroundImage: `url(${props.url})` }}
            ></div>
        </div>
    )
}

export default imageShow
