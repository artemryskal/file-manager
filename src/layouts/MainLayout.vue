<template>
  <v-layout>
    <!-- Шапка -->
    <router-view name="header" />

    <!-- Сайдбар -->
    <router-view name="sidebar" />

    <!-- Основной контент -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Подвал -->
    <router-view name="footer" />
  </v-layout>
</template>
