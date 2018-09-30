<template>
    <div v-if="!item.hidden&&item.children" class="menu-wrapper">

        <el-submenu :index="item.name||item.path">

            <template slot="title">
                <item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title" />
            </template>

            <template v-for="child in item.children" v-if="!child.hidden">
                <SidebarItem
                    v-if="child.children&&child.children.length>0"
                    :key="child.name"
                    :item="child"
                    :basePath="resolvePath(child.path)"
                    class="nest-menu"
                />

                <router-link :to="resolvePath(child.path)">
                    <el-menu-item :index="resolvePath(child.path)">
                        <item v-if="child.meta" :icon="child.meta.icon" :title="child.meta.title" />
                    </el-menu-item>
                </router-link>
            </template>

        </el-submenu>

    </div>
</template>

<script>
    import path from 'path'
    import Item from './Item'

    export default {
        name: "SidebarItem",
        components: {
            Item
        },
        props: {
            item: {
                type: Object,
                required: true
            },
            basePath: {
                type: String,
                default: ''
            }
        },
        methods: {
            resolvePath(routerPath) {//转换为绝对路径
                return path.resolve(this.basePath, routerPath)
            }
        }
    }


</script>

<style scoped>

</style>






