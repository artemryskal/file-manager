<template>
  <v-menu
    v-model="opened"
    transition="slide-y-transition"
    offset="5"
    :close-on-content-click="false"
    class="user">
    <template #activator="{ props }">
      <v-btn v-bind="props" elevation="0" class="user__activator">
        <span class="user__avatar">И</span>
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
      <div class="d-flex flex-column align-center">
        <span class="user__avatar user__avatar--big">И</span>
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
}
</style>
