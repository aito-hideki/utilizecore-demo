<template>
  <v-navigation-drawer
    v-model="sidebar.visible"
    class="main-sidebar"
    color="primary"
    :mini-variant="!$vuetify.breakpoint.mobile && sidebar.collapsed"
    mini-variant-width="72"
    width="280"
    clipped
    app
  >
    <div class="main-sidebar__content">
      <main-sidebar-menu />
    </div>
    <main-sidebar-collapse
      v-if="!$vuetify.breakpoint.mobile"
      :collapsed="sidebar.collapsed"
      @click="() => { sidebar.collapsed = !sidebar.collapsed }"
    />
  </v-navigation-drawer>
</template>

<script>
import { sidebar } from '@/use/app/sidebar'

export default {
  setup: () => {
    return {
      sidebar
    }
  }
}
</script>

<style lang="scss">
.main-sidebar.v-navigation-drawer {
  overflow: visible;
  transition: .2s;
  border-right: 1px solid var(--v-primary-base);

  top: 56px !important;
  @media screen and (min-width: 960px) {
    top: 64px !important;
  }

  .main-sidebar__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden auto;
  }

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
    overflow-x: visible;
  }

  .v-navigation-drawer__border {
    display: none !important;
  }
}
</style>
