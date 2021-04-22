<template>
  <div>
    <div class="header" style="justify-content: space-around;">
      <div class="logo">
        <img src="../../assets/home_logo.png" />
      </div>
      <nav-bar></nav-bar>
      <div class="user">
        <div class="ava">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div class="user-btn">
          <el-button type="text" style="padding-bottom:2px;">{{userName}}</el-button>
          <el-button size="mini" style="margin-bottom:2px;padding-top:4px;padding-bottom:4px" round>权威机构</el-button>
        </div>
      </div>
    </div>
      <div class="container1">
        <div class="page">
            <div class="title">
              <p>上传证书</p>
            </div>
            <div class="tip">
              <p style="padding-left:60px">请选择模板</p>
             
            </div>
            <!-- <div class="image"> -->
                <div class="upload">
                  <el-upload
                    ref="upload"
                    action="http://59.77.134.155:8080/file/multiUpload"
                    list-type="picture-card"
                    :auto-upload="false"
                    :on-change="handleChange"
                    :on-remove="handleRemove"
                    :file-list="fileList"

                    :http-request="uploadFile"
                    multiple
                    accept=".pdf,.PDF">
                      <i slot="default" class="el-icon-plus" style="color:#BCBCBC"></i>
                      
                      <div slot="file" slot-scope="{file}">
                        <div class="logo-pdf">
                          <img
                            class="el-upload-list__item-thumbnail"
                            src="../../assets/pdf.png"
                          >
                        </div>
                        <span class="el-upload-list__item-actions" style="padding-top:50px">
                          <span
                            class="el-upload-list__item-preview"
                            @click="handlePictureCardPreview(file)"
                          >
                            <i class="el-icon-zoom-in"></i>
                          </span>

                          <span
                            v-if="!disabled"
                            class="el-upload-list__item-delete"
                            @click="handleRemove(file)"
                          >
                            <i class="el-icon-delete"></i>
                            
                          </span>
                          <div  class="template-name" :v-if="fileList.length==1">默认模板</div>
                          <!-- <div  class="template-name" :v-else="fileList.length>1" >{{自定义模板+fileList.length}}</div> -->
                          
                        </span>
                        
                        
                      </div>
                      
                  </el-upload>
                  <!-- <el-dialog :visible.sync="dialogVisible" :modal-append-to-body='false'>
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog> -->
                <!-- </div> -->
            </div>
            <div class="btn">
                <el-button @click="uploadTemplate" type="primary"  plain>上传模板</el-button>
            </div> 
            <div class="tip">
              <p style="padding-left:60px">上传证书文件信息</p>
              <p style="color:#999999; font-size:14px;padding-left:60px">只能上传.xlsx文件，且不超过100MB</p>
            </div>

            <div class="upload-info">
              <!-- <el-button size="small" type="primary" @click="uploadExcel"
              
              
              
              >点击上传文件</el-button> -->
              <el-upload
                drag
                ref="upload1"
                :auto-upload="false"
                :http-request="uploadFile1"
                class="upload-demo"
                action="http://59.77.134.155:8080/authority/uploadExcel"
                :on-preview="handlePreview1"
                :on-change="handleChange1"
                :on-remove="handleRemove1"
                :before-remove="beforeRemove1"

                accept=".xlsx"
                :limit="3"
                :on-exceed="handleExceed1"
                :file-list="fileList1">
                <i class="el-icon-upload" style="color:#36B9FF;"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击选取文件</em></div>
                
                
              </el-upload>
              
            </div>

            <div class="btn">
              <el-button type="primary" @click="uploadExcel" style="margin-left:0px">上传表格</el-button>
            </div>
            <div class="choose" >

              <el-radio-group v-model="radio" size="medium" fill="#36B9FF"> 
                <el-radio-button label=0>学位学历证书</el-radio-button>
                <el-radio-button label=1>技能类证书</el-radio-button>
                <el-radio-button label=2>职业资格证书</el-radio-button>
                <el-radio-button label=3>语言类证书</el-radio-button>
                <el-radio-button label=4>其他证书</el-radio-button>
              </el-radio-group>
            </div>
              <div class="btn">
                <el-button @click="uploadToChain" type="primary" style="width:30%" plain >证书上链</el-button>
              </div> 
          </div>
        </div>
        <el-dialog
          :visible.sync="centerDialogVisible"
          width="30%"
          :modal-append-to-body='false'
          :show-close='false'
          center>
          <el-progress type="circle" :percentage="nuw" color="#36B9FF" :stroke-width="15"></el-progress>
          <span slot="footer" class="dialog-footer">
              <el-button class="primary">取消上传</el-button>
          </span>
        </el-dialog>
  </div>
  
