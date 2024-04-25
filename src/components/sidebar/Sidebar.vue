<template>
  <v-navigation-drawer app permanent tag="aside" class="sidebar">
    <!-- Кнопка домой и поиск -->
    <SidebarHeader />

    <div class="sidebar__container sidebar__action">
      <!-- Пользователь -->
      <SidebarUser />
    </div>

    <!-- Избранные документы -->
    <SidebarDocs title="Избранные документы" :docs="docs" />

    <!-- Остальные документы -->
    <SidebarDocs title="Остальные документы" :docs="docs" />
  </v-navigation-drawer>
</template>

<script setup>
const docs = [
  {
    id: 1,
    name: 'Документ 1',
  },
  {
    id: 2,
    name: 'Документ 2',
  },
  {
    id: 3,
    name: 'Документ 3',
  },
]
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed !important;

  :deep(.sidebar__container) {
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(var(--v-theme-border));
  }

  :deep(.sidebar__action) {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
