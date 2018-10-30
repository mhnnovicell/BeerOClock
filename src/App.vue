<style src="../static/css/app.css" lang="css"></style>

<template>
  <div id="app">
    <main>
      <h1 class="headline">Beer'O'Clock</h1>
      <router-view></router-view>
      <countdown></countdown>
    </main>
    <footer>
      <img src="../static/img/nzlogo.png" alt="nozebralogo" class="footerlogo">
    </footer>
  </div>
</template>

<script>
  import Countdown from './components/Countdown.vue'

  export default {
    name: 'app',
    components: {
      Countdown
    }
  }
</script>