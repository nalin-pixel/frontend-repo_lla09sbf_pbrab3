import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BURL = import.meta.env.VITE_BACKEND_URL || ''

export default function NewsEvents(){
  const [items, setItems] = useState([])
  useEffect(()=>{ fetch(`${BURL}/api/cms/news`).then(r=>r.json()).then(setItems).catch(()=>{}) },[])
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-[var(--color-primary)] mb-6">News & Events</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map(n=> (
          <Link key={n.id} to={n.cta_href || '/news'} className="p-5 rounded-xl bg-[#0A2F5A] text-white hover:shadow-xl transition">
            <div className="text-xs opacity-80 mb-1">{n.category} • {n.date}</div>
            <h4 className="font-semibold">{n.title}</h4>
            {n.cta_label && <div className="mt-3 inline-block text-sm underline">{n.cta_label}</div>}
          </Link>
        ))}
      </div>
      <div className="mt-8 p-6 rounded-xl bg-[#0A2F5A] text-white">
        <div className="text-sm opacity-80 mb-2">Noticeboard</div>
        <ul className="space-y-2">
          {items.filter(i=>i.pinned).map(i=> <li key={i.id} className="flex items-center gap-2"><span className="px-2 py-0.5 rounded bg-[#D0E2FF] text-[#0A2F5A] text-xs">Pinned</span><span>{i.title}</span></li>)}
        </ul>
      </div>
    </div>
  )
}
