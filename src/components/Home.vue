<template>
    <div id="home">
        <!--传值-->
        <headers v-on:titleChanged="updateTitle($event)" v-bind:titles="titles"></headers>
        <!--传引用-->
        <user v-bind:users="users"></user>
        <!--传值-->
        <footers v-bind:titles="titles"></footers>
    </div>
</template>


<script>
    //局部注册组件
    import User from './User.vue'
    import Header from './Header.vue'
    import Footer from './Footer.vue'

    export default {
        name: 'home',
        data(){
            return{
                users:[
                    {name:"Henry",position:"Web开发",show:true},
                    {name:"Bucky",position:"Java开发",show:false},
                    {name:"Emily",position:"Python开发",show:false}
                ],
                titles:"传递是一个值,(numerrb string boolen)"
            }
        },
        components:{
            "user":User,
            "headers":Header,
            "footers":Footer,
        },
        methods:{
            updateTitle(titles) {
                this.titles = titles;
            }
        }
    }
</script>

<style>
</style>
