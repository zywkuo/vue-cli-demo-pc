<template>
    <div id="app-wrapper" :class="classObj">
        <Sidebar class="sidebar-container"/>
        <div class="main-container">
            <Navbar/>
            <AppMain/>
        </div>
    </div>
</template>

<script>
    import { Navbar, Sidebar, AppMain } from "./components";
    export default {
        name: "Layout",
        components: {
            Navbar,
            Sidebar,
            AppMain
        },
        computed: {
            classObj() {
                return {
                    hideSidebar: !this.$store.state.app.sidebar.opened,
                    openSidebar: this.$store.state.app.sidebar.opened,
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    #app-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>
