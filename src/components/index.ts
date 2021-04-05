import Vue from 'vue'
import { upperFirst, camelCase } from 'lodash'

const components = require.context(
  './', true, /\.vue$/
)

components.keys().forEach((fileName: string) => {
  const componentConfig = components(fileName)

  const componentName = upperFirst(
    camelCase(fileName
      .replace(/^\.\//, '')
      .replace(/\.\w+$/, '')
      .replace('index', ''))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
