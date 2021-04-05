import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import { palette } from '@/constants'

Vue.use(Vuetify)

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: 'sm'
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: palette.light
    }
  }
})
