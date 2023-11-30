<template>
  <div class="header">
    <div class="d-flex align-center justify-space-between">
      <h1 class="title">
        Все документы
      </h1>

      <div>
        <!-- Кнопка создать документ -->
        <v-btn color="primary" elevation="0" class="mr-4">
          <v-icon
            icon="iconAdd"
            size="12"
            class="mr-2" />
          Документ
        </v-btn>

        <!-- Кнопка загрузить документ -->
        <v-btn variant="outlined" elevation="0">
          Загрузить
        </v-btn>
      </div>
    </div>

    <!-- Фильтрация -->
    <div class="d-flex justify-space-between align-center mt-6">
      <!-- Тип документа -->
      <v-btn-toggle v-model="type" mandatory>
        <v-btn :elevation="0" value="all" class="small mr-2">
          Все
        </v-btn>
        <v-btn :elevation="0" value="my" class="small mr-2">
          Мои документы
        </v-btn>
        <v-btn :elevation="0" value="share" class="small">
          Совместный доступ
        </v-btn>
      </v-btn-toggle>

      <div>
        <!-- Вид сетки -->
        <v-btn-toggle v-model="managerStore.view" mandatory>
          <v-btn :elevation="0" color="table" value="grid" class="pa-1 mr-1">
            <v-icon
              :color="managerStore.view === 'grid' ? 'text' : 'text_grey' "
              size="14"
              icon="iconGrid" />
          </v-btn>
          <v-btn :elevation="0" value="row" class="pa-1">
            <v-icon
              :color="managerStore.view === 'table' ? 'text' : 'text_grey' "
              size="14"
              icon="iconRow" />
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useManagerStore } from '@/stores/manager'

const type = ref('all')
const managerStore = useManagerStore()
</script>
