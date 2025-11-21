import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BURL = import.meta.env.VITE_BACKEND_URL || ''

function Stat({label, value}){
  const [count, setCount] = useState(0)
  useEffect(()=>{
    let start = 0
    const end = value
    const duration = 1200
    const step = 16
    const inc = end / (duration/step)
    const id = setInterval(()=>{
      start += inc
      if(start >= end){ setCount(end); clearInterval(id)} else setCount(Math.floor(start))
    }, step)
    return ()=>clearInterval(id)
  }, [value])
  return (
    <div className="p-4 rounded-xl bg-white/70 backdrop-blur border border-slate-200 shadow" aria-live="polite">
      <div className="text-3xl font-bold text-[var(--color-primary)]">{count}+</div>
      <div className="text-slate-600">{label}</div>
    </div>
  )
}

function NewsCard({item}){
  return (
    <Link to={item.cta_href || '/news'} className="block p-5 rounded-xl bg-[#0A2F5A] text-white hover:shadow-xl transition transform hover:-translate-y-0.5" aria-label={`${item.title} - ${item.date}`}>
      <div className="text-xs opacity-80 mb-1">{item.category} • {item.date}</div>
      <h4 className="font-semibold">{item.title}</h4>
      {item.cta_label && <div className="mt-3 inline-block text-sm underline">{item.cta_label}</div>}
    </Link>
  )
}

export default function Home(){
  const [news, setNews] = useState([])

  useEffect(()=>{
    fetch(`${BURL}/api/cms/news`).then(r=>r.json()).then(setNews).catch(()=>{})
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2F5A] to-[#174A8E]"></div>
        <div className="mx-auto max-w-6xl px-4 py-28 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Gandhi Engineering College (GEC), Bhubaneswar</h1>
          <p className="mt-3 text-lg opacity-90">AICTE Approved | BPUT Affiliated | Established 2006</p>
          <div className="mt-6 flex gap-3">
            <Link to="/admissions" className="px-5 py-3 rounded-md bg-white text-[#0A2F5A] font-medium">Apply Now</Link>
            <Link to="/courses" className="px-5 py-3 rounded-md bg-[#D0E2FF] text-[#0A2F5A] font-medium">Explore Courses</Link>
            <Link to="/contact" className="px-5 py-3 rounded-md border border-white/30 font-medium">Contact Us</Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20" aria-hidden="true" style={{backgroundImage:'radial-gradient(circle at 20% 10%, rgba(255,255,255,.5), transparent 40%), radial-gradient(circle at 80% 20%, rgba(255,255,255,.4), transparent 40%)'}}></div>
      </section>

      {/* Ticker */}
      <section className="bg-[#F5F6F7]">
        <div className="mx-auto max-w-6xl px-4 py-3 text-sm">
          <div className="flex gap-6 overflow-x-auto whitespace-nowrap" aria-live="polite">
            {news.slice(0,5).map((n)=> (
              <div key={n.id} className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#D0E2FF] text-[#0A2F5A] text-xs">{n.date}</span>
                <span className="text-slate-700">{n.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Years of Academic Excellence" value={18} />
        <Stat label="Faculty Members" value={150} />
        <Stat label="Students" value={3000} />
        <Stat label="Top Recruiters" value={80} />
      </section>

      {/* Featured News & Events with Student Hub announcement on top */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h3 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">News & Events</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {news.slice(0,3).map(n=> <NewsCard key={n.id} item={n} />)}
        </div>
      </section>

      {/* Footer CTA strip */}
      <section className="bg-[#0A2F5A] text-white">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-medium">Ready to start your journey at GEC?</div>
          <div className="flex gap-3">
            <Link to="/admissions" className="px-5 py-3 rounded-md bg-white text-[#0A2F5A] font-medium">Apply Now</Link>
            <Link to="/student/login" className="px-5 py-3 rounded-md bg-[#D0E2FF] text-[#0A2F5A] font-medium">Student Hub</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
