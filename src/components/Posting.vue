<template>
   <div class="posting">
        <mt-header title="发微博">
            <router-link to="/hello" slot="left">
                <mt-button icon="back" >取消</mt-button>               
            </router-link>
            <router-link to="/hello" slot="right">
                <mt-button @click="popupVisible=true">发送</mt-button>
            </router-link>
        </mt-header>

    </div>
</template>

<script>
export default {
  name: 'Posting',
  data () {
    return {
        popupVisible:false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
</style>
