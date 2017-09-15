<template>
   <div class="posting">
        <mt-header title="发微博" style="color:black">
            <router-link to="/hello" slot="left">
                <mt-button style="color:black;margin-left:15px;">取消</mt-button>               
            </router-link>
            <router-link to="/hello" slot="right">
                <mt-button style="" class="send">发送</mt-button>
            </router-link>
        </mt-header>

            <textarea id="read" class="read"></textarea>

    </div>
</template>

<script>
export default {
  name: 'Posting',
  data () {
    return {
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
        margin:0;
        padding:0;
    }
   .mint-header{
       background-color:#eee;
   }
   #app{
       position:relative;
   }
   .read{
       position:absolute;
       top:40px;
       bottom:50px;
       left:0;
       width:100%;
       border:0;
   }
   .send{
        margin-right:15px;
   }
</style>
