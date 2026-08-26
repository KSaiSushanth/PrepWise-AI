import { createContext, useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// Step 1: Create the context
const AuthContext = createContext()

// Step 2: Create the Provider component
export function AuthProvider({ children }) {
  const navigate = useNavigate()

  const [user, setUser]       = useState(null)
  const [token, setToken]     = useState(null)
  const [loading, setLoading] = useState(true)   // true until auth is checked

  // On app load / refresh → read from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const storedUser  = localStorage.getItem('user')

    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
    }

    setLoading(false)   // auth check done — stop showing spinner
  }, [])

  // Called after successful login or register
  const login = (tokenValue, userData) => {
    localStorage.setItem('token', tokenValue)
    localStorage.setItem('user', JSON.stringify(userData))
    setToken(tokenValue)
    setUser(userData)
    navigate('/dashboard')
  }

  // Called on logout
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setToken(null)
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Step 3: Custom hook for easy access
export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContext