<template >
    <div>
        <div class="headcentent">
            
           
           <p class='left'><a href='javascript:void(0)' @click='gohome'>J</a> </p> 
                 
          <p class="right">蔡依林--jolin</p> 
        
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'mhead',
    data:function(){
        return{

        }
    },
    methods:{
        gohome:function(){
            console.log('nihao')
        }
    }
    
}
</script  >
<style  scoped>
a{
  text-decoration: none;

}
div {

    opacity: 0.5;
    width: 100%;
    height: 220px;
    background-color: pink ;
    }
 .headcentent{
     margin: 0 auto;
     height: 220px;
     width: 80%;
 }   
 
   
.right{
    display: block;
    line-height: 220px;
     float: right;
     font-size: 150px ;
     text-align: center;
     color: red;
    
}  
.left{
   display: inline;
   height: 220px;
   width: 220px;
   float: left;
   font-size: 180px;
   background-color: #fff;
   border-radius: 50%;
   text-align: center;
 }  
  
</style>
    
