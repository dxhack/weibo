<template>
    <router-view></router-view>
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
