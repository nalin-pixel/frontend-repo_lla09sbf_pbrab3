import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="mt-20 bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-3">Gandhi Engineering College</h4>
          <p className="text-sm text-slate-400">Bhubaneswar, Odisha • AICTE Approved • BPUT Affiliated</p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/admissions" className="hover:underline">Admissions</Link></li>
            <li><Link to="/courses" className="hover:underline">Courses</Link></li>
            <li><Link to="/news" className="hover:underline">News & Events</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Student</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/student/login" className="hover:underline">Student Hub Login</Link></li>
            <li><Link to="/student" className="hover:underline">Dashboard</Link></li>
          </ul>
        </div>
        <div className="text-sm text-slate-400">
          <p>© {new Date().getFullYear()} GEC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
