//cli 用过npm下载的,直接引用vue
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'

//使用中间件,将Vue-router添加到Vue项目
Vue.use(VueRouter)

//路由数组
const router = new VueRouter({
    routes:[
        {path:"/", component:Home},
        {path:"/helloworld", component:HelloWorld}
    ],
    mode:"history"
    //去除链接的#
})

// 将路由数组添加到Vue
new Vue({
    router:router,
    render: h => h(App),
}).$mount('#app')