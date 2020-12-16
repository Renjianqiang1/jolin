<template >
    <div>
         <div class="nav">
        <!-- <ul>
            <li><a href="/home">主页</a> </li>
            <li><a href="/music">音乐</a> </li>
            <li><a href="/vidio">mv</a> </li>
            <li><a href="mv">演唱会</a> </li>
            <li><a href="/login">登录</a> </li>
        </ul> -->
            <router-link to='/'>首页</router-link>
            <router-link to='/music'>音乐</router-link>
            <router-link to='/video'>视频</router-link>
             <router-link to='/mv'>演唱会</router-link>
             <router-link to='/login'>登录</router-link>



       </div >
    </div>
</template>
<script>
export default {
    name:'navv',
     data:function(){
      return{
        
      }
    }
    
}
</script>
<style scoped>
div {
height: 70px;
background-color: #fff;

}
a{
    text-decoration: none;
    color: rgb(168, 19, 89);

}
.nav{
    height: 70px;
    width: 80%;
    opacity: 0.5;
    /* background-color: #ccc; */
    margin: auto;

}

.nav ul{
    text-align: center;
    border-width: 2px;
    border-color: green;
}
.nav ul li{
    display: inline-block;
    list-style: none;
    line-height: 80px;
    font-size: 25px;

}
.nav ul li:hover{
    background-color: #888;

}
.nav ul li a{
    text-align: center;
    border-width: 2px;
    border-color: green;
    padding-left:80px ;  
    padding-right: 80px;


}
</style>
    
