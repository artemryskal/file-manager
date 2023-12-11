import axios from 'axios'
import router from '@/router'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: localStorage.getItem('jwt_key'),
  },
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error.response.status === 401) {
      await router.push({ name: 'login' })
    }

    return Promise.reject(error)
  }
)

export default instance
