import React from 'react'
import styles from './index.module.scss'
import { linkType } from '@/types/linkType/linkType'
import DefaultInfo from '@/types/defaultType/defaultType'
import { IconLink, IconCommon, IconCloud } from '@arco-design/web-react/icon'

const LiknItem: React.FC<linkType> = (props) => {
    const {
        Name,
        BLOG,
        VLOG,
        Github,
        other,
        AvatarURL = DefaultInfo.defaultAvatarURL,
        PersonalSignature = DefaultInfo.PersonalSignature,
    } = props
    
    return (
        <div className={styles.container}>
            {/* Info */}
            <div className={styles.topSection}>
                <img
                    src={AvatarURL}
                    alt={`${Name}'s avatar`}
                    className={styles.avatar}
                />

                <div className={styles.nameAndLinks}>
                    <h2 className={styles.name}>{Name}</h2>
                    <div className={styles.links}>
                        {/* BLOG */}
                        {BLOG && (
                            <div className={styles.link}>
                                <IconCommon></IconCommon>
                                WEB
                            </div>
                        )}
                        {/* VLOG */}
                        {VLOG && (
                            <div className={styles.link}>
                                <IconCloud></IconCloud>
                                VLOG
                            </div>
                        )}
                        {/* Github */}
                        {Github && (
                            <div className={styles.link}>
                                <IconLink></IconLink>
                                Github
                            </div>
                        )}
                        {other && <span className={styles.link}>{other}</span>}
                    </div>
                </div>
            </div>
            {/* Personal-Signature */}
            {PersonalSignature && (
                <div className={styles.signature}>
                    <p className={styles.signatureText}>{PersonalSignature}</p>
                </div>
            )}
        </div>
    )
}

export default LiknItem
