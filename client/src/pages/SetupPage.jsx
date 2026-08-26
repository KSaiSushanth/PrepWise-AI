import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api/axios'

const EXPERIENCE_LEVELS = ['Fresher', '1-2 years', '3-5 years', '5+ years']

function SetupPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    targetCompany: '', targetRole: '', experienceLevel: 'Fresher',
    strongTopics: '', weakTopics: ''
  })
  const [loading, setLoading]   = useState(false)
  const [fetching, setFetching] = useState(true)
  const [error, setError]       = useState('')
  const [success, setSuccess]   = useState('')

  useEffect(() => {
    const fetchSetup = async () => {
      try {
        const res = await API.get('/setup')
        const s = res.data.setup
        setFormData({
          targetCompany:   s.targetCompany   || '',
          targetRole:      s.targetRole      || '',
          experienceLevel: s.experienceLevel || 'Fresher',
          strongTopics:    s.strongTopics?.join(', ') || '',
          weakTopics:      s.weakTopics?.join(', ')   || ''
        })
      } catch (err) {
        // 404 means no setup yet — that is fine
      } finally {
        setFetching(false)
      }
    }
    fetchSetup()
  }, [])

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')
    const payload = {
      targetCompany:   formData.targetCompany,
      targetRole:      formData.targetRole,
      experienceLevel: formData.experienceLevel,
      strongTopics: formData.strongTopics.split(',').map(t => t.trim()).filter(Boolean),
      weakTopics:   formData.weakTopics.split(',').map(t => t.trim()).filter(Boolean)
    }
    try {
      await API.post('/setup', payload)
      setSuccess('Setup saved! Redirecting to your roadmap...')
      setTimeout(() => navigate('/roadmap'), 1500)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save setup')
    } finally {
      setLoading(false)
    }
  }

  if (fetching) return (
    <div className="flex items-center justify-center h-64">
      <div className="text-blue-400">Loading setup...</div>
    </div>
  )

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold text-white">⚙️ Interview Setup</h1>
        <p className="text-gray-400 mt-1">Tell us about your target role to generate your personalized roadmap.</p>
      </div>

      {error   && <div className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-3 rounded-lg text-sm">{error}</div>}
      {success && <div className="bg-green-900/30 border border-green-700 text-green-400 px-4 py-3 rounded-lg text-sm">{success}</div>}

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Target Company *</label>
            <input type="text" name="targetCompany" value={formData.targetCompany} onChange={handleChange} placeholder="Google, Amazon, Microsoft..." required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Target Role *</label>
            <input type="text" name="targetRole" value={formData.targetRole} onChange={handleChange} placeholder="Frontend Developer, SDE-1, Full Stack Engineer..." required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Experience Level</label>
            <select name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
              {EXPERIENCE_LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Strong Topics <span className="text-gray-600">(comma separated)</span></label>
            <input type="text" name="strongTopics" value={formData.strongTopics} onChange={handleChange} placeholder="React, JavaScript, Node.js" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Weak Topics <span className="text-gray-600">(comma separated)</span></label>
            <input type="text" name="weakTopics" value={formData.weakTopics} onChange={handleChange} placeholder="System Design, DSA, Algorithms" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors">
            {loading ? 'Saving & Generating Roadmap...' : 'Save Setup & Generate Roadmap'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default SetupPage
