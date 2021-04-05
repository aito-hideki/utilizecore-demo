<template>
  <div>
    <main-sidebar-item
      v-for="(menuItem, menuIdx) in items"
      :key="menuIdx"
      :settings="menuItem"
    />
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
