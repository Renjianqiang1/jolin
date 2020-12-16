<template >
    <div>
         <mhead></mhead>

        <navv></navv>
       <div class="bcent">
           <div class="bleft">
               <ul>
                   <li v-for= '( d,i) in listtb ' :key='i' >{{d}}</li>
               </ul>
           </div>
           <div class="bright">
               <div ></div>
           </div>
       </div>
            
            
       
     
            
      <fd></fd>
    </div>
</template>
<script>
import navv from '../navv'
import mhead from '../mhead'
import fd from '../fd' 
import bodyr from '../bodyr'
export default {
      components: { mhead ,fd, bodyr,navv},
      name:'music',
     data:function(){
        return{
            listtb:['倒带','看我72变','大艺术家','说爱你','布拉格广场','MR.Q','柠檬草的味道','日不落','倒带','爱情36计','心型圈','招牌动作','电话皇后','我','就是爱']

        }
    },
    methods:{
        gohome:function(){
            console.log('nihao')
        }
    }
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
    width: 20%;


}
.bleft ul li{
    height: 30px;
    width: 100%;
    padding-top: 10px;
    border: 1px, red;
}
.bleft ul li:hover {
    background-color: #fff;
}
.bleft ul{
    position: relative;
    padding-left: 8px;
}
.bleft ul li::after{
    content: '>';
    position: absolute;
    right: 8px;
    
    color: azure;

}

.bright{
    float:right;
    width: 80%;
    background-color: rgb(60, 41, 105);
}
</style>

