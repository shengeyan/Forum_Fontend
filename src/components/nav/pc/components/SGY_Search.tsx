import { useState } from 'react'
import { Input } from '@arco-design/web-react'
const InputSearch = Input.Search

export default function Search() {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (value: string) => {
        setInputValue(value)
    }

    const print = (value: string) => {
        console.log(value) // 只打印输入框中的值
    }
    return (
        <>
            <InputSearch
                allowClear
                placeholder="搜索论坛"
                onSearch={print}
                onChange={handleInputChange}
                value={inputValue}
                style={{ width: '100%' }}
            />
        </>
    )
}
