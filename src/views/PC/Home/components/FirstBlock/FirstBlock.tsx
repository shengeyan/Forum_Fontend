import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const FirstBlock: React.FC = () => {
    const navigate = useNavigate()
    const onJumpUrl = (url: string) => {
        switch (url) {
            case 'forum':
                navigate('/app/blogs')
                break
            case 'blog':
                navigate('/app/about')
                break
            case 'contact':
                navigate('/app/about')
                break
            case 'about':
                navigate('/app/about')
                break
            default:
                break
        }
    }

    return (
        <div className={styles.container}>
            {/* Top-Area */}
            <div className={styles.topArea}>
                <div className={`${styles.topAreaWhite} font-custom`}>
                    Crazy For Code
                </div>
                <div className={styles.topAreaBlack}>
                    <div className={styles.topAreaGray}>
                        <div
                            className={`${styles.topAreaTag} font-custom`}
                            onClick={() => onJumpUrl('forum')}
                        >
                            Forum
                        </div>
                        <div
                            className={`${styles.topAreaTag} font-custom`}
                            onClick={() => onJumpUrl('blog')}
                        >
                            Blog
                        </div>
                        <div
                            className={`${styles.topAreaTag} font-custom`}
                            onClick={() => onJumpUrl('contact')}
                        >
                            Contact
                        </div>
                        <div
                            className={`${styles.topAreaTag} font-custom`}
                            onClick={() => onJumpUrl('about')}
                        >
                            About
                        </div>
                    </div>
                </div>
            </div>
            {/* Content-Area */}
            <div className={styles.contentArea}>
                <div className={styles.contentAreaLeft}></div>
                <div className={styles.contentAreaRight}>
                    <div className={styles.contentAreaSquare}></div>
                    <div
                        className={`${styles.contentAreaVertical} font-custom`}
                    >
                        &nbsp;&nbsp;&nbsp;&nbsp; crazy for me &nbsp;&nbsp;
                        ————&nbsp;&nbsp;🐹 & 🐭 & 🐣
                    </div>
                </div>
            </div>
            {/* Footer-Area */}
            <div className={styles.footerArea}>
                <div className={styles.footerAreaWhite}>
                    <div className={`${styles.footerAreaTags} font-custom`}>
                        {' '}
                        <span>01</span>
                        <span>Freedom</span>
                    </div>
                    <div className={`${styles.footerAreaTags} font-custom`}>
                        {' '}
                        <span>02</span>
                        <span>Variety</span>
                    </div>
                    <div className={`${styles.footerAreaTags} font-custom`}>
                        {' '}
                        <span>03</span>
                        <span>Crazy</span>
                    </div>
                    <div className={`${styles.footerAreaTags} font-custom`}>
                        <span>04</span>
                        <span>Imagine</span>
                    </div>
                </div>
                <div className={`${styles.footerAreaBlack} font-custom`}>
                    <span onClick={() => onJumpUrl('forum')}>
                        客官里面请 &nbsp;&nbsp;🢂
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FirstBlock
