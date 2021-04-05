import { reactive } from '@vue/composition-api'
import { sidebarList } from '@/constants'
import { getMenuFromLinks } from './menu'
import router from '@/router'

export const sidebar = reactive({
  visible: true,
  collapsed: false
})

export const comparePath = (
  currentURL: string,
  matchPattern: string,
  exact: boolean
) => matchPattern && (exact
  ? currentURL === matchPattern
  : currentURL.startsWith(matchPattern))

export const isLinkActive = (linkSettings: any) => comparePath(
  router.currentRoute.fullPath,
  linkSettings.rel || linkSettings.to || '',
  linkSettings.exact
)

export const sidebarMenu = getMenuFromLinks(sidebarList)
console.log(sidebarMenu)
