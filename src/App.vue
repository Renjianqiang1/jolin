<template>
  <div id="app">
    <router-view name ='mhead'/> 
    <router-view name='bodyr' /> 
    <router-view name='fd' /> 

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  padding: 0;
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 background-image: url(../89127.jpg) ;
 background-size:100%;
background-repeat:no-repeat ;
background-attachment: fixed;
 }
</style>
