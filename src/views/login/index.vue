<template>
    <div>
        <!-- 背景图 -->
        <img class="bg-img" src="../../assets/login_bg.png" />
        <div class="container">
            <div class="mask">
                <!-- 左边的图片 -->
                <div class="left">
                    <div class="img-1">
                        <img src="../../assets/img_1.png" />
                    </div>
                    <div class="big-lb">
                        <img style="width:80px" src="../../assets/logo.png" />
                        <p>云链认证—您身边的证书管家</p>
                    </div>
                    <div class="small-lb">
                        <p> 基于 Vnt Chain 的去中心化区块链证书认证管理平台</p>
                        <p> 在数据上链、链上验证等过程中所有节点参与验证，最大限度地杜绝造假的可能性并提高隐私保护</p>
                    </div>
                </div>

                <div class="right">
                    <router-view></router-view>
                </div>
            </div>
                
        </div>   
    </div>
</template>

<script>
	export default{
		components: {
			
		},
		data(){
			return{
                
            }
		}
	}
</script>

<style scoped>

 .login-box
{
    position: relative;
    left: 15%;
    top: -10%;

    border-radius: 20px;
    background-color: rgba(255, 255, 255, 100);
    color: rgba(16, 16, 16, 100);
    font-size: 14px;
    text-align: center;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.4);
    font-family: Roboto;
    border: 1px solid rgba(255, 255, 255, 100);
} 

.left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

}

.right{
    width: 460px;

}

/* 背景图 */
.bg-img
{
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* 灰色阴影 */
.mask
{
    display: flex;
    flex-direction: row;
    /* width: 100%;
    height: 90%; */
    height: 450px;
    border-radius: 20px;
    text-align: center;
    background-color: rgba(204, 224, 232, 0.7);
    justify-content: center;
    /* align-items: center; */
}

/* 人的图片 */


.img-1 img{
    width: 250px;
    height: 220px;
}

.big-lb{
    display: flex;
    height: 80px;
    justify-content: flex-end;
}
.big-lb p
{
    /* position: absolute;
    top: 60%;
    right: 0%; */
    color: #545252;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 46px;
    font-size: 2.2rem;
}

.small-lb p
{
    /* position: absolute;
    top: 75%;
    right: 0%; */

    color: #545252;
    margin-top: 10px;
    margin-bottom:0;
    text-align: end;
    font-size: 16px;
    font-size: 1rem;
}

/* gird */
.container
{
    /* width: 80%; */
    /* height: 100%; */
    margin-top: 15%;
    margin-left: 10%;
    margin-right: 10%;
    padding: 0;
}

@media screen and (max-width:1080px)
{
    .container
    {
        width: 90%;
        margin: auto 5%;
    }
}

@media screen and (max-width:768px)
{
    .container
    {
        width: 100%;
        margin: 0;
    }
}

</style>