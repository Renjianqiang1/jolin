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
            <router-link  to='/home'>首页</router-link>
            <router-link active-class="navli" to='/music'>音乐</router-link>
            <router-link active-class="navli" to='/videor'>视频</router-link>
             <router-link active-class="navli" to='/mv'>演唱会</router-link>
             <router-link active-class="navli" to='/login'>登录</router-link>



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
background-color: rgba(230, 133, 116,.5);

}
a{
    text-decoration: none;
    color: rgb(168, 19, 89,);

}
.nav{
    height: 70px;
    width: 80%;
    opacity: 0.5;
    /* background-color: #ccc; */
    margin: auto;

}






.nav a:hover{
    background-color: #888;

}
.nav a{
    display: inline-block;
    height: 70px;
    font-size: 25px;
    font-weight: 300px;
    text-align: center;
    line-height: 70px;
    padding-left:80px ;  
    padding-right: 80px;


}
</style>
    
