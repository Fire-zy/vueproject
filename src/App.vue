<!--是项目主组件，也是项目所有组件和路由的出口，
之后它会被渲染到项目根目录的 index.html 中显示出来，
我们可以在这里写一些适合全局的css样式。-->
<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user">User</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="less">
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
