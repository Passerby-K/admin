<template>
    <div id="linee" style="width:500px ;height:400px">
    </div>
</template>

<script>
import echarts from "echarts"
export default {

      mounted () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('linee'));
        // 绘制图表
        myChart.setOption({
             title: {
                text: 'ECharts 折线'
            },
            xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        });
    }
}
</script>

<style>

</style>