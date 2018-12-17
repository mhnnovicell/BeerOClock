<template>
  <div class="hello">
    <countdown></countdown>
  </div>
</template>

<script>
import Countdown from "./Countdown.vue";
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js PWA"
    };
  },

  components: {
    Countdown
  }
};
</script>
