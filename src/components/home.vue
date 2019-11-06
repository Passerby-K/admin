<template>
    <div class="home" >
        首页展示
        <el-row :gutter="20" style="margin-top:20px;">
            
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>快捷入口</span>
                    </div>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-card class="box-card">
                                <i class="el-icon-s-tools"></i>添加
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card class="box-card">
                                <i class="el-icon-s-opportunity"></i>查看
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card class="box-card">
                                <i class="el-icon-s-unfold"></i>进入
                            </el-card>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>快捷入口</span>
                    </div>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-card class="box-card">
                                <i class="el-icon-s-tools"></i>添加
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card class="box-card">
                                <i class="el-icon-s-opportunity"></i>查看
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card class="box-card">
                                <i class="el-icon-s-unfold"></i>进入
                            </el-card>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>快捷入口</span>
                    </div>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-card class="box-card">
                                <i class="el-icon-s-tools"></i>添加
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card class="box-card">
                                <i class="el-icon-s-opportunity"></i>查看
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card class="box-card">
                                <i class="el-icon-s-unfold"></i>进入
                            </el-card>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <!-- <el-col :span="8">
                 <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>本月统计</span>
                    </div>
                    46532
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>今日统计</span>
                    </div>
                    355
                </el-card>
            </el-col> -->
            
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>柱状统计</span>
                    </div>
                <column width="500px" height="400px"></column>
                </el-card>
            </el-col>
            <el-col :span="8">
                 <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>折线统计</span>
                    </div>
                 <linee></linee>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>饼图统计</span>
                    </div>
                 <piee></piee>
                </el-card>
            </el-col>
            
        </el-row>
    </div>
</template>

<script>
// import echarts from "echarts"
import column from "@/view/echarts/cloumn"
import linee from "@/view/echarts/line"
import piee from "@/view/echarts/pie"
export default {
    data () {
      return {
          
        }
    },
    components:{
        column,
        linee,
        piee
    }
    // mounted () {
    //     // var echarts = require('echarts');

    //     // 基于准备好的dom，初始化echarts实例
    //     var myChart = echarts.init(document.getElementById('main'));
    //     // 绘制图表
    //     myChart.setOption({
    //         title: {
    //             text: 'ECharts 入门示例'
    //         },
    //         tooltip: {},
    //         xAxis: {
    //             data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //         },
    //         yAxis: {},
    //         series: [{
    //             name: '销量',
    //             type: 'bar',
    //             data: [5, 20, 36, 10, 10, 20]
    //         }]
    //     });
    // }
}
</script>

<style lang="stylus" scoped>
.home
    text-align center
    font-size 30px
    lineh 60px
    color red
   
</style>