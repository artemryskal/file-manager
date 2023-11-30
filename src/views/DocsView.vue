<template>
  <div class="view">
    <!-- Шапка -->
    <DocsHeader />

    <!-- Список файлов -->
    <DocsGrid v-if="managerStore.view === 'grid'" />
    <DocsTable v-else />
  </div>
</template>

<script setup>
import { useManagerStore } from '@/stores/manager'

const managerStore = useManagerStore()
</script>
