<template>
   <div>
    <mt-header title="主页" class="header">
    <router-link to="/hello" slot="left">
        <mt-button icon="back" >返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right" @click="popupVisible=true"></mt-button>
    </mt-header>
        <mt-popup v-model="popupVisible" position="bottom" class="lll" >
                <mt-header title="发评论"  class="header">
                    <mt-button icon="back" slot="left" @click="popupVisible=false">取消</mt-button>
                    <mt-button  slot="right">发送</mt-button>
                </mt-header>
                <mt-field placeholder="写评论" type="textarea" rows="4" v-model="introduction"></mt-field>

        </mt-popup>
        
    </div>
</template>

<script>
export default {
  name: 'comment',
  data () {
    return {
        introduction:'',
        popupVisible:false,
        rangeValue:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        background-color:rgba(38,126,225,0.4) !important;
    }
    .lll{
        height:100%;
        width:100%;
    }
    .aaa{
        width:200px;
        height:40px;
    }
</style>
-----------------------分享代码--------------------

//                   _ooOoo_
//                  o8888888o
//                  88" . "88
//                  (| -_- |)
//                  O\  =  /O
//               ____/`---'\____
//             .'  \\|     |//  `.
//            /  \\|||  :  |||//  \
//           /  _||||| -:- |||||-  \
//           |   | \\\  -  /// |   |
//           | \_|  ''\---/''  |   |
//           \  .-\__  `-`  ___/-. /
//         ___`. .'  /--.--\  `. . __
//      ."" '<  `.___\_<|>_/___.'  >'"".
//     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//     \  \ `-.   \_ __\ /__ _/   .-` /  /
//======`-.____`-.___\_____/___.-`____.-'======
//                   `=---='  
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//         佛祖保佑       永无BUG
//  本模块已经经过开光处理，绝无可能再产生bug
