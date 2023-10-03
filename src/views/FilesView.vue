<template>
  <v-list>
    <v-list-item
      v-for="(file, i) in filesStore.files"
      :key="i"
      class="file">
      {{ file.name }}
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useFilesStore } from '@/stores/files'

const filesStore = useFilesStore()
</script>
