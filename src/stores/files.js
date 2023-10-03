import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilesStore = defineStore('files', () => {
  const files = ref([
    {
      id: 1,
      name: 'Example',
    }
  ])

  return { files }
})
