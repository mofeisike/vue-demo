<template>
  <div id="app">
    <ul>
      <li>a 标签都是要重新加载</li>
      <li><a href="/">Home</a></li>
      <li><a href="/helloworld">HelloWorld</a></li>
      <li>router-link 路由</li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">HelloWorld</router-link></li>
    </ul>
    <p>下面是router-view显示,不同的链接显示不同的视图,就是一个App.Vue包含着几个不同的router-view</p>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>
