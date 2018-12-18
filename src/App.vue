<style src="../static/css/app.css" lang="css"></style>
<template>
  <div id="app">
    <main>
      <countdown></countdown>
    </main>
    <footer>
      <img src="../static/img/nzlogo.png" alt="nozebralogo" class="footerlogo">
    </footer>
  </div>
</template>

<script>
import Countdown from "./components/Countdown";
export default {
  name: "app",

  components: {
    Countdown
  }
};
</script>