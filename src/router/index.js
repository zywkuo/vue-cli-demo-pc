import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
    {
        path: '/404',
        component: () => import('@/views/errorPage/404'),
        hidden: true
    },
    {
        path: '/login',
        component: () => import('@/views/login/login'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/dashboard')
            }
        ]
    },
    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        meta: { title: 'Example', icon: 'example' },
        children: [
            {
                path: 'table',
                name: 'Table',
                component: () => import('@/views/table/index'),
                meta: { title: 'Table', icon: 'table' }
            },
            {
                path: 'tree',
                name: 'Tree',
                component: () => import('@/views/tree/index'),
                meta: { title: 'Tree', icon: 'tree', roles: ['admin'] }
            }
        ]
    },
    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'Nested',
        meta: {
            title: 'nested',
            icon: 'nested'
        },
        children: [
            {
                path: 'menu1',
                component: () => import('@/views/nested/menu1/index'), // Parent router-view
                name: 'Menu1',
                meta: { title: 'menu1' },
                children: [
                    {
                        path: 'menu1-1',
                        component: () => import('@/views/nested/menu1/menu1-1'),
                        name: 'Menu1-1',
                        meta: { title: 'menu1-1' }
                    },
                    {
                        path: 'menu1-2',
                        component: () => import('@/views/nested/menu1/menu1-2'),
                        name: 'Menu1-2',
                        meta: { title: 'menu1-2' },
                        children: [
                            {
                                path: 'menu1-2-1',
                                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                                name: 'Menu1-2-1',
                                meta: { title: 'menu1-2-1' }
                            },
                            {
                                path: 'menu1-2-2',
                                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                                name: 'Menu1-2-2',
                                meta: { title: 'menu1-2-2' }
                            }
                        ]
                    },
                    {
                        path: 'menu1-3',
                        component: () => import('@/views/nested/menu1/menu1-3'),
                        name: 'Menu1-3',
                        meta: { title: 'menu1-3' }
                    }
                ]
            },
            {
                path: 'menu2',
                component: () => import('@/views/nested/menu2/index'),
                meta: { title: 'menu2' }
            }
        ]
    },
    {
        path: '/charts',
        component: Layout,
        redirect: '/charts/lineChart',
        name: 'charts',
        meta: { title:'图表', icon: 'charts'},
        children: [
            {
                path: 'lineChart',
                name: 'lineChart',
                component: () => import('@/views/lineChart/line'),
                meta: { title: '线图'}
            }
        ]
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

export const asyncRouterMap = [

    /*

    {
        path: 'external-link',
        component: Layout,
        children: [
            {
                path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
                meta: { title: 'externalLink', icon: 'link' }
            }
        ]
    },*/

]

export default new Router({
    routes: constantRouterMap
})










