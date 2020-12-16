<template >
    <div>
      <mhead></mhead>
       <navv></navv>
            
        <bodyr></bodyr>    



      <fd></fd>

    </div>
</template>
<script>
import mhead from '../mhead'
import fd from '../fd' 
import navv from '../navv'
import bodyr from '../bodyr';

export default {
  components: { mhead ,fd ,navv,bodyr},
    name:'home',
    data:function(){
      return{
        
      }
    }
    
}
</script>
<style scoped>

    
</style>