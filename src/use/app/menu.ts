import { links } from '@/constants'

const getMenuItem = (menuItemID: string): any =>
  links.find(({ id }: any) => id === menuItemID)

export const getMenuFromLinks = (menuInfo: any[]): any[] => {
  return menuInfo.map(menuItem => {
    if (typeof menuItem === 'string') {
      return getMenuItem(menuItem)
    } else if (menuItem.children && Array.isArray(menuItem.children)) {
      return {
        ...menuItem,
        children: getMenuFromLinks(menuItem.children)
      }
    } else {
      return menuItem
    }
  })
}
