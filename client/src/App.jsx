import { Routes, Route } from 'react-router-dom'

// Layout + Auth
import AppLayout     from './components/AppLayout'
import PrivateRoute  from './components/PrivateRoute'

// Pages
import LandingPage   from './pages/LandingPage'
import LoginPage     from './pages/LoginPage'
import RegisterPage  from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import ResumePage    from './pages/ResumePage'
import SetupPage     from './pages/SetupPage'
import RoadmapPage   from './pages/RoadmapPage'
import TutorPage     from './pages/TutorPage'
import InterviewPage from './pages/InterviewPage'

function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/"         element={<LandingPage />} />
      <Route path="/login"    element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Private Routes */}
      <Route element={
        <PrivateRoute>
          <AppLayout />
        </PrivateRoute>
      }>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/resume"    element={<ResumePage />} />
        <Route path="/setup"     element={<SetupPage />} />
        <Route path="/roadmap"   element={<RoadmapPage />} />
        <Route path="/tutor"     element={<TutorPage />} />
        <Route path="/interview" element={<InterviewPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={
        <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-blue-400">404</h1>
            <p className="text-gray-400 mt-4">Page not found</p>
          </div>
        </div>
      } />

    </Routes>
  )
}

export default App