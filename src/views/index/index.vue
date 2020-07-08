<!-- 首页 -->
<template>
  <div class="index-wrap">
    <nav_top></nav_top>
    <div class="index-content">
      <nav_left></nav_left>
      <nav_right></nav_right>
    </div>
  </div>
</template>

<script>
import nav_top from './top.vue'
import nav_left from './left.vue'
import nav_right from './right.vue'
export default {
  components:{
    nav_top,
    nav_left,
    nav_right
  },
  data() {
    return {
    
    }
  },
  created:function(){

  },
  
}
</script>

<style>
.index-wrap{
  position: relative;
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
}
.index-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 60px);
}
</style>