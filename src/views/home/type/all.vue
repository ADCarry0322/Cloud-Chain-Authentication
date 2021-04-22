<template>
    <div style="width:100%;margin-top:20px">
        <div  v-for="(item,index) in listData" :key="index">
            <div class="list">
            <div class="type">
                <p style="font-size:18px;">{{item.name}}</p>
                <p style="color:#666666;margin-top:0px" ><i class="el-icon-upload" style="color:#36B9FF"></i>123456人已生成此证书</p>
            </div>
            <div class="time-btn">
                <p style="color:#666666;">获得时间:{{item.uploadTime}}</p>
                <el-button type="primary" style="font-size:14px;background-color:#36B9FF;border:none" @click="downloadCertification">生成此证书</el-button>
            </div>
            
            </div>
            <el-divider></el-divider>
        </div>
        <div  v-for="(item,index) in listData1" :key="index">
            <div class="list">
            <div class="type">
                <p style="font-size:18px;">{{item.name}}</p>
                <p style="color:#666666;margin-top:0px" ><i class="el-icon-upload" style="color:#36B9FF"></i>123456人已生成此证书</p>
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
  created(){
    this.$axios({
                url:'/user/certification',
                method:'post',
                data:{    //这里是发送给后台的数据
                  page:1,
                  type:0,
                  limit:3,
                  
                }
            }).then((response) =>{          //这里使用了ES6的语法
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
        
      
  },

    data(){
        return{
        listData1:[            
            {time:'2020-6-28',
            name:'XX大学学术型硕士学位证书',
            number:'1566'
          },{
            time:'2020-6-28',
            name:'XX大学专业型硕士学位证书',
            number:'1566'
          },],
        listData:[
          { name:String,
            certificationId:String,
            authorityPhone: String,
            userName:String,
            userPhone:String,
            userId: String,
            uploadTime:String,
            status:Number ,               // 1是已经上链
            certificationType:Number,
            domain: "[姓名, 身份证号, 项目, 项目2, 项目3, 项目4]",
            info: "姓名:应俊杰,身份证号:123456789,项目:123,项目2:123,项目3:外卖驿站,项目4:自视卷,",
            templateDiskName: String
          }
          // {
            
          //   time:'2020-6-28',
          //   typename:'XX大学学术型硕士学位证书',
          //   number:'1566',
            
          // },
          // {
          //   time:'2019-03-03',
          //   typename:'计算机二级证书',
          //   number:'12576'
          // },
          // {
          //   time:'2002-06-18',
          //   typename:'潜水证书',
          //   number:'1566'
          // },
          // {
          //   time:'2018-07-02',
          //   typename:'会计从业资格证书',
          //   number:'1566'
          // },
          // {
          //   time:'2020-6-28',
          //   typename:'大学英语四级证书',
          //   number:'1566'
          // },
          // {
          //   time:'2020-6-28',
          //   typename:'XXX证书',
          //   number:'1566'
          // },
          // {
          //   time:'2020-6-28',
          //   typename:'XX大学专业型硕士学位证书',
          //   number:'1566'
          // },
          ],
          typeName:["所有证书","学位学历证书","技能类证书","职业资格证书","语言类证书","其他证书"],
          
        }
    },
    methods:{
      downloadCertification(){
//         this.$axios({
//           url:'/user/downloadCertification?certificationId=30',
//           method:'get',
//           // data:{    //这里是发送给后台的数据
            
//           // }
//       }).then((response) =>{ 
//           console.log(response);
//           let error_code = response.data.error_code;
          
//           if(error_code== 0)
//           {
//               console.log(error_code);
//               console.log("开始下载");
//               this.listData=response.data.data.records;
//           }
//           else
//           {
//               let msg=response.data.msg;
//               console.log(msg);
//               this.$message.error(msg);
//           }   

//       }).catch((error) =>{
//           console.log(error)       //请求失败返回的数据
//       }) 
//   }
        window.location.href="http://59.77.134.155:8080/user/downloadCertification?certificationId=30";
      }
    },


}
</script>

<style>
.el-button--primary:hover{
  opacity: 0.8;
}
</style>