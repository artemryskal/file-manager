<template>
  <v-expansion-panels v-model="panels" class="sidebar__container">
    <v-expansion-panel hide-actions class="sidebar__action">
      <template #title>
        <span class="d-flex align-center pa-0">
          <v-icon
            icon="iconArrow"
            size="8"
            class="mr-2"
            :class="{ 'rotate-180': typeof panels !== 'undefined' }" />
          {{ props.title }}
        </span>
      </template>
      <template #text>
        <v-list class="docs-list">
          <v-list-item
            v-for="doc in props.docs"
            :key="doc.id"
            to="#"
            class="docs-list__item">
            {{ doc.name }}
          </v-list-item>
        </v-list>
      </template>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
const panels = ref(0)

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  docs: {
    type: Object,
    required: true,
  },
})
</script>
