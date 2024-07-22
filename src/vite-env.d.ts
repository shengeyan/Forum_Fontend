/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />
/// <reference types="styled-jsx" />
type ContactType = {
    id: string
    first?: string
    last?: string
    avatar?: string
    twitter?: string
    notes?: string
    favorite?: boolean
}

// 全局注册
declare const require: {
    context: (
        path: string,
        deep?: boolean,
        filter?: RegExp
    ) => {
        keys: () => string[]
        (id: string): any
    }
}
