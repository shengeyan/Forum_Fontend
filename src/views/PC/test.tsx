import React, { useState } from 'react'
import ImageShow from '@/common/imageShow/Index'
import { ImageShowType } from '@/types/commonType/imageType'

// import { Container } from './styles';

const PC: React.FC = () => {
    const [state, setState] = useState<ImageShowType>({
        url: 'https://raw.githubusercontent.com/shengeyan/image/master/imgt.png',
    })

    return (
        <div>
            <ImageShow {...state}></ImageShow>
        </div>
    )
}

export default PC
