import { createBrowserRouter } from 'react-router-dom'
import { isMobile } from '@/utils/isMobile'
import MobileLayout from '@/layout/mobile/index'
import PCLayout from '@/layout/pc/index'
import React from 'react'

const isMobileDevice = isMobile()
// eslint-disable-next-line react-refresh/only-export-components
const MobileLazyHome = React.lazy(
    () => import('@/components/content/mobile/Index')
)

// 移动端路由
const mobileRoutes = [
    {
        path: '/',
        element: <MobileLayout></MobileLayout>,
        children: [
            {
                path: '/',
                element: <MobileLazyHome></MobileLazyHome>,
            },
        ],
    },
]

// PC端路由
const desktopRoutes = [
    {
        path: '/',
        element: <PCLayout></PCLayout>,
    },
]

const router = createBrowserRouter(
    isMobileDevice ? mobileRoutes : desktopRoutes
)

export default router
