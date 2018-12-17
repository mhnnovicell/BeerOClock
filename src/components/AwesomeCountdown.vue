
<template>
  <div>{{recurrence}}</div>
</template>


<script>
import Vue from "vue";

var start, interval, from, recurrence;

var moment = require("moment");
var recur = require("moment-recur");
start = moment("01/01/2018");
from = moment("01/01/2018");
interval = start
  .recur()
  .every(1)
  .day();

recurrence = moment.recur({
  start: "01/01/2017",
  end: "01/01/2015",
  from: "01/02/2017",
  rules: [{ units: { 2: true }, measure: "days" }],
  exceptions: ["01/05/2014"]
});

export default {
  data() {
    return {
      moment: moment,
      recur: recur,
      start: start,
      interval: interval,
      from: from,
      recurrence: recurrence
    };
  },
  methods: {
    addOneSecondToActualTimeEverySecond() {},
    getDiffInSeconds() {},
    compute() {}
  },
  created() {},
  watch: {}
};
</script>

