<template>
  <div id="app">
    <router-view></router-view>
    <div class="bottom_wei clearfix">
      <ul>
        <li>
          <button>
            <router-link to="/Hello">微博</router-link>
          </button>
        </li>
        <li>
          <button>
            <router-link to="/Hello">消息</router-link>
          </button>
        </li>
        <li>
          <button class="fatie_btn">
            <router-link to="/Hello" class="fatie">+</router-link>
          </button>
        </li>
        <li>
          <button>
            <router-link to="/Hello">发现</router-link>
          </button>
        </li>
        <li>
          <button>
            <router-link to="/Hello">我</router-link>
          </button>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'app',
  data(){
    return {

    }
  },
    methods:{
      loaddata(){
          var classid = this.$route.params.id
          this.$http.get('/test_api?id='+classid).then(function(rs){
              console.log(rs.body);
          },function(response){
          });
      }
  },
  activited(){

  }
}
</script>

<style>
.fatie_btn{
  background-color:orange !important;
}
.fatie{
  font-size:50px;
  line-height:100%;
  color:white;
}

.bottom_wei{
  width:100%;
  position:fixed;
  bottom:0px
}
.clearfix:after{
  content:'';
  height:0;
  clear:both;
  overflow:hidden;
  visibility:hidden;
}
.bottom_wei ul{
  margin:0px;
  height:50px;
  padding:0px;
}
.bottom_wei ul li {

  width:20%;
  height:100%;
  float:left;
  list-style:none;
}
a{
  color:black;
  text-decoration:none
}
.bottom_wei button {
  background-color:rgba(221,221,221,0.5);
  border:none;
  height:100%;
  width:100%;
}
body{
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

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
