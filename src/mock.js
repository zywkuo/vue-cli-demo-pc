//引入mockjs
const Mock = require('mockjs')

//使用mockjs模拟数据

const token = {
    code: 200,
    data: {
        token: "admin"
    }
}
Mock.mock('/user/login', 'post', token);



