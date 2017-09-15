<template>
  <div class="friend">
  <mt-header title="我的好友">
    <router-link to="/Hello" slot="left">
      <mt-button icon="back">我</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  <ul>
    <li v-for="todo in todos" >
      {{ todo.text }}
    </li>
  </ul>
    </div>
</template>

<script>
export default {
  name: 'friend',
  message:'hello',
  data(){
    return{
           todos: [
            { text: '学习 JavaScript,学习 Vue' },
            { text: '创建激动人心的代码' }
        ]
    }
   
  },
    methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .friend{
        height:100%;
        width:100%;
    }
    .mint-header{
      color:black;
      background:#eeeeee;
    }
</style>
