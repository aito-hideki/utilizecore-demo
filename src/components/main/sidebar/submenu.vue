<template>
  <v-menu
    :disabled="!sidebar.collapsed"
    open-on-hover
    offset-x
    tile
  >
    <template #activator="{ on }">
      <v-list-group
        v-model="isOpen"
        class="main-sidebar-submenu"
        :class="{
          'main-sidebar-submenu--active': isActive,
          'main-sidebar-submenu--open': isOpen,
          'main-sidebar-submenu--collapsed': sidebar.collapsed
        }"
        :prepend-icon="settings.core
          ? (sidebar.collapsed ? 'logo-core' : '')
          : settings.icon"
        v-on="on"
      >
        <template #activator>
          <img
            v-if="settings.core"
            class="ml-2 mr-auto"
            src="img/core.png"
            width="78"
            height="17"
            alt="core"
          >
          <v-list-item-title v-else>
            {{ settings.label }}
          </v-list-item-title>
        </template>

        <v-expand-transition>
          <main-sidebar-subitems
            v-if="!sidebar.collapsed"
            :items="settings.children"
          />
        </v-expand-transition>
      </v-list-group>
    </template>

    <v-list
      color="primary"
      dark
    >
      <main-sidebar-subitems :items="settings.children" />
    </v-list>
  </v-menu>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import { sidebar, isLinkActive } from '@/use/app/sidebar'

export default {
  props: {
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  setup: (props) => {
    const isActive = computed(() => props.settings.children
      .reduce((acc, cur) => acc || isLinkActive(cur), false))
    const isOpen = ref(isActive.value)

    return {
      isActive,
      isOpen,

      sidebar
    }
  }
}
</script>

<style lang="scss">
.main-sidebar-submenu.v-list-group {
  $submenu-color: var(--v-secondary-base);
  $submenu-color--active: white;
  $submenu-color--open: var(--v-primary-lighten1);

  transition: .2s;

  &.main-sidebar-submenu--open {
    &:not(.main-sidebar-submenu--collapsed) {
      background-color: $submenu-color--open;
    }
  }

  .main-sidebar-item {
    padding-left: 40px;
  }

  > .v-list-group__header.v-list-item {
    height: 56px;
    justify-content: start;
    font-weight: bold;

    &:before {
      content: none;
    }

    .v-icon {
      color: $submenu-color;
    }

    > .v-list-group__header__prepend-icon {
      margin: 16px 8px;
    }

    > .v-list-item__title {
      color: $submenu-color;
      font-size: 13px;
      margin-left: 12px;
    }
  }

  &.main-sidebar-submenu--active {
    &.main-sidebar-submenu--collapsed,
    &:not(.v-list-group--active) {
      background-color: var(--v-dark-primary-base);

      > .v-list-group__header.v-list-item {
        .v-icon {
          color: $submenu-color--active;
        }
        > .v-list-item__title {
          color: $submenu-color--active;
        }
      }
    }
  }
}
</style>
