<template>
  <v-list class="dropdown" min-width="159">
    <div class="d-flex flex-column align-center">
      <v-list-item class="dropdown__item">Открыть</v-list-item>
      <v-divider class="my-1"></v-divider>
      <v-list-item class="dropdown__item">В избранное</v-list-item>
      <v-divider class="my-1"></v-divider>
      <v-list-item class="dropdown__item">Копировать ссылку</v-list-item>
      <v-list-item class="dropdown__item">Поделиться</v-list-item>
      <v-divider class="my-1"></v-divider>
      <v-list-item class="dropdown__item">Переименовать</v-list-item>
      <v-list-item class="dropdown__item">Удалить</v-list-item>
    </div>
  </v-list>
</template>

<style scoped>
.dropdown {
  padding: 10px 0;
}
</style>
