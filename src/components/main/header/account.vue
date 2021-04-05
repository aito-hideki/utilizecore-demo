<template>
  <v-menu
    v-model="isOpen"
    left
    bottom
    offset-y
    :close-on-content-click="false"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        color="white"
        icon
        v-on="on"
      >
        <v-icon>
          mdi-account-circle
        </v-icon>
      </v-btn>
    </template>

    <v-card
      class="overflow-auto"
      :width="(companies.loading || !companies.list) ? 300 : 500"
      max-height="500"
    >
      <v-card-title class="pa-2">
        <v-spacer />
        <v-btn
          icon
          small
          @click="() => { isOpen = false }"
        >
          <v-icon small>
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text
        v-if="companies.loading"
        class="d-flex flex-column align-center px-2"
      >
        <v-progress-circular
          :width="5"
          :size="50"
          color="warning"
          indeterminate
        />
        <h4 class="mt-3">Loading...</h4>
      </v-card-text>
      <v-card-text
        v-else-if="!companies.list"
        class="d-flex flex-row align-center justify-center px-2"
      >
        <v-icon class="d-inline pr-2">
          mdi-robot-dead
        </v-icon>
        <span class="mt-1">
          Sorry, we couldn't load your request
        </span>
      </v-card-text>
      <v-card-text v-else>
        <ul v-html="companies.list" />
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
import { useCompanies } from '@/use/companies'
import { ref, onMounted } from '@vue/composition-api'

export default {
  setup: () => {
    const isOpen = ref(false)
    const {
      companies,
      loadCompanies
    } = useCompanies()

    onMounted(loadCompanies)

    return {
      isOpen,
      companies
    }
  }
}
</script>
