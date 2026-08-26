import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API from '../api/axios'

const STATUS_STYLES = {
  'pending':     'bg-gray-700 text-gray-300',
  'in-progress': 'bg-yellow-900/50 text-yellow-300',
  'completed':   'bg-green-900/50 text-green-300'
}

const PRIORITY_STYLES = {
  'High':   'text-red-400',
  'Medium': 'text-yellow-400',
  'Low':    'text-green-400'
}

function RoadmapPage() {
  const [roadmap, setRoadmap]   = useState(null)
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')
  const [updating, setUpdating] = useState(null)

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const res = await API.get('/roadmap')
        setRoadmap(res.data.roadmap)
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load roadmap')
      } finally {
        setLoading(false)
      }
    }
    fetchRoadmap()
  }, [])

  const handleStatusChange = async (topicId, newStatus) => {
    setUpdating(topicId)
    try {
      await API.patch(`/roadmap/${topicId}`, { status: newStatus })
      setRoadmap(prev => ({
        ...prev,
        topics: prev.topics.map(t => t._id === topicId ? { ...t, status: newStatus } : t)
      }))
    } catch (err) {
      alert('Failed to update topic status')
    } finally {
      setUpdating(null)
    }
  }

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="text-blue-400">Loading roadmap...</div>
    </div>
  )

  if (error) return (
    <div className="text-center py-12">
      <p className="text-red-400 mb-4">{error}</p>
      <Link to="/setup" className="text-blue-400 hover:underline">Complete your setup first →</Link>
    </div>
  )

  const completed  = roadmap?.topics?.filter(t => t.status === 'completed').length || 0
  const total      = roadmap?.topics?.length || 0
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">🗺️ Study Roadmap</h1>
        <p className="text-gray-400 mt-1">Your personalized learning path. Update topics as you progress.</p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Overall Progress</h2>
          <span className="text-blue-400 font-bold text-lg">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-3">
          <div className="bg-blue-500 h-3 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }} />
        </div>
        <p className="text-gray-500 text-sm mt-2">{completed} of {total} topics completed</p>
      </div>

      <div className="space-y-3">
        {roadmap?.topics?.sort((a, b) => a.order - b.order).map((topic) => (
          <div key={topic._id} className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm font-mono w-6 text-right">{topic.order}</span>
              <div>
                <p className="text-white font-medium">{topic.name}</p>
                <p className={`text-xs mt-0.5 ${PRIORITY_STYLES[topic.priority] || 'text-gray-400'}`}>
                  {topic.priority} Priority
                </p>
              </div>
            </div>
            <select
              value={topic.status}
              onChange={(e) => handleStatusChange(topic._id, e.target.value)}
              disabled={updating === topic._id}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${STATUS_STYLES[topic.status] || 'bg-gray-700 text-gray-300'}`}
            >
              <option value="pending">⏳ Pending</option>
              <option value="in-progress">🔄 In Progress</option>
              <option value="completed">✅ Completed</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoadmapPage
