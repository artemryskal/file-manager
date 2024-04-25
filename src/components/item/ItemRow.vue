<template>
  <tr class="item" @click="moveToEdit">
    <td>
      <div class="d-flex align-center">
        <!-- Кнопка добавить/удалить в избранное -->
        <v-btn :elevation="0" class="item__fav pa-0" @click.prevent.stop>
          <v-icon icon="iconStarOutlined" />
        </v-btn>

        <!-- Превью -->
        <img
          src="@/assets/images/item-example.png"
          alt="Превью"
          class="item__preview" />

        <!-- Название -->
        Документ 1
      </div>
    </td>

    <!-- Последнее редактирование -->
    <td>10 минут назад</td>

    <!-- Создано -->
    <td>3 дня назад</td>

    <!-- Редакторы -->
    <td>
      <div class="d-flex align-center">
        <div class="item__author">U</div>
        <div class="item__author">U</div>
        <div class="item__author">U</div>
      </div>
    </td>

    <!-- Контекстное меню -->
    <td>
      <v-menu>
        <template #activator="{ props }">
          <v-btn v-bind="props" :elevation="0" class="item__more adjust-radius">
            <v-icon icon="iconMore" />
          </v-btn>
        </template>

        <!-- Список действий -->
        <ItemContext />
      </v-menu>
    </td>
  </tr>
</template>

<script setup>
const router = useRouter()

const moveToEdit = () => {
  router.push('/editor/123')
}
</script>

<style lang="scss" scoped>
.item {
  &:hover &__fav {
    opacity: 1;
  }

  &__fav {
    width: 16px;
    height: 16px;
    border-radius: 5px;
    opacity: 0;
  }

  &__preview {
    width: 50px;
    margin-left: 4px;
    margin-right: 25px;
    border-radius: 5px;
  }

  &__author {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 1.3rem;
    margin-right: 25px;
    border-radius: 50%;
    background-color: rgb(var(--v-theme-accent));

    &:last-of-type {
      margin-right: 0;
    }
  }

  &__more {
    padding: 5px;
    height: auto;
  }

  &__more,
  &__fav {
    background: none;
  }
}
</style>
