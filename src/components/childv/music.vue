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

           <div class='bright'>
          <p>mihao </p>
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
            listtb:['倒带','看我72变','消极掰','大艺术家','说爱你','布拉格广场','MR.Q'+
            '柠檬草的味道','日不落','倒带','爱情36计','心型圈','招牌动作','电话皇后','我','就是爱'+
           '倒带','看我72变','消极掰','大艺术家','说爱你','布拉格广场','MR.Q']

            
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

.bleft{
    height: 900px;
    float: left;
    background-color: rgb(74, 19, 177);
    width: 20%;
    overflow: auto;


}
.bleft ul li{
    height: 30px;
    width: 100%;
    padding-top: 10px;
    padding-left: 8px;
}
.bleft ul li:hover {
    background-color: #fff;
}
.bleft ul{
    position: relative;
    
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
    height: 900px;
    background-color: rgba(60, 41, 105,.4);
    overflow: auto;
     /* border-width: 1px;
    border-color: rgb(31, 182, 182);
    border-style: solid; */
}





</style>

