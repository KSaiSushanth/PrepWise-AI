import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function PrivateRoute({ children }) {
  const { token, loading } = useAuth()

  // Still checking localStorage — show spinner
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-blue-400 text-xl">Loading...</div>
      </div>
    )
  }

  // Not logged in → redirect to login
  if (!token) {
    return <Navigate to="/login" replace />
  }

  // Logged in → render the page
  return children
}

export default PrivateRoute