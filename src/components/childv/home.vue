<template >
    <div >
      <mhead></mhead>
       <navv></navv>
       <img src="/static/homejolin.jpeg" alt="jolin" >
         <div class="abstract" v-html="jolin"></div>   
        
<p class="text-center">Center aligned text.</p>

      <fd></fd>

    </div>
</template>
<script>
import mhead from '@/components/mhead'
import fd from '@/components/fd' 
import navv from '@/components/navv'

export default {
  components: { mhead ,fd ,navv},
    name:'home',
    data:function(){
      return{
        jolin:'<h1>蔡依林</h1><br>1980年9月15日（农历八月初七）中国台湾省新北市新庄区中国蔡依林（Jolin Tsai），<br/>'+
        '本名蔡依翎，曾用名蔡宜凌 ，1980年9月15日出生于中国台湾省新北市，祖籍福建泉州 ，华语流行乐女歌手、舞者、服装设计师 。<br/>'+
        '1998年参加MTV音乐台举办的“新生卡位战”音乐比赛并夺得冠军。<br/>'+
        '1999年7月发行个人首支单曲EP《和世界做邻居》，并从此开启演唱生涯；同年9月发行个人首张专辑《Jolin 1019》正式出道 。<br/>'+
        '2001年获得MTV音乐录影带大奖台湾观众选择奖，隔年以“Mando-Pop”身份登上《商业周刊》美国版正刊封面。<br/>'+
        '2002年发表个人转型复出之作《骑士精神》。<br/>'+
        '2003年发行专辑《看我72变》 。<br/>'+
        '2004年凭借歌曲《Love Love love》登上荷兰Xtips排行榜冠军 。<br/>'+
        '2005年发行个人第七张普通话专辑《J-game》 ，该专辑在全亚洲销量超过100万张 。<br/>'+
        '2006年推出专辑《舞娘》 ，并凭借该专辑获得第18届台湾金曲奖最佳国语女歌手、MTV亚洲音乐大奖国际时尚艺人奖 。<br/>'+
        '2007年发行专辑《特务J》 。2009年发行专辑《花蝴蝶》 。2010年推出概念专辑《Myself》；同年举行“MYSELF”世界巡回演唱会。2012年发行专辑《MUSE》 ，凭借《大艺术家》获得第24届台湾金曲奖最佳年度歌曲 、提名第19届MTV欧洲音乐录影带大奖最佳亚洲艺人 。2014年发行第13张专辑《呸》，并凭借该专辑获得第26届台湾金曲奖最佳国语专辑奖 。2015年举行蔡依林“Play”世界巡回演唱会  ；同年获得MAMA亚洲最佳艺人奖  。2018年推出暌违乐坛四年的专辑《UGLY BEAUTY》 ，并在次年凭借该专辑获得第30届金曲奖年度专辑奖。 '

        
      }
    }
    
}
</script>
<style scoped>
.abstract{
  height: 800px;
}
 img {
   width: 268px;
   height: 306px;
   float: right;
   padding: 60px 30px;
 }   
</style>