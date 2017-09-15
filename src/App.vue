<template>

    <router-view></router-view>

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
            <router-link to="/Posting" class="fatie">+</router-link>
          </button>
        </li>
        <li>
          <button>
            <router-link to="/Hello">发现</router-link>
          </button>
        </li>
        <li>
          <button>
            <router-link to="/Friend">我</router-link>
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
    return{

    }

  },
  methods:{
      toHello(){
        this.$router.push("/hello");
      },
      toNew(){
        this.$router.push("/new");
      }
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
  margin-top: 60px;
}
body{
  margin:0px;
}
.mint-cell-value{
    padding-right:30% !important;
    z-index:999;
    text-align:center !important;
}
.mint-cell-title{
        /*padding-left:20px;*/
}
.mint-cell-text{
  /*padding-left:20px;*/
}
.mint-cell-wrapper{
  /*padding-left:20px;*/
}
.mt-cell-title{
  margin-left:80px;
}
</style>
