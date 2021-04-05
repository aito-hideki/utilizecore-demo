<template>
  <v-app-bar
    class="main-header elevation-0"
    color="primary"
    clipped-left
    app
  >
    <v-row no-gutters>
      <v-col
        class="d-flex align-center justify-start"
        cols="6"
        md="3"
      >
        <v-btn
          class="d-md-none"
          color="white"
          icon
          @click="() => { sidebar.visible = !sidebar.visible }"
        >
          <v-icon>
            mdi-menu
          </v-icon>
        </v-btn>
        <v-btn
          id="filter-control"
          color="white"
          icon
          data-target="#content-search-sidebar"
          data-toggle-class="open"
        >
          <v-icon>
            mdi-filter
          </v-icon>
        </v-btn>
      </v-col>
      <v-col
        class="d-none d-md-block"
        cols="6"
      >
        <v-icon>
          mdi-magnifier
        </v-icon>
      </v-col>
      <v-col
        class="d-flex align-center justify-end"
        cols="6"
        md="3"
      >
        <v-btn
          id="zendesk_unauthenticated_livechat"
          color="white"
          icon
        >
          <v-icon>
            mdi-face-agent
          </v-icon>
        </v-btn>
        <v-btn
          color="white"
          icon
          href="/messages"
        >
          <v-icon>
            mdi-email
          </v-icon>
        </v-btn>
        <v-btn
          color="white"
          icon
          href="/company/service_requests/new"
        >
          <v-icon>
            mdi-room-service
          </v-icon>
        </v-btn>
        <main-header-account />
      </v-col>
    </v-row>
  </v-app-bar>
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
.main-header.v-toolbar {
  .v-toolbar__content {
    background-color: var(--v-primary-lighten1) !important;
    border-bottom: 2px solid var(--v-dark-primary-base) !important;
    padding: 4px 12px;
  }
}
</style>
