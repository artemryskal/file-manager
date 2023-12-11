<template>
  <section class="auth">
    <div class="auth__container">
      <v-icon icon="iconLogo" class="auth__logo" />

      <div class="d-flex flex-column justify-center flex-grow-1">
        <div class="d-flex align-center justify-space-between">
          <!-- Заголовок -->
          <h1>Регистрация</h1>
          <!-- Ссылка войти -->
          <router-link
            :to="{ name: 'login' }"
            class="text-text_grey font-weight-bold">
            Есть аккаунт? войти
          </router-link>
        </div>

        <!-- Форма -->
        <form class="auth__form" @submit.prevent="signupUser">
          <!-- Почта -->
          <label>
            Почта
            <v-text-field
              v-model="state.email"
              variant="underlined"
              type="email"
              hide-details
              placeholder="example@example.com"
              class="mt-1" />
          </label>

          <!-- Имя пользователя -->
          <label class="d-block mt-7">
            Имя пользователя
            <v-text-field
              v-model="state.username"
              variant="underlined"
              hide-details
              placeholder="Введите уникальное имя пользователя"
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

          <!-- Кнопка зарегистрироваться -->
          <v-btn type="submit" :elevation="0" color="primary" class="mt-10">
            Зарегистрироваться
          </v-btn>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const showPass = ref(false)
const state = reactive({
  username: '',
  email: '',
  password: '',
})

const signupUser = async () => {
  if (!(await userStore.signUp(state))) return false
  router.push({ name: 'docs' })
}
</script>

<style lang="scss" scoped>
@use '@/scss/custom/auth';
</style>
