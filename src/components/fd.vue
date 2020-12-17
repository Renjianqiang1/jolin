<template >
    <div class='foodr'>
        <p v-text='food'></p>
    </div>
</template>
<script>
export default {
    name: 'bodyr',
     data:function(){
      return{
          food:'欢迎各位的到来，在这里本人谢谢大家的支持。本网站致力于打造无广告，无收费，无打扰，安全，最大，'+
          '最全的jolin个人网站。还请大家文明浏览，不谈国事，古人云：不是局中人，不辩是与非。'
        
      }
    }
}
</script>
<style scoped>
.foodr {
    box-sizing: border-box;
    /* border-top: 0; */
    text-align: center;
    text-shadow: 3px 2px 5px rgb(226, 182, 182);
    font-size: 20px;
    color: rgba(66, 9, 59,.6);
    padding: 20px 30px;
    /* height: 900px; */
    width: 100%;
    background-color: rgba(236, 177, 227, 0.5);
    /* position: relative; */
    /* bottom: 0px; */
    /* line-height:  180px; */
     border-width: 1px;
    border-color: rgb(3, 34, 34);
    border-style: solid;
}


</style>