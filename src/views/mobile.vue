<template>
  <div >
    <div class="head">
        <div class="title2">
            二维码核验结果
        </div>
    </div>
    <div class="logo">
        <img src="../assets/home_logo.png" />

    </div>

    <div class="main">
        <div class="label">
            证书持有者:王小明
        </div>
        <div class="label">
            证书名称:本科毕业证
        </div>
        <div class="label">
            创建时间:2020/05/19/16:07:13
        </div>
        <div class="label">
            存储区块号:12wfw33rgrev
        </div>
        <div class="label">
            存储哈希码:3hg8d28fg28hf92hh29hf9h29hg
        </div>
    </div>
    <div class="res">
        此证书有效！
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.head{
    background-color: #36B9FF;
    height: 64px;
    display: flex;
    justify-content: center;
}

.title2{
    font-size: 18px;
    color: white;
    margin-top:35px
}
.main{
    color: #36B9FF;
    margin-left: 50px;
}
.label{
    margin-top:20px;
    font-size: 14px;
}

.logo{
    display: flex;
    justify-content: center;
    align-content: center;
    margin-left: 85px;
    margin-top: 20px;
}

.res{
    font-size: 24px;
    color: #F86767 ;
    margin-top: 50px;
    margin-left: 50px;
}

</style>