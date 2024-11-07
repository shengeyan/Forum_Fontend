/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom'
import { isMobile } from '@/utils/isMobile'
import MobileLayout from '@/layout/mobile/index'
import PCLayout from '@/layout/pc/index'
import React from 'react'
import Home from '@/views/PC/Home/Home'
import Test from '@/views/PC/test'

const isMobileDevice = isMobile()
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
const PCBlogs = React.lazy(() => import('@/views/PC/Blog/BLOG'))
const AboutUs = React.lazy(() => import('@/views/PC/AboutUS/AboutUS'))
const Links = React.lazy(() => import('@/views/PC/Link/Link'))
const ArticleDetail = React.lazy(
    () => import('@/common/articleDetail/ArticleDetail')
)
const CommentSection = React.lazy(
    () => import('@/views/PC/CommentSection/CommentSection')
)

const desktopRoutes = [
    // Home
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/app',
        element: <PCLayout></PCLayout>,
        children: [
            // CommentSection
            {
                path: 'comment',
                element: <CommentSection />,
            },
            // blogs
            {
                path: 'blogs',
                element: <PCBlogs />,
            },
            // blogs detail
            {
                path: 'blogs/:id',
                element: <ArticleDetail />,
            },
            // about us
            {
                path: 'about',
                element: <AboutUs />,
            },
            // links
            {
                path: 'links',
                element: <Links />,
            },
        ],
    },
    // tst
    {
        path: '/tst',
        element: <Test></Test>,
    },
]

const router = createBrowserRouter(
    isMobileDevice ? mobileRoutes : desktopRoutes
)

export default router
