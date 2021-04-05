<template>
  <v-list-item
    :href="settings.to"
    class="main-sidebar-item"
    :class="isActive && 'v-list-item--active'"
    v-on="{
      ...$listeners,
      ...(settings.event ? {
        click: () => { $events.emit(settings.event) }
      } : {})
    }"
  >
    <v-list-item-avatar class="ma-0">
      <v-icon v-if="settings.icon">
        {{ settings.icon }}
      </v-icon>
    </v-list-item-avatar>
    <v-list-item-title class="ml-3">
      {{ settings.label }}
    </v-list-item-title>
  </v-list-item>
</template>

<script>
import { computed } from '@vue/composition-api'
import { isLinkActive } from '@/use/app/sidebar'

export default {
  props: {
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  setup: (props) => {
    const isActive = computed(() => isLinkActive(props.settings))

    return { isActive }
  }
}
</script>

<style lang="scss">
.main-sidebar-item.v-list-item {
  $item-color: var(--v-secondary-base);
  $item-color--active: white;
  $item-background: var(--v-dark-primary-base);

  cursor: pointer;
  transition: .2s;

  &:before {
    display: none;
  }

  &.v-list-item--active {
    background-color: $item-background;
  }

  .v-icon {
    color: inherit !important;
  }

  > .v-list-item__title {
    font-weight: bold;
    font-size: 13px;
  }

  &.theme--dark,
  &.theme--light {
    &:not(.v-list-item--disabled) {
      color: $item-color--active !important;

      &:not(.v-list-item--active) {
        color: $item-color !important;

        &:hover {
          color: $item-color--active !important;
        }
      }
    }
  }
}
</style>
