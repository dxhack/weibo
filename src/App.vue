<template>
  <div id="app">
    <router-view></router-view>
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