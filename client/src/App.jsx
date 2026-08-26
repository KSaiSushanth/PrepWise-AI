import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import LandingPage    from './pages/LandingPage'
import LoginPage      from './pages/LoginPage'
import RegisterPage   from './pages/RegisterPage'
import DashboardPage  from './pages/DashboardPage'
import ResumePage     from './pages/ResumePage'
import SetupPage      from './pages/SetupPage'
import RoadmapPage    from './pages/RoadmapPage'
import TutorPage      from './pages/TutorPage'
import InterviewPage  from './pages/InterviewPage'

// Layout
import AppLayout from './components/AppLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes — no navbar */}
        <Route path="/"         element={<LandingPage />} />
        <Route path="/login"    element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* App routes — with navbar (AppLayout wraps them) */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/resume"    element={<ResumePage />} />
          <Route path="/setup"     element={<SetupPage />} />
          <Route path="/roadmap"   element={<RoadmapPage />} />
          <Route path="/tutor"     element={<TutorPage />} />
          <Route path="/interview" element={<InterviewPage />} />
        </Route>

        {/* 404 — page not found */}
        <Route path="*" element={
          <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-blue-400">404</h1>
              <p className="text-gray-400 mt-4">Page not found</p>
            </div>
          </div>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App