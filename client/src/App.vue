<template>
  <div id="app">
    <header>
      <appNavbar></appNavbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
export default {
  name: 'app',
  components:{
    appNavbar : navbar
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #FFFFFF;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 30px;
  height: 56px;
  padding: 0 16px 0 24px;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
