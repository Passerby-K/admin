<template>
    <div class="user">
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column       prop="date" label="日期" ></el-table-column>
            <el-table-column       prop="name" label="姓名"></el-table-column>
            <el-table-column       prop="province" label="省份" ></el-table-column>
            <el-table-column       prop="city" label="市区" ></el-table-column>
            <el-table-column       prop="address" label="地址" ></el-table-column>
            <el-table-column       prop="zip" label="邮编"></el-table-column>
            <el-table-column       fixed="right" label="操作" width="130">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="sizes, prev, pager, next"
            :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
          tableData:[{
    "date": "2016-05-02",
    "name": "王小虎",
    "province": "上海",
    "city": "普陀区",
    "address": "上海市普陀区金沙江路 1518 弄",
    "zip": 200333
    }, {
    "date": "2016-05-04",
    "name": "王小虎",
    "province": "上海",
    "city": "普陀区",
    "address": "上海市普陀区金沙江路 1517 弄",
    "zip": 200333
    }, {
    "date": "2016-05-01",
    "name": "王小虎",
    "province": "上海",
    "city": "普陀区",
    "address": "上海市普陀区金沙江路 1519 弄",
    "zip": 200333
    },
    {
        "date": "2016-05-03",
        "name": "王小虎",
        "province": "上海",
        "city": "普陀区",
        "address": "上海市普陀区金沙江路 1516 弄",
        "zip": 200333
    },
    {
        "date": "2016-05-03",
        "name": "王小虎",
        "province": "上海",
        "city": "普陀区",
        "address": "上海市普陀区金沙江路 1516 弄",
        "zip": 200333
    },
    {
        "date": "2016-05-03",
        "name": "王小虎",
        "province": "上海",
        "city": "普陀区",
        "address": "上海市普陀区金沙江路 1516 弄",
        "zip": 200333
    },
    {
        "date": "2016-05-03",
        "name": "王小虎",
        "province": "上海",
        "city": "普陀区",
        "address": "上海市普陀区金沙江路 1516 弄",
        "zip": 200333
    },
    {
        "date": "2016-05-03",
        "name": "王小虎",
        "province": "上海",
        "city": "普陀区",
        "address": "上海市普陀区金沙江路 1516 弄",
        "zip": 200333
    },
    {
        "date": "2016-05-03",
        "name": "王小虎",
        "province": "上海",
        "city": "普陀区",
        "address": "上海市普陀区金沙江路 1516 弄",
        "zip": 200333
    },
    {
        "date": "2016-05-03",
        "name": "王小虎",
        "province": "上海",
        "city": "普陀区",
        "address": "上海市普陀区金沙江路 1516 弄",
        "zip": 200333
    },
    {
        "date": "2016-05-03",
        "name": "王小虎",
        "province": "上海",
        "city": "普陀区",
        "address": "上海市普陀区金沙江路 1516 弄",
        "zip": 200333
    },
    {
        "date": "2016-05-03",
        "name": "王小虎",
        "province": "上海",
        "city": "普陀区",
        "address": "上海市普陀区金沙江路 1516 弄",
        "zip": 200333
    },
    {
        "date": "2016-05-03",
        "name": "王小虎",
        "province": "上海",
        "city": "普陀区",
        "address": "上海市普陀区金沙江路 1516 弄",
        "zip": 200333
    }
],
        currentPage2: 3,
      }
    },
    created(){
        // this.getUser()
    },
    methods: {
        handleClick(row) {
            console.log(row);
        },
        deleteRow(index, rows) {
            // this.$confirm(`此操作将永久删除${rows.tableData.name}文件, 是否继续?`, '提示', {
            this.$confirm('此操作将永久删除${rows.name}文件, 是否继续', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            // 模拟
            // this.$http.post("userList.json",{id:rows.id}).then(res => {
            //     this.$message({
                // type: 'success',
                // message: '删除成功!'
            // });
            // })
            rows.splice(index, 1);
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        },
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        },
        // getUser(){
        //     this.$http.get("userList.json").then(res => {
        //         console.log(res+"aa")
        //         this.tableData=res
        //     })
        // }
    }
}
</script>

<style lang='stylus' scoped>
    .user
        height calc(100vh - 107px)
        overflow-y auto
        .block
            text-align right
</style>