<template>
  <div id="app">
    <a href="#" @click="$router.push('/')"><img src="./assets/sw.png" style="width:50%"></a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body {
  background-color: black;
  color:antiquewhite;
}

a, a:visited {
  color: yellowgreen;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 20px;
}
</style>
