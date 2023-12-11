import { defineStore } from 'pinia'
import instance from '@/api/instance.js'

export const useUserStore = defineStore('user', () => {
  /** Signup action */
  const signUp = async (payload) => {
    try {
      const { data } = await instance.post('auth/registration', payload)
      localStorage.setItem('jwt_key', `Bearer ${data}`)
      return true
    } catch (e) {
      return false
    }
  }

  /** Login action */
  const login = async (payload) => {
    try {
      const { data } = await instance.post('auth/login', payload)
      localStorage.setItem('jwt_key', `Bearer ${data}`)
      return true
    } catch (e) {
      return false
    }
  }

  return { signUp, login }
})
