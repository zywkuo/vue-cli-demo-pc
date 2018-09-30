<template>
    <div class="login">
        <div class="loginBox">
            <el-form label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号">
                    <el-input v-model="loginForm.userName" type="text"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="loginForm.passWord" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

    // import axios from '../../api/index'


    export default {
        name: "login",
        data() {
            return {
                loginForm: {
                    userName: '',
                    passWord: ''
                },
                testData: {
                    id: 12013
                }
            }
        },

        created: function() {

            // http://192.168.2.18:8080/meis/a/sys/office/treeData

            // axios.post('/meis/a/smart/sysModel/ajaxGetDeviceDetaill', { id: 12013 })
            //     .then(function (res) {
            //         console.log(res)
            //     })
            //     .catch(function (err) {
            //         console.log(err)
            //     })

            // axios.get('/meis/a/sys/office/treeData')
            //     .then(function (res) {
            //         console.log(res)
            //     })
            //     .catch(function (err) {
            //         console.log(err)
            //     })

            // axios.post('/api/meis/a/smart/sysModel/ajaxGetDeviceDetaill', { id: 26853 })
            //     .then(function (res) {
            //         console.log(res)
            //     })
            //     .catch(function (err) {
            //         console.log(err)
            //     })


        },
        methods: {
            handleLogin() {
                this.$store.dispatch('Login', this.loginForm).then(() => {
                    this.$router.push({ path: '/' })
                }).catch(() => {

                })
            }
        }

    }
</script>

<style scoped lang="less">
    .loginBox {
        width: 300px;
        margin: 100px auto;
    }
</style>












