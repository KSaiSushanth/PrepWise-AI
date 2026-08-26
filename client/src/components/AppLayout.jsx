import { Outlet, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function AppLayout() {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link to="/dashboard" className="text-xl font-bold text-blue-400">
            PrepWise AI 🚀
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link to="/resume"    className="hover:text-white transition-colors">Resume</Link>
            <Link to="/roadmap"   className="hover:text-white transition-colors">Roadmap</Link>
            <Link to="/tutor"     className="hover:text-white transition-colors">Tutor</Link>
            <Link to="/interview" className="hover:text-white transition-colors">Interview</Link>

            {/* User name from context */}
            <span className="text-gray-500">|</span>
            <span className="text-white font-medium">{user?.name}</span>

            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>

        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Outlet />
      </main>

    </div>
  )
}

export default AppLayout