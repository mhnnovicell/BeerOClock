<template>
  <div
    v-if="days <= '0' &&  hours <= '0' && minutes <= '0' && seconds <= '0' || beertime == 'true'"
  >
    <h1 class="main-headline blink_me">Beer'O'Clock</h1>
    <div v-if="summermonth === true">
      <p class="edition-text blink_me">Summer Edition</p>
      <vue-particles
        color="#dedede"
        :particleOpacity="1"
        :particlesNumber="15"
        shapeType="image"
        :shapeOptions="{
          image: {
            src: '../../static/img/drink.png',
            width: 64,
            height: 64
          }
        }"
        :particleSize="30"
        linesColor="#333333"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="50"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="none"
        :clickEffect="true"
        clickMode="repulse"
      ></vue-particles>

      <vue-particles
        color="#dedede"
        :particleOpacity="1"
        :particlesNumber="15"
        shapeType="image"
        :shapeOptions="{
          image: {
            src: '../../static/img/sunny.png',
            width: 64,
            height: 64
          }
        }"
        :particleSize="30"
        linesColor="#333333"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="none"
        :clickEffect="true"
        clickMode="repulse"
      ></vue-particles>
    </div>

    <div v-if="springmonth === true">
      <p class="edition-text blink_me">Spring Edition</p>
      <vue-particles
        color="#dedede"
        :particleOpacity="1"
        :particlesNumber="15"
        shapeType="image"
        :shapeOptions="{
          image: {
            src: '../../static/img/flower.png',
            width: 64,
            height: 64
          }
        }"
        :particleSize="30"
        linesColor="#333333"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="50"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="none"
        :clickEffect="true"
        clickMode="repulse"
      ></vue-particles>

      <vue-particles
        color="#dedede"
        :particleOpacity="1"
        :particlesNumber="15"
        shapeType="image"
        :shapeOptions="{
          image: {
            src: '../../static/img/beer.png',
            width: 64,
            height: 64
          }
        }"
        :particleSize="30"
        linesColor="#333333"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="none"
        :clickEffect="true"
        clickMode="repulse"
      ></vue-particles>
    </div>

    <div v-if="autumnmonth === true">
      <p class="edition-text blink_me">Autumn Edition</p>

      <vue-particles
        color="#dedede"
        :particleOpacity="1"
        :particlesNumber="15"
        shapeType="image"
        :shapeOptions="{
          image: {
            src: '../../static/img/leaves.png',
            width: 64,
            height: 64
          }
        }"
        :particleSize="30"
        linesColor="#333333"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="50"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="none"
        :clickEffect="true"
        clickMode="repulse"
      ></vue-particles>

      <vue-particles
        color="#dedede"
        :particleOpacity="1"
        :particlesNumber="15"
        shapeType="image"
        :shapeOptions="{
          image: {
            src: '../../static/img/beer.png',
            width: 64,
            height: 64
          }
        }"
        :particleSize="30"
        linesColor="#333333"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="none"
        :clickEffect="true"
        clickMode="repulse"
      ></vue-particles>
    </div>

    <div v-if="wintermonth === true">
      <p class="edition-text blink_me">Winter Edition</p>

      <vue-particles
        color="#dedede"
        :particleOpacity="1"
        :particlesNumber="15"
        shapeType="image"
        :shapeOptions="{
          image: {
            src: '../../static/img/snowflake.png',
            width: 64,
            height: 64
          }
        }"
        :particleSize="30"
        linesColor="#333333"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="50"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="none"
        :clickEffect="true"
        clickMode="repulse"
      ></vue-particles>

      <vue-particles
        color="#dedede"
        :particleOpacity="1"
        :particlesNumber="15"
        shapeType="image"
        :shapeOptions="{
          image: {
            src: '../../static/img/beer.png',
            width: 64,
            height: 64
          }
        }"
        :particleSize="30"
        linesColor="#333333"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="none"
        :clickEffect="true"
        clickMode="repulse"
      ></vue-particles>
    </div>
  </div>

  <div v-else>
    <h1 class="main-headline">Beer'O'Clock</h1>
    <div class="countdown">
      <div class="time-unite created" v-show="years">
        <div class="time-unite-value">{{ years }}</div>
        <div class="time-unite-title">years</div>
      </div>
      <div class="time-unite created" v-show="months">
        <div class="time-unite-value">{{ months }}</div>
        <div class="time-unite-title">months</div>
      </div>
      <div class="time-unite created" v-show="days">
        <div class="time-unite-value">{{ days }}</div>
        <div class="time-unite-title">days</div>
      </div>
      <div class="time-unite created">
        <div class="time-unite-value">{{ hours }}</div>
        <div class="time-unite-title">hours</div>
      </div>
      <div class="time-unite created">
        <div class="time-unite-value">{{ minutes }}</div>
        <div class="time-unite-title">minutes</div>
      </div>
      <div class="time-unite created">
        <div class="time-unite-value">{{ seconds }}</div>
        <div class="time-unite-title">seconds</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import recur from "moment-recur";
import Vue from "vue";
import VueParticles from "vue-particles";

Vue.use(VueParticles);

var summertimestart;
var summertimeend;
var summertime;

var beertime;
var summermonth;
var wintermonth;
var springmonth;
var autumnmonth;

beertime = moment()
  .startOf("week")
  .day("Friday")
  .hours("15")
  .minutes("00")
  .seconds("00")
  .unix();

// summertimestart = moment([2019, 3, 1]);
// summertimeend = moment([2019, 8, 1]);
// summertime = summertimeend.diff(summertimestart, "months");
// console.log(summertime);

// var duration = moment.duration(summertimeend.diff(summertimestart)).valueOf();

// console.log(duration);

wintermonth = moment().isBetween("2019-12-01", "2020-02-31", "days");

springmonth = moment().isBetween("2019-03-01", "2019-05-31", "days");

summermonth = moment().isBetween("2019-06-01", "2019-08-31", "days");

autumnmonth = moment().isBetween("2019-09-01", "2019-11-31", "days");

export default {
  data() {
    return {
      actualTime: moment().format("X"),
      beertime: beertime,
      summermonth: summermonth,
      wintermonth: wintermonth,
      springmonth: springmonth,
      autumnmonth: autumnmonth,
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  methods: {
    addOneSecondToActualTimeEverySecond() {
      var component = this;
      component.actualTime = moment().format("X");
      setTimeout(function() {
        component.addOneSecondToActualTimeEverySecond();
      }, 1000);
    },
    getDiffInSeconds() {
      return beertime - this.actualTime;
    },

    compute() {
      var duration = moment.duration(this.getDiffInSeconds(), "seconds");
      this.years = duration.years() > 0 ? duration.years() : 0;
      this.months = duration.months() > 0 ? duration.months() : 0;
      this.days = duration.days() > 0 ? duration.days() : 0;
      this.hours = duration.hours() > 0 ? duration.hours() : 0;
      this.minutes = duration.minutes() > 0 ? duration.minutes() : 0;
      this.seconds = duration.seconds() > 0 ? duration.seconds() : 0;
    }
  },
  created() {
    this.compute();
    this.addOneSecondToActualTimeEverySecond();
  },
  watch: {
    actualTime(val, oldVal) {
      this.compute();
    }
  }
};
</script>

