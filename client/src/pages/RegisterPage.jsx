// RegisterPage.jsx
import { Link } from 'react-router-dom'

function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Create Account 🚀</h1>
        <p className="text-gray-400 text-sm mb-6">Join PrepWise AI today</p>
        <p className="text-gray-500 text-sm mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
        </p>
        <Link to="/" className="text-gray-600 text-xs mt-4 block hover:text-gray-400">← Back to Home</Link>
      </div>
    </div>
  )
}
export default RegisterPage