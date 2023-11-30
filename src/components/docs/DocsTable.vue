<template>
  <div class="table">
    <v-table>
      <thead>
        <tr>
          <th>
            Название
          </th>
          <th>
            Последнее изменение
          </th>
          <th>
            Создан
          </th>
        </tr>
      </thead>
      <tbody class="tbody">
        <ItemRow v-for="id in 20" :key="id" />
      </tbody>
    </v-table>
  </div>
</template>

<style lang="scss" scoped>
.table {
  margin-top: 23px;
}
</style>
