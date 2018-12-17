<style src="../static/css/app.css" lang="css"></style>
<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <img src="../static/img/nzlogo.png" alt="nozebralogo" class="footerlogo">
    </footer>
  </div>
</template>

<script>
import Timer from "./components/Timer";
export default {
  name: "app",

  components: {
    Timer
  }
};
</script>