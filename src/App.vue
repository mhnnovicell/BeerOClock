<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>

      <img src="./assets/logo.svg" alt="Vue.js PWA">
      <router-view></router-view>
      <span>{{ new Date() | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</span>
      <span>{{ new Date() | moment("calendar") }}</span>

<span>{{ [-10, 'minutes'] | duration('humanize', true) }}</span>
<span>{{ [2, 'years'] | duration('add', 1, 'year') | duration('humanize') }}</span>
<!-- e.g. "7/10/2011" -->
    </main>
    <footer>
      <img src="./assets/nzlogo.png">
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
body {
  margin: 0;
  animation: colorchange 30s infinte;
  /* animation-name followed by duration in seconds*/
  /* you could also use milliseconds (ms) or something like 2.5s */
  -webkit-animation: colorchange 30s infinite;
  /* Chrome and Safari */
}

@keyframes colorchange {
  0% {
    background: #13547a;
  }
  25% {
    background: #80d0c7;
  }
  50% {
    background: #f6d365;
  }
  75% {
    background: #fda085;
  }
  100% {
    background: #ff5858;
  }
}

@-webkit-keyframes colorchange
  /* Safari and Chrome - necessary duplicate */ {
  0% {
    background: #13547a;
  }
  25% {
    background: #80d0c7;
  }
  50% {
    background: #f6d365;
  }
  75% {
    background: #fda085;
  }
  100% {
    background: #ff5858;
  }
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
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>

