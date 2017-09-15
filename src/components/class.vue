<template>
  <div class="hello">
    <h1>{{ $route.params.id }}</h1>
    <h2>
    </h2>
    <h2 @click="loaddata">这是班级{{$route.params.id}}</h2>
    <h2>
     id:{{data.id}}<br>
     name:{{data.name}}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
       data:{}
    }
  },
  beforeRouteUpdate(to,from,next){
      next(true);
     this.loaddata();
     
  },
  methods:{
      loaddata(){
          var classid = this.$route.params.id;
          this.$http.get('/test_api?id='+classid).then(function(rs){
              console.log(rs.body);
              this.data = rs.body;
          },function(response){
          });
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
