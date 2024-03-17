<template>
  <v-menu
    v-model="opened"
    transition="slide-y-transition"
    offset="5"
    :close-on-content-click="false"
    class="user">
    <template #activator="{ props }">
      <v-btn v-bind="props" elevation="0" class="user__activator">
        <span class="user__avatar-item">И</span>
        Имя
        <v-icon
          icon="iconArrow"
          size="8"
          color="white"
          class="user__dropdown-icon"
          :class="{ 'rotate-180': opened }" />
      </v-btn>
    </template>

    <v-list class="dropdown" min-width="240">
      <!-- Аватарка пользователя -->
      <div class="d-flex flex-column align-center">
        <div class="user__avatar">
          <span class="user__avatar-item user__avatar-item--big">И</span>
          <!-- Кнопка изменить -->
          <v-btn icon elevation="0" class="user__edit">
            <v-icon icon="iconEdit" />
          </v-btn>
        </div>
        <!-- Имя и почта -->
        <div class="user__name">Имя</div>
        <div class="user__email">
          example@mail.ru
        </div>
      </div>

      <!-- Пользовательские действия -->
      <div class="d-flex flex-column align-center mt-4">
        <v-list-item class="dropdown__item">Настройки</v-list-item>
        <v-divider class="my-1"></v-divider>
        <v-list-item class="dropdown__item">Добавить в аккаунт</v-list-item>
        <v-list-item class="dropdown__item">Выйти</v-list-item>
      </div>
    </v-list>
  </v-menu>
</template>

<script setup>
const opened = ref(false)
</script>

<style lang="scss" scoped>
.dropdown {
  padding: 1.6rem 0;
}

.user {
  &__activator {
    display: flex;
    padding: 5px;
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1.16rem;
  }
  
  &__avatar {
    position: relative;
  }

  &__avatar-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: rgb(var(--v-theme-accent));
    margin-right: 0.8rem;

    &--big {
      width: 46px;
      height: 46px;
      font-size: 2rem;
      margin-right: 0;
    }
  }

  &__dropdown-icon {
    margin-left: 1.25rem;
  }

  &__name {
    font-size: 1rem;
    margin-top: 10px;
    line-height: 100%;
  }

  &__email {
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 100%;
    color: rgb(var(--v-theme-text_grey));
  }

  &__edit {
    position: absolute;
    right: -7px;
    bottom: 0;
    width: 22px !important;
    height: 22px !important;
    padding: 0 !important;
    border-radius: 11px !important;
  }
}
</style>
