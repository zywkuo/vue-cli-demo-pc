import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import qs from 'qs'

// axios.defaults.baseURL = 'http://localhost:8080/api';//代理模式
axios.defaults.baseURL = '';//mock模式
axios.defaults.timeout = 5000;
axios.defaults.responseType = "json";
axios.defaults.withCredentials = true; // 是否允许带cookie这些
axios.defaults.headers = {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
}

// request拦截器
axios.interceptors.request.use(
    config => {
        // 在发送请求之前做某件事
        if (config.method === "post"){
            // 序列化   温馨提示,若是贵公司的提交能直接接受json 格式,可以不用 qs 来序列化的
            config.data = qs.stringify(config.data);
        }
        // 若是有做鉴权token , 就给头部带上token
        // 若是需要跨站点,存放到 cookie 会好一点,限制也没那么多,有些浏览环境限制了 localstorage 的使用
        // 这里localStorage一般是请求成功后我们自行写入到本地的,因为你放在vuex刷新就没了
        // 一些必要的数据写入本地,优先从本地读取
        if (localStorage.token) {
            config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// respone拦截器
axios.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        if (response.status !== 200) {//后需要修改
            Message({
                message: res.message,
                type: 'error',
                duration: 5 * 1000
            })

            // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                MessageBox.confirm(
                    '你已被登出，可以取消继续留在该页面，或者重新登录',
                    '确定登出',
                    {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }
                ).then(() => {
                    store.dispatch('FedLogOut').then(() => {
                        location.reload() // 为了重新实例化vue-router对象 避免bug
                    })
                })
            }
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default {
    //get请求
    get (url,param) {
        return new Promise((resolve,reject) => {
            axios({
                method: 'get',
                url,
                params: param
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    //post请求
    post (url,data) {
        return new Promise((resolve,reject) => {
            axios({
                method: 'post',
                url,
                data: data
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}








