import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API from '../api/axios'
import { useAuth } from '../context/AuthContext'

function DashboardPage() {
  const { user } = useAuth()
  const [dashboard, setDashboard] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await API.get('/dashboard')
        setDashboard(res.data)
      } catch (err) {
        setError('Failed to load dashboard')
      } finally {
        setLoading(false)
      }
    }
    fetchDashboard()
  }, [])

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="text-blue-400 text-lg">Loading dashboard...</div>
    </div>
  )
  if (error) return <div className="text-red-400 text-center py-12">{error}</div>

  const progress = dashboard?.roadmapProgress

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Welcome back, {user?.name}! 👋</h1>
        <p className="text-gray-400 mt-1">Here is your interview prep overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div className="text-2xl mb-2">📄</div>
          <p className="text-gray-400 text-sm">Resume</p>
          <p className="text-white font-semibold mt-1">{dashboard?.resume ? 'Uploaded ✅' : 'Not uploaded'}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div className="text-2xl mb-2">🎯</div>
          <p className="text-gray-400 text-sm">Target Role</p>
          <p className="text-white font-semibold mt-1">{dashboard?.setup?.targetRole || 'Not set'}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div className="text-2xl mb-2">🏢</div>
          <p className="text-gray-400 text-sm">Target Company</p>
          <p className="text-white font-semibold mt-1">{dashboard?.setup?.targetCompany || 'Not set'}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div className="text-2xl mb-2">🗺️</div>
          <p className="text-gray-400 text-sm">Roadmap Progress</p>
          <p className="text-white font-semibold mt-1">{progress ? `${progress.percentage}%` : 'No roadmap'}</p>
        </div>
      </div>

      {progress && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">📊 Roadmap Progress</h2>
          <div className="w-full bg-gray-800 rounded-full h-3 mb-4">
            <div className="bg-blue-500 h-3 rounded-full transition-all" style={{ width: `${progress.percentage}%` }} />
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <span>✅ Completed: <span className="text-white">{progress.completed}</span></span>
            <span>🔄 In Progress: <span className="text-white">{progress.inProgress}</span></span>
            <span>⏳ Pending: <span className="text-white">{progress.pending}</span></span>
            <span>📚 Total: <span className="text-white">{progress.total}</span></span>
          </div>
        </div>
      )}

      <div>
        <h2 className="text-lg font-semibold mb-4">⚡ Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { to: '/resume',    icon: '📄', label: 'Upload Resume' },
            { to: '/setup',     icon: '⚙️',  label: 'Interview Setup' },
            { to: '/roadmap',   icon: '🗺️', label: 'Study Roadmap' },
            { to: '/tutor',     icon: '📚', label: 'AI Tutor' },
            { to: '/interview', icon: '🎤', label: 'Mock Interview' },
          ].map((item) => (
            <Link key={item.to} to={item.to} className="bg-gray-900 border border-gray-800 hover:border-blue-600 rounded-xl p-5 text-center transition-colors group">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-gray-400 group-hover:text-white text-sm transition-colors">{item.label}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">📚 Recent Study Sessions</h2>
          {dashboard?.recentActivity?.tutorSessions?.length > 0 ? (
            <ul className="space-y-3">
              {dashboard.recentActivity.tutorSessions.map((s) => (
                <li key={s._id} className="flex items-center justify-between text-sm">
                  <span className="text-white">{s.topic}</span>
                  <span className="text-gray-500">{new Date(s.createdAt).toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          ) : <p className="text-gray-500 text-sm">No study sessions yet.</p>}
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">🎤 Recent Interviews</h2>
          {dashboard?.recentActivity?.mockInterviews?.length > 0 ? (
            <ul className="space-y-3">
              {dashboard.recentActivity.mockInterviews.map((i) => (
                <li key={i._id} className="flex items-center justify-between text-sm">
                  <span className="text-white">{i.type} Interview</span>
                  <span className={`font-semibold ${i.status === 'completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {i.status === 'completed' ? `${i.overallScore}%` : 'In Progress'}
                  </span>
                </li>
              ))}
            </ul>
          ) : <p className="text-gray-500 text-sm">No mock interviews yet.</p>}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage