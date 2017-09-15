<template>
   <div class="beijing">
    
   <mt-header title="基本信息">
             <mt-button icon="back" slot="left"></mt-button>
        <mt-button  slot="right" @click="popupVisible=true">设置</mt-button>
   </mt-header>


        <div class="top">
        <mt-cell title="登录名" is-link value="13864291005" ></mt-cell>
        <mt-cell title="昵称" is-link value="旧城失词VIP" ></mt-cell>
        <mt-cell title="性别" is-link value="男"></mt-cell>
        <mt-cell title="所在地" is-link value="山东 青岛"></mt-cell>
        <mt-cell title="简介" is-link value="介绍下自己"></mt-cell>
        </div>


        <div class="toptwo">
           <mt-cell v-for="" title="添加工作信息"/>
        </div>
        <div class="topthree">
           <mt-cell v-for="" title="添加教育信息"/>
        </div>



         <div class="topfour">
            <mt-cell title="生日" is-link value="请选择" ></mt-cell>
            <mt-cell title="邮箱" is-link value="请输入邮箱地址" ></mt-cell>
            <mt-cell title="博客" is-link value="请输入博客地址"></mt-cell>
            <mt-cell title="QQ" is-link value="请输入QQ号"></mt-cell>
        </div>
        

         <div class="toptwo">
           <mt-cell title="微博等级" is-link value="Lv9" ></mt-cell>
        </div>
        <div class="topthree">
            <mt-cell title="信用积分" is-link value="80" ></mt-cell>
            <mt-cell title="注册时间" is-link value="2015-03-27" ></mt-cell>
        </div>

     
    <mt-popup v-model="popupVisible" position="bottom" class="lll">
        <mt-header title="登陆">
            <mt-button icon="back" slot="left" @click="popupVisible=false">返回</mt-button>
        
            <mt-button  slot="right">注册</mt-button>
        </mt-header>
    </mt-popup>
         


      </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
        tabselected:"tab2",
        popupVisible:false,
        rangeValue:true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .beijing{
        background:#fafafa;
    }
    .top{
        margin-top:9px;
    }
    .toptwo{
        margin-top:9px;
    }
    .topthree{
        margin-top:9px;
    }
    .topfour{
        margin-top:9px;
    }
    .lll{
        height:100%;
        width:100%;
    }
    .mint-search {
    height: 100%;
    height: 7vh;
   }
   .mint-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: white;
    box-sizing: border-box;
    color: black;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    border-bottom:1px solid #D3D3D3;
}

body{
    background-color: #D3D3D3;
}

.topbar{
    margin-top:10px;
    width:100%;
    height:41px;
    background:white;
    border-bottom:1px solid #D3D3D3;
}
.xian{
    border:1px solid #D3D3D3;
}
.toptwo .mt-cell-title{
  padding-right:80px;
}

</style>



