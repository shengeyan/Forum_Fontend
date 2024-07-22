import { configureStore } from '@reduxjs/toolkit'
import countNumber from './test'

export default configureStore({
    reducer: {
        count: countNumber,
    },
})
