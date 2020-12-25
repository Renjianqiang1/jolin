<template >
    <div>
         <mhead></mhead>
        <navv></navv>
        <div class="bright">
               <div class="show" v-for='(item ,index) in videomass' :key='index' >
                   <img :src='item.url' > 
                    <p v-text="item.conent"></p>

               </div>

           </div>
            
            


            
      <fd></fd>
    </div>
</template>
<script>
import mhead from '@/components/mhead'
import fd from '@/components/fd' 
import navv from '@/components/navv'

export default {
    components: { mhead ,fd ,navv},
     name:'videor',
       data:function(){
        return{
            listtb:['倒带','看我72变','消极掰','大艺术家','说爱你','布拉格广场','MR.Q'+
            '柠檬草的味道','日不落','倒带','爱情36计','心型圈','招牌动作','电话皇后','我','就是爱'+
           '倒带','看我72变','消极掰','大艺术家','说爱你','布拉格广场','MR.Q'],

            videomass:[{url:'/static/b.jpg',conent:'倒带'},{url:'/static/a.jpeg',conent:'看我72变'},
                       {url:'/static/b.jpg',conent:'消极掰'},{url:'/static/a.jpeg',conent:'大艺术家'},
                       {url:'/static/b.jpg',conent:'说爱你'},{url:'/static/a.jpeg',conent:'布拉格广场'},
                       {url:'/static/b.jpg',conent:'MR.Q'},{url:'/static/a.jpeg',conent:'柠檬草的味道'},
                       {url:'/static/b.jpg',conent:'日不漏'},{url:'/static/a.jpeg',conent:'倒带'},
                       {url:'/static/b.jpg',conent:'爱情36计'},{url:'/static/a.jpeg',conent:'心型圈'},
                       {url:'/static/b.jpg',conent:'招牌动作'},{url:'/static/a.jpeg',conent:'电话皇后'},
                       {url:'/static/b.jpg',conent:'我'},{url:'/static/a.jpeg',conent:'说爱你'},
                       {url:'/static/b.jpg',conent:'怪美的'},{url:'/static/a.jpeg',conent:'花蝴蝶'},
                       {url:'/static/a.jpeg',conent:'天空'},{url:'/static/a.jpeg',conent:'爱爱爱'},
                       {url:'/static/a.jpeg',conent:'日不落'}, {url:'/static/b.jpg',conent:'招牌动作'},
                       {url:'/static/a.jpeg',conent:'电话皇后'},{url:'/static/a.jpeg',conent:'日不落'},
                       {url:'/static/b.jpg',conent:'我'},{url:'/static/a.jpeg',conent:'说爱你'},
                       {url:'/static/b.jpg',conent:'怪美的'},{url:'/static/a.jpeg',conent:'花蝴蝶'},
                       {url:'/static/a.jpeg',conent:'天空'},{url:'/static/a.jpeg',conent:'爱爱爱'},
            ]
        }
     }
}
</script>
<style scope>
.show{
    height: 260px;
    width: 150px;
    float: left;
    box-sizing: border-box;
    margin: 8px;
    text-align: center;
}
.show img{
    max-width: 100% ;
}
.show:hover{
    border-width: 1px;
    border-color: rgb(31, 182, 182);
    border-style: solid;
}
.bright{
    /* float:right; */
    margin: auto;
    width: 93%;
    height: 900px;
    background-color: rgba(60, 41, 105,.4);
    overflow: auto;
    
    
}    
</style>