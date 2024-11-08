import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { IconEmail, IconLock } from '@arco-design/web-react/icon'
import { Button, Input } from '@arco-design/web-react'

const backgroundImages = [
    '/public/login/login-container-bc-1.jpg',
    '/public/login/login-container-bc-2.jpg',
    '/public/login/login-container-bc-3.jpg',
]

const Login: React.FC = () => {
    const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0])

    // change background image every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImage((prevImage) => {
                const currentIndex = backgroundImages.indexOf(prevImage)
                const nextIndex = (currentIndex + 1) % backgroundImages.length
                return backgroundImages[nextIndex]
            })
        }, 10000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className={styles.container}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={styles.content}>
                <div className={`${styles.contentTop} font-custom`}>
                    <img src="/src/assets/img/Logo.png" />
                    Crazy For Code
                </div>
                <div className={styles.contentBottom}>
                    <div className={styles.contentBottomImage}>
                        <img src="/public/login/login-content-left.png" />
                    </div>
                    <div className={styles.contentBottomInfo}>
                        <div className={`${styles.infoTitle} `}>
                            <h3 className={`font-custom`}>Welcome Back ：）</h3>
                            <p>
                                To keep connected with us please login with your
                                personal information by email address and
                                password 💖
                            </p>
                        </div>
                        <div className={styles.infoInputArea}>
                            <div className={styles.infoInputItem}>
                                <IconEmail
                                    className={styles.iconWrapper}
                                    style={{ color: '#d0d4d7' }}
                                />
                                <div className={styles.inputContentArea}>
                                    <text>Email Address</text>
                                    <Input
                                        style={{ width: 350 }}
                                        allowClear
                                        placeholder="Enter Address"
                                    />
                                </div>
                            </div>
                            <div className={styles.infoInputItem}>
                                <IconLock
                                    className={styles.iconWrapper}
                                    style={{ color: '#d0d4d7', height: '100%' }}
                                />
                                <div className={styles.inputContentArea}>
                                    <text>Password</text>
                                    <Input
                                        style={{ width: 350 }}
                                        allowClear
                                        placeholder="Enter Password"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttonArea}>
                            <Button
                                shape="round"
                                type="primary"
                                style={{ width: 150, height: 40 }}
                            >
                                Login Now
                            </Button>
                            <Button
                                shape="round"
                                style={{ width: 150, height: 40 }}
                            >
                                Create Account
                            </Button>
                        </div>
                        <div className={styles.contactArea}>
                            <p>Or you can join with</p>
                            <div className={styles.contactIcon}>
                                <img
                                    className={styles.contactAreaItem}
                                    src="/public/login/QQ-logo.png"
                                />
                                <img
                                    className={styles.contactAreaItem}
                                    src="/public/login/WX-logo.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
