<template>
    <div id="navbar">
        <el-menu class="navbar" mode="horizontal">
            <Hamburger :toggle-click="toggleSideBar"  :is-active="sidebar.opened" class="hamburger-container" />
            <Breadcrumb />
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    <img src="../../../assets/img/user.gif" class="user-avatar">
                    <i class="el-icon-caret-bottom"/>
                </div>
                <el-dropdown-menu slot="dropdown" class="user-dropdown">
                    <el-dropdown-item>
                        <span style="display:block;" @click="logout">LogOut</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Hamburger from '@/components/Hamburger'
    import Breadcrumb from '@/components/Breadcrumb'

    export default {
        name: "navbar",
        components: {
            Hamburger,
            Breadcrumb
        },
        computed: {
            ...mapGetters([
                'sidebar'
            ])
        },
        methods: {
            toggleSideBar() {
                this.$store.dispatch('ToggleSideBar')
            },
            logout() {
                this.$store.dispatch('LogOut').then(() => {
                    location.reload() //重新实例化vue-router对象 避免bug
                })
            }
        }
    }

</script>

<style scoped lang="less">
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .screenfull {
            position: absolute;
            right: 90px;
            top: 16px;
            color: red;
        }
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 35px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top: 5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
</style>
