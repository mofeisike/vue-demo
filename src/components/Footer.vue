<template>
    <div class="footer">
        <h1>{{copyright}}</h1>
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
                copyright:"Copyright 2017 Vue Demo"
            }
        }
    }
</script>

<style scoped>
    .footer{
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