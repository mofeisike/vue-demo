<template>
    <div class="user">
        <ul>
            <li v-for="(user,index) in users" :key="index"
                v-on:click="user.show = !user.show">
                <h2>{{user.name}}</h2>
                <h3 v-show="user.show">{{user.position}}</h3>
            </li>
        </ul>
        <!--传引用-->
        <button v-on:click="deleteUser">删除</button>
        <img src="" alt="">
    </div>
</template>
<!--
    传值 : string number boolen
    传引用 :  array object
-->
<script>
    export default {
        name: "User",
        //props:["users"],
        // 可以直接使用,下面的是标准使用,确认什么变量,确认是否
        props:{
            users:{
                type:Array,
                required:true
            },
            list:{
                type:Object,
                required:true
            }
        },
        methods:{
            // 传引用
            deleteUser:function () {
                this.users.pop();
            }
        }
    }
</script>

//scoped :域,范围,限制这个样式只在这里使用
<style scoped>
    .user{
        width: 100%;
        min-width: 120px;
        margin: 40px auto;
        padding: 0 100px;
        box-sizing: border-box;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    li{
        flex-grow: 1;
        flex-basis: 200px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
        margin: 10px;
    }

</style>