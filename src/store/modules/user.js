import { login } from '@/api/login/login'

const user = {
    state: {
        token: sessionStorage.getItem('token'),
        name: '',
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
    },
    actions: {
        // 登录
        Login({ commit }, userInfo) {
            const username = userInfo.username
            return new Promise((resolve, reject) => {
                login(username, userInfo.password).then(response => {
                    const data = response.data
                    sessionStorage.setItem('token',data.token)
                    commit('SET_TOKEN', data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })

            })
        },
        //退出
        LogOut({ commit }){
            return new Promise((resolve, reject) => {
                commit('SET_TOKEN', '')
                sessionStorage.removeItem('token')
                resolve()
            })
        }
    }
}

export default user
