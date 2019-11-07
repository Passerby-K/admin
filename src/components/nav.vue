<template>
    <!-- nav-tab -->
    <nav class="nav">
        <div class="hint" @click="isCollapse=!isCollapse"><i :class="isCollapse?'el-icon-d-arrow-left':'el-icon-d-arrow-right'" ></i></div>
        <el-menu
            router
            default-active="1"
            class="el-menu-vertical-demo"
            text-color="#fff"
            background-color="#545c64"
            :collapse="isCollapse">
            <el-menu-item index="1" route="/">
                <i class="el-icon-setting"></i>
                <span slot="title" >工作平台</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">用户管理</span>
                </template>
                <el-menu-item index="2-1" route="/user">用户列表</el-menu-item>
                <el-menu-item index="2-2">活动详情</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">信息列表</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">设置中心</span>
            </el-menu-item>
        </el-menu>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            isCollapse: false
        }
    },
    methods:{
        
    }
}
</script>

<style lang="stylus" scoped>
    .nav
        display block
        background-color #545c64
        .hint
            position relative
            top 0
            left 70%
            width 20px
            color white
            background #333
            
</style>