<template>
  <section class="auth">
    <div class="auth__container">
      <v-icon icon="iconLogo" class="auth__logo" />

      <div class="d-flex flex-column justify-center flex-grow-1">
        <div class="d-flex align-center justify-space-between">
          <!-- Заголовок -->
          <h1>
            Вход
          </h1>
          <!-- Ссылка создать аккаунт -->
          <router-link :to="{ name: 'signup' }" class="text-text_grey font-weight-bold">
            Нет аккаунта? Создать
          </router-link>
        </div>

        <!-- Форма -->
        <form class="auth__form" @submit.prevent="login">
          <!-- Логин -->
          <label>
            Логин
            <v-text-field
              v-model="state.login"
              variant="underlined"
              hide-details
              placeholder="Имя пользователя или почта"
              class="mt-1" />
          </label>

          <!-- Пароль -->
          <label class="d-block mt-7">
            Пароль
            <v-text-field
              v-model="state.password"
              variant="underlined"
              :type="showPass ? 'text' : 'password'"
              hide-details
              placeholder="Ваш пароль"
              class="mt-1">
              <template #append-inner>
                <v-icon
                  icon="iconPasswordShow"
                  size="15"
                  class="mx-2 cursor-pointer"
                  @click.stop="showPass = !showPass" />
              </template>
            </v-text-field>
          </label>

          <!-- Кнопка войти -->
          <v-btn type="submit" :elevation="0" color="primary" class="mt-10">
            Войти
          </v-btn>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const showPass = ref(false)
const state = reactive({
  login: '',
  password: '',
})

const login = async () => {
  if (!await(userStore.login(state))) return false
  router.push({ name: 'docs' })
}
</script>

<style lang="scss" scoped>
@use '@/scss/custom/auth';
</style>
