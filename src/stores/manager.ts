import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

export const useManagerStore = defineStore('manager', () => {
  const view: Ref<string> = ref('table')

  return { view }
})
