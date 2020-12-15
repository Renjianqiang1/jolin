<template >
    <div>
      <div class="nav">
        <ul>
            <li><a href="javascript:void(0)">主页</a> </li>
            <li><a href="javascript:void(0)">音乐</a> </li>
            <li><a href="javascript:void(0)">mv</a> </li>
            <li><a href="javascript:void(0)">演唱会</a> </li>
            <li><a href="javascript:void(0)">登录</a> </li>
        </ul>
       </div >
       <div class="bcent">
           <div class="bleft">lllllll</div>
           <div class="bright">rrrrrrr</div>
       </div>

    </div>
</template>
<script>
export default {
    name: 'bodyr'
}
</script>
<style scoped>
div {
height: 700px;

}
a{
    text-decoration: none;
    color: rgb(168, 19, 89);

}
.nav{
    height: 80px;
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
.bleft{
    float: left;
    background-color: rgb(74, 19, 177);

}
.bright{
    float:right;
}
</style>


