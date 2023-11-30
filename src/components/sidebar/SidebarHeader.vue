<template>
  <div class="sidebar-header d-flex">
    <!-- Кнопка "Домой" -->
    <router-link to="/docs" class="sidebar-header__home">
      <v-icon icon="iconHome" color="text" />
    </router-link>
    <!-- Поиск по документам -->
    <form class="d-flex flex-grow-1" @submit.prevent>
      <v-text-field
        variant="underlined"
        hide-details
        placeholder="Поиск документов"
        class="sidebar-header__search"
        @focus="focused = true"
        @blur="focused = false">
        <template #prepend-inner>
          <v-icon
            icon="iconSearch"
            size="16"
            :color="focused ? 'primary' : 'text'" />
        </template>
      </v-text-field>
    </form>
  </div>
</template>

<script setup>
const focused = ref(false)
</script>

<style lang="scss" scoped>
.sidebar-header {
  &__home {
    padding: 21px;
    border-bottom: 1px solid rgb(var(--v-theme-border));
  }

  &__search {
    border-left: 1px solid rgb(var(--v-theme-border));
  }
}
</style>