import axios from 'axios'

// Base URL — all API calls go to your Express backend
const API = axios.create({
  baseURL: 'http://localhost:5000/api'
})

// Interceptor — automatically adds JWT token to every request
// So you don't have to manually add Authorization header every time
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default API