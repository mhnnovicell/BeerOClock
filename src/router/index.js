/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }]
})

const moment = require('moment')
require('moment/locale/da')

Vue.use(require('vue-moment'), {
  moment

})
