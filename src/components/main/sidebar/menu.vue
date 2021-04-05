<template>
  <v-list subheader dark>
    <template v-for="(menuItem, menuIdx) in sidebarMenu">
      <main-sidebar-submenu
        v-if="menuItem.children && menuItem.children.length"
        :key="menuIdx"
        :settings="menuItem"
      />
      <menu-sidebar-item
        v-else
        :key="menuIdx"
        :settings="menuItem"
      />
    </template>
  </v-list>
</template>

<script>
import { sidebarMenu } from '@/use/app/sidebar'

export default {
  setup: () => {
    return {
      sidebarMenu
    }
  }
}
</script>