</template>

<script>
import NavBar from '../../components/NavBar.vue'
export default {
  components: { NavBar },
  data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        radio: '-1',
        centerDialogVisible: false,
        fileData:'',
        fileData1:'',
        excelData:'',
        certificationType:'',
        fileList: [
          // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          //  },
                  
          ],
        uploadData: {
          fieldData: {
          }
        },
        nuw:0,
        template:[],
        certificationIdList:[38],
        fileList1:[], //[{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        userName:this.Common.userName,

      };    

    },

  methods: {
    handleRemove(file,fileList){
      this.fileList = fileList;
    },
    handlePictureCardPreview(file) {
      window.open(file.url);
      // this.dialogImageUrl = file.url;
      // this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    // 上传/上链的进度条
    startProgress(){
      this.centerDialogVisible = true;
      this.nuw=0;
      // console.log(this.nuw);
      let that=this;
      var timer=setInterval(()=>{
        that.nuw++;
      // console.log(that.nuw);
        if(that.nuw>=100){
          clearInterval(timer);
        } },2)
      },
    // 取消上传
    cancel(){
    },
    //选取文件
    uploadFile(file) {
      this.fileData.append('files', file.file);  // append增加数据
    },
    uploadFile1(file) {
      this.fileData1.append('files', file.file);  // append增加数据
    },

    //上传模板到服务器
    uploadTemplate() {
      
      // if (this.radio == -1) {
      //     this.$message({
      //         message: '请选择证书类型',
      //         type: 'warning'
      //     })
      // } 
      // else 
      if (this.fileList.length === 0) {
          this.$message({
              message: '请先选择文件',
              type: 'warning'
          })
      } else {
          const isLt100M = this.fileList.every(file => file.size / 1024 / 1024 < 100);
          if (!isLt100M) {
              this.$message.error('请检查，上传文件大小不能超过100MB!');
          } else {
              this.startProgress();
              this.fileData = new FormData();  // new formData对象
              this.$refs.upload.submit();  // 提交调用uploadFile函数
            
              this.$axios.post("/file/multiUpload", this.fileData).then((response) => {
                // console.log(response);
                // console.log(response.data.error_code);
                  if (response.data.error_code == 0 ) {
                    let that = this;
                    setTimeout(function (){
                      that.$message({
                          message: "上传成功",
                          type: 'success'
                      });
                    },2000);
                    //获得模板

                      this.getTemplate();
                      // this.fileList = [];
                      //this.fileUuidList=response.data.data.fileUuidList;
                      // this.chainData = new FormData();
                      // this.chainData.append('fileUuidList',response.data.data.fileUuidList)
                     
                      // console.log(this.chainData.get('fileUuidList'));
                  } else {
                      this.$message({
                          message:"上传失败",
                          type: 'error'
                      })
                  }
              });
          }
      }
    },
    //获得模板
    getTemplate(){
      this.$axios.get("/authority/getTemplate", this.fileData).then((response) => {
        // console.log(response);
  
          if (response.data.error_code == 0 ) {
            this.template=response.data.data;
            //console.log(this.template);
          } else {
              this.$message({
                  message:"失败",
                  type: 'error'
              })
          }
      });
    },

    handleChange(file, fileList) {
      let existFile = fileList.slice(0, fileList.length - 1).find(f => f.name === file.name);
      if (existFile) {
          this.$message.error('当前文件已经存在!');
          fileList.pop();
      }
      this.fileList = fileList;
    },
    handleChange1(file, fileList) {
      let existFile = fileList.slice(0, fileList.length - 1).find(f => f.name === file.name);
      if (existFile) {
          this.$message.error('当前文件已经存在!');
          fileList.pop();
      }
      this.fileList1 = fileList;
    },
    
    uploadToChain(){

    this.startProgress();
                     setTimeout(function (){
          this.$message({
              message: "证书上链成功！",
              type: 'success'
          })
        },1000);
    // this.$axios({
    //   url:'/uploadToChain',
    //   method:'post',
    //   data:{
    //     certificationIdList:this.certificationIdList
    //   }
    // }).then((response) =>{          //这里使用了ES6的语法
         
    //      console.log(response);

    //     // console.log(response.data.error_code);
    //   if (response.data.error_code == 0) {
    //     setTimeout(function (){
    //       this.$message({
    //           message: "证书上链成功！",
    //           type: 'success'
    //       })
    //     },1000);


    //   } else {
    //       this.$message({
    //           message:response.data.msg+",无上链权限！",
    //           type: 'error'
    //       })
    //     }
    // });
      this.clearData();
    },
    clearData(){
      this.fileUuidList='';
      this.certificationType='';
      this.domainList='';
      
      this.uploadTitle="文件上传中";
    },
    handleRemove1(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview1(file) {
        console.log(file);
      },
      handleExceed1(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove1(file, fileList) {
        console.log(fileList);
        return this.$confirm(`确定移除 ${ file.name }？`);
        
      },
      uploadExcel(){
        if(this.certificationType == -1)
        {
          this.$message({
              message: '请先选择证书类型',
              type: 'warning'
          })
        }
        else {
          this.startProgress();
          this.certificationType=this.radio;  // 添加证书类型
          this.fileData1 = new FormData();

          this.$refs.upload1.submit();
          this.fileData1.append('certificationType',this.certificationType);
          this.fileData1.append('templateDiskName',"default.docx");
          this.$axios.post("/authority/uploadExcel", this.fileData1).then((response) => {
          console.log(response);
          // console.log(response.data.error_code);
            if (response.data.error_code == 0 ) {
              let that = this;
              setTimeout(function (){
                that.$message({
                    message: "上传成功",
                    type: 'success'
                });
              },2000);
              // this.certificationId.push(response.data.data.certificationId);
              // console.log(this.certificationId);
              // this.fileList1 = [];

            } else {
                this.$message({
                    message:response.data.msg+",上传失败",
                    type: 'error'
                })
            }
        });
      }
    },

  }}
</script>

<style>
.el-dialog{
  top:20%;
}
.el-dialog__body{
  display: flex;
  justify-content: center;
  align-items: center;
}

.template-name{
  color: white;
  font-size: 12px;
}

.logo
{
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.el-upload-list--picture-card > .el-upload-list__item{
box-shadow: 0px 2px 14px 1px rgba(188, 188, 188, 1);
border: 1px solid rgba(188, 188, 188, 1);
}

.el-upload--picture-card{
box-shadow: 0px 2px 14px 1px rgba(188, 188, 188, 1);
border: 1px solid rgba(188, 188, 188, 1);
}

.ava{
  display: flex;
  justify-content: center;
  align-items: center;
}

.choose{
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.container1
{
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #F7F9FB;
}

.user{
  display: flex;
}

.user-btn{
  display: flex;
  flex-direction: column;

}

.header{
  display: flex;

  align-content: center;
  box-shadow: 0px 1px 3px 0px rgba(86, 186, 240, 5);
}

.el-button--primary{
  background-color: #36B9FF;
  border-color: #36B9FF;
}

.el-button--primary:hover{
  background-color: #36B9FF;
  border-color: #36B9FF;
  opacity: 0.8;
}

.title{
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 24px;
  margin-top: 50px;
}

.logo-pdf{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.page{
  width: 60%;
  height: 80%;
  margin-top: 40px;
  border: 1px solid rgba(222, 222, 222, 53);
  box-shadow: 0px 1px 1px 0px rgba(86, 186, 240, 5);
}

.upload
{
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 80px;
}

.upload-info
{
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 30px;

}

.btn{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
}

.el-radio-button--medium {
  box-shadow: 0px 1px 6px 1px rgba(50, 189, 254, 0.41);
  border-radius: 3px;
}


</style>