<template>
  <div class="list">
    <ItemCard v-for="id in 20" :key="id" :item="{ id }" />
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2.5rem;
  margin-top: 2rem;
}
</style>
