<!--是项目主组件，也是项目所有组件和路由的出口，
之后它会被渲染到项目根目录的 index.html 中显示出来，
我们可以在这里写一些适合全局的css样式。-->
<template>
  <div>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
}
</style>
