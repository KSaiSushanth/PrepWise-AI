import { Link } from 'react-router-dom'

function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard 📊</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link to="/resume"    className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">📄 Resume</Link>
        <Link to="/setup"     className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">⚙️ Setup</Link>
        <Link to="/roadmap"   className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">🗺️ Roadmap</Link>
        <Link to="/tutor"     className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">📚 Tutor</Link>
        <Link to="/interview" className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">🎤 Interview</Link>
      </div>
    </div>
  )
}

export default DashboardPage