// LoginPage.jsx
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Welcome Back 👋</h1>
        <p className="text-gray-400 text-sm mb-6">Login to PrepWise AI</p>
        <p className="text-gray-500 text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-400 hover:underline">Register</Link>
        </p>
        <Link to="/" className="text-gray-600 text-xs mt-4 block hover:text-gray-400">← Back to Home</Link>
      </div>
    </div>
  )
}
export default LoginPage