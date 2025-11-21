import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Faculty from './pages/Faculty'
import Admissions from './pages/Admissions'
import Placements from './pages/Placements'
import CampusLife from './pages/CampusLife'
import NewsEvents from './pages/NewsEvents'
import Contact from './pages/Contact'
import Disclosures from './pages/Disclosures'
import StudentLogin from './pages/StudentLogin'
import StudentDashboard from './pages/StudentDashboard'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-slate-800">
      <ScrollToTop />
      <Navbar />
      <main className="pt-20">{/* account for sticky header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/campus" element={<CampusLife />} />
          <Route path="/news" element={<NewsEvents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclosures" element={<Disclosures />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student" element={<StudentDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
