<template>
    <div style="width:100%;margin-top:20px">
        <div  v-for="(item,index) in listData" :key="index">
            <div class="list">
            <div class="type">
                <p style="font-size:18px;">{{item.typename}}</p>
                <p style="color:#666666;margin-top:0px" ><i class="el-icon-upload" style="color:#36B9FF"></i>{{item.number}}人已生成此证书</p>
            </div>
            <div class="time-btn">
                <p style="color:#666666;">获得时间:{{item.time}}</p>
                <el-button type="primary" style="font-size:14px;background-color:#36B9FF;border:none">生成此证书</el-button>
            </div>
            
            </div>
            <el-divider></el-divider>
        </div>
    </div>  
</template>

<script>
export default {
    data(){
        return{
        listData:[
          {
            time:'2020-6-28',
            typename:'大学英语四级证书',
            number:'1566'
          },
          ]
        }
    }
}
</script>

<style>

</style>