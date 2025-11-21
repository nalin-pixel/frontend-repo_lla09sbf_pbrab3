import { useEffect, useState } from 'react'

const BURL = import.meta.env.VITE_BACKEND_URL || ''

export default function Courses(){
  const [data, setData] = useState([])
  const [q, setQ] = useState({level:'All', branch:'All'})
  useEffect(()=>{ fetch(`${BURL}/api/courses`).then(r=>r.json()).then(setData).catch(()=>{}) },[])
  const filtered = data.filter(c=> (q.level==='All'||c.level===q.level) && (q.branch==='All'||c.branch===q.branch))
  const branches = ['All', ...Array.from(new Set(data.map(d=>d.branch).filter(Boolean)))]
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-[var(--color-primary)] mb-6">Courses</h1>
      <div className="flex gap-3 mb-6">
        <select className="border rounded px-3 py-2" value={q.level} onChange={e=>setQ({...q, level:e.target.value})}>
          {['All','UG','PG'].map(o=> <option key={o}>{o}</option>)}
        </select>
        <select className="border rounded px-3 py-2" value={q.branch} onChange={e=>setQ({...q, branch:e.target.value})}>
          {branches.map(o=> <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map(c=> (
          <div key={c.id} className="p-5 rounded-xl bg-white/70 backdrop-blur border shadow">
            <div className="text-sm text-slate-500">{c.level} • {c.branch}</div>
            <h3 className="font-semibold text-lg">{c.name}</h3>
            <div className="text-sm">Duration: {c.duration}</div>
            <div className="text-sm">Intake: {c.intake}</div>
            <button className="mt-3 text-[var(--color-primary)] underline">View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}
