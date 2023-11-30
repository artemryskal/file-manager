import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

export const useContextStore = defineStore('context', () => {
  const openedId: Ref<number | null> = ref(0)

  return { openedId }
})
