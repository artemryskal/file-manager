<template>
  <div class="not-found">
    <span class="not-found__error">
      404
    </span>
    <h1 class="not-found__title">
      Страница не найдена
    </h1>
    <v-btn color="primary" elevation="0" :to="{ name: 'docs' }" class="not-found__btn">
      Вернуться на главную
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  &__error {
    font-size: 20rem;
    color: rgb(var(--v-theme-primary));
  }

  &__title {
    font-size: 3.5rem;
    font-weight: 600;
    margin: 10px 0 20px;
  }
}
</style>
