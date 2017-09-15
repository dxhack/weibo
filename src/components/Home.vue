<template>
   <div>
    <mt-header title="主页">
    <router-link to="/hello" slot="left">
        <mt-button icon="back" >返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right" @click="popupVisible=true"></mt-button>
    </mt-header>
        <mt-popup v-model="popupVisible" position="bottom" class="lll" >
                <mt-header title="登陆">
                    <mt-button icon="back" slot="left" @click="popupVisible=false">返回</mt-button>
                </router-link>
                <mt-button  slot="right">注册</mt-button>
                </mt-header>
        </mt-popup>
        <mt-range v-model="rangeValue"></mt-range>
        <mt-range
            v-model="rangeValue"
            :min="0"
            :max="100"
            :step="10"
            :bar-height="5">
        </mt-range>
        <mt-range v-model="rangeValue">
            <div slot="start">0</div>
            <div slot="end">100</div>
        </mt-range>
        <mt-progress :value="60">
            <div slot="start">0%</div>
            <div slot="end">100%</div>
        </mt-progress>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>







    </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
  },
  data () {
    return {
        popupVisible:false,
        rangeValue:true,
         slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lll{
        height:100%;
        width:100%;
    }
    .aaa{
        width:200px;
        height:40px;
    }
</style>
