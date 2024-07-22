import { createSlice } from '@reduxjs/toolkit'

const number: number = 0

export const countNumber = createSlice({
    name: 'count',
    initialState: number,
    reducers: {
        inadd(state: number) {
            return state + 1
        },
        deleteadd(state: number) {
            return state - 1
        },
    },
})

export const { inadd, deleteadd } = countNumber.actions

export default countNumber.reducer
