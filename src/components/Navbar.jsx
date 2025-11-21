import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[var(--color-primary)]"></div>
          <span className="font-semibold text-[var(--color-primary)]">GEC Bhubaneswar</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Courses", "/courses"],
            ["Faculty", "/faculty"],
            ["Admissions", "/admissions"],
            ["Placements", "/placements"],
            ["Campus Life", "/campus"],
            ["News & Events", "/news"],
            ["Contact", "/contact"],
          ].map(([label, to]) => (
            <NavLink key={to} to={to} className={({isActive})=>`hover:text-[var(--color-primary)] ${isActive? 'text-[var(--color-primary)] font-medium':''}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/student/login" className="px-4 py-2 rounded-md bg-[var(--color-primary)] text-white hover:opacity-90 focus:outline-2 focus:outline [--color-primary]">
            Student Hub
          </Link>
        </div>
      </div>
    </header>
  )
}
