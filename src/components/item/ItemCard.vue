<template>
  <div ref="item" class="item">
    <!-- Контекстное меню -->
    <v-menu
      v-model="opened"
      :contained="true"
      :style="{ left: `${x}px`, top: `${y}px` }">
      <template #activator>
        <!-- Карточка документа -->
        <router-link
          to="#"
          class="item__card"
          @contextmenu.prevent="showContext">
          <!-- Кнопка добавить/удалить в избранное -->
          <v-btn :elevation="0" class="item__fav pa-0" @click.prevent.stop>
            <v-icon icon="iconStarOutlined" />
          </v-btn>

          <!-- Превью -->
          <img
            src="@/assets/images/item-example.png"
            alt="Превью документа"
            class="item__image" />
          <!-- Название -->
          <div class="item__name">Документ 2</div>
          <div class="d-flex align-center">
            <!-- Аватар -->
            <div class="item__author">U</div>
            <!-- Последнее редактирование -->
            <div class="item__author-name">3 месяца назад</div>
          </div>
        </router-link>
      </template>

      <!-- Список действий -->
      <ItemContext />
    </v-menu>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { useContextStore } from '@/stores/context'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
const contextStore = useContextStore()
const item = ref(null)

const opened = computed(() => contextStore.openedId === props.item.id)
const x = ref(0)
const y = ref(0)

onClickOutside(item, () => (contextStore.openedId = null))
const showContext = (e) => {
  const rect = item.value.getBoundingClientRect()
  contextStore.openedId = props.item.id
  x.value = e.clientX - rect.left
  y.value = e.clientY - rect.top

  if (x.value + 159 > window.innerWidth) {
    x.value = window.innerWidth - 20
  }
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;

  &__fav {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 26px;
    height: 26px;
    border-radius: 5px;
    background-color: rgb(var(--v-theme-secondary));
  }

  &__card {
    display: flex;
    flex-direction: column;
  }

  &__image {
    border-radius: 5px;
    margin-bottom: 10px;
  }

  &__name {
    font-size: 1.16rem;
    margin-bottom: 5px;
  }

  &__author {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    background-color: rgb(var(--v-theme-accent));
    margin-right: 0.8rem;
  }

  &__author-name {
    opacity: 0.4;
  }
}
</style>
