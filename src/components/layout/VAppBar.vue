<template>
  <div class="v_app_bar">
    <span>信息</span>
    <span>活动</span>
    <span>星标</span>
  </div>
</template>

<script>
export default {
  name: 'VAppBar',
  data () {
    return {
      item: {}
    }
  }
}
</script>

<style  scoped lang="less">
.v_app_bar {
  color: #fff;
  padding:15px 0;
  display: flex;
  justify-content: space-around;
  background-color: #3f51b5;
}
</style>