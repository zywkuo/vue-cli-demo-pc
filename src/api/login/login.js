import axios from '@/api/index'

export function login(username, password) {
    return axios.post('/user/login',
        {
            username,
            password
        }
    )
}

// export function getInfo(token) {
//     return axios({
//         url: '/user/info',
//         method: 'get',
//         params: { token }
//     })
// }
//
// export function logout() {
//     return axios({
//         url: '/user/logout',
//         method: 'post'
//     })
// }
