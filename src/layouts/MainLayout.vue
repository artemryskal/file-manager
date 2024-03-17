<template>
  <v-layout>
    <!-- Шапка -->
    <router-view name="header" />

    <!-- Сайдбар -->
    <router-view name="sidebar" />

    <!-- Основной контент -->
    <v-main class="d-flex flex-column flex-grow-1">
      <router-view />
    </v-main>

    <!-- Подвал -->
    <router-view name="footer" />
  </v-layout>
</template>
