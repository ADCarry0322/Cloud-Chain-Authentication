<template>
    <div style="width:100%;margin-top:20px">
        <div v-for="(item,index) in listData" :key="index">
            <div class="list">
            <div class="type">
                <p style="font-size:18px;">{{item.typename}}</p>
                <p style="color:#666666;margin-top:0px" ><i class="el-icon-upload" style="color:#36B9FF"></i>{{item.number}}人已生成此证书</p>
            </div>
            <div class="time-btn">
                <p style="color:#666666;">获得时间:{{item.time}}</p>
                <el-button type="primary" style="font-size:14px;background-color:#36B9FF;border:none" @click="downloadCertification">生成此证书</el-button>
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
            typename:'XX大学学术型硕士学位证书',
            number:'1566'
          },{
            time:'2020-6-28',
            typename:'XX大学专业型硕士学位证书',
            number:'1566'
          },
          ]
        }
    },
    methods:{
              downloadCertification(){
        this.$axios({
          url:'/user/downloadCertification',
          method:'get',
          data:{    //这里是发送给后台的数据
            certificationId:1
          }
      }).then((response) =>{ 
          console.log(response);
          let error_code = response.data.error_code;
          
          if(error_code== 0)
          {
              console.log(error_code);
              this.listData=response.data.data.records;
          }
          else
          {
              let msg=response.data.msg;
              console.log(msg);
              this.$message.error(msg);
          }   

      }).catch((error) =>{
          console.log(error)       //请求失败返回的数据
      }) 
}
    }
}
</script>

<style>

</style>