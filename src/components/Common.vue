<script>
    
  export default {

    userName:'某某某某',
    userType:0,
    token:String,
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