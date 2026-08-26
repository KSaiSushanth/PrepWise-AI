import { Outlet, Link, useNavigate } from 'react-router-dom'

function AppLayout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')    // clear JWT
    localStorage.removeItem('user')     // clear user data
    navigate('/login')                  // redirect to login
  }

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
            <Link to="/dashboard" className="hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link to="/resume" className="hover:text-white transition-colors">
              Resume
            </Link>
            <Link to="/roadmap" className="hover:text-white transition-colors">
              Roadmap
            </Link>
            <Link to="/tutor" className="hover:text-white transition-colors">
              Tutor
            </Link>
            <Link to="/interview" className="hover:text-white transition-colors">
              Interview
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>

        </div>
      </nav>

      {/* Page Content — Outlet renders current page here */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Outlet />
      </main>

    </div>
  )
}

export default AppLayout