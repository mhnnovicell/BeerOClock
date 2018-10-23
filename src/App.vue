<template>
  <div id="app">
    <main>
      <h1 class="main-headline">BeerOClock</h1>
      <router-view></router-view>
    </main>
    <footer>
      <img src="./assets/nzlogo.png" alt="nozebralogo" class="footerlogo">
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Lato|Montserrat|Pacifico');

  html {
    font-size: 1rem;
    color: white;
  }


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
  /* Safari and Chrome - necessary duplicate */

  {
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }


  .footerlogo {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 5vw;
  }

  .bodylogo {
    width: 50vw;
  }

  .time-unite-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    line-height: normal;
    text-align: center;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.5rem;
  }

  .time-unite-value {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    line-height: normal;
    text-align: center;
    font-size: 2rem;
  }

  .main-headline {
    font-family: 'Pacifico', cursive;
    font-size: 4rem;
  }

  .countdown {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

    @media screen and (min-width: 319px) and (max-width: 450px) {
    html {

      font-size: 1.2rem;
    }

     .footerlogo {

    width: 25vw;
  }
  }

  @media screen and (min-width: 767px) and (max-width: 1025px) {
    html {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 1026px) {
    html {
      font-size: 1.6rem;
    }
  }

</style>


