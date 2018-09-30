// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import NProgress from 'nprogress'//进度条插件
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false });//禁用进度环

import './styles/index.less'

import '@/assets/icons' // icon

// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

//开启debug模式
Vue.config.productionTip = false;

// 引入mockjs模拟后台返回数据
require('./mock')

//全局钩子router.beforeEach中拦截路由
router.beforeEach((to, from, next) => {
    NProgress.start()
    if(sessionStorage.getItem('token')){
        if(to.path === '/login'){
            next({'path': '/'})
            NProgress.done()
        }else {
            next()
        }
    }else {
        if(to.path === '/login'){
            next()
            NProgress.done()
        }else{
            next('/login')
        }
    }
});

router.afterEach(() => {
    NProgress.done()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})


