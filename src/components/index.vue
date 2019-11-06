<template>
    <div class="index">
        <indexHead></indexHead>
        <section class="content">
            <!-- nav-tab -->
            <indexNav></indexNav>
            <!-- 主题 -->
            <div class="con">
                <!-- 面包屑 -->
                <el-breadcrumb separator-class="el-icon-arrow-right" style="padding:10px 0">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                    <el-breadcrumb-item>用户列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
                <!-- <indexMain></indexMain> -->
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
import indexHead from "./head"
import indexNav from "./nav"
// import indexMain from "./main"
export default {
    name: 'index',
    components:{
        indexHead,
        // indexMain,
        indexNav
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .index
        background-color red
        height 100vh
        .content
            display flex
            justify-content space-between
            height calc(100vh - 61px)
            .con
                flex 1
                height 100
                padding 10px
                overflow hidden
                background-color #eee


</style>
