<template>
  <div
    class="main-sidebar-collapse"
    :class="collapsed && 'main-sidebar-collapse--collapsed'"
    v-on="$listeners"
  >
    <v-btn
      class="main-sidebar-collapse__btn"
      fab
      x-small
      elevation="0"
    >
      <v-icon color="white">
        {{ collapsed ? 'mdi-chevron-right' : 'mdi-chevron-left' }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
$dark-color: var(--v-primary-darken1);
$light-color: var(--v-primary-lighten1);

.main-sidebar-collapse {
  cursor: w-resize;

  position: absolute;
  z-index: 10;

  width: 12px;
  top: 0;
  right: -12px;
  bottom: 0;

  opacity: 0;
  transition: .5s;

  &--collapsed {
    cursor: e-resize;
  }

  &:hover {
    opacity: 1;

    > .v-btn {
      pointer-events: all;
    }
  }

  &:before {
    content: '';
    position: absolute;
    background-color: $dark-color;

    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
  }

  &__btn.v-btn {
    pointer-events: none;
    position: absolute;
    top: 200px;
    left: 0;
    transform: translate(calc(2px - 50%), -50%);
    background-color: $light-color !important;

    border-width: 3px;
    border-style: solid;
    border-color: $dark-color !important;

    &:before {
      content: none;
    }
  }
}
</style>
