import React, { useEffect, useState } from 'react'
import LinkItem from '@/common/linkItem/pc/LinkItem'
import styles from './index.module.scss'
import { linkType } from '@/types/linkType/linkType'
import { getLinksData } from '@/api/link'

const ItemShow: React.FC = () => {
    const [showData, setShowData] = useState<linkType[]>([])
    // Init Data
    useEffect(() => {
        const InitData = async () => {
            const resData = (await getLinksData()).data
            setShowData(resData)
        }
        InitData()
    }, [])

    return (
        <div className={styles.container}>
            {showData.map((item, index) => (
                <LinkItem key={index} {...item} />
            ))}
        </div>
    )
}

export default ItemShow
