<template>
    <div class="header" @click="changeTitle">
        <h1>{{title}}</h1>
        <!--传值-->
        <h2>{{titles}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props:{
            titles:{
                type:String
            }
        },
        data() {
            return {
                title:"Vue.js Demo"
            }
        },
        // 传值
        methods:{
            changeTitle:function () {
                //this.titles = "change"
                this.$emit("titleChanged","子向父组件传值");
            }
        },
    }
</script>

<style scoped>
    .header{
        background: lightgreen;
        padding: 10px;
    }
    h1{
        color: #222;
        text-align: center;
    }
    h2{
        color: #222;
        text-align: center;
    }
</style>