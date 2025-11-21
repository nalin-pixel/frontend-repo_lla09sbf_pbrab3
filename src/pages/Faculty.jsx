import { useEffect, useState } from 'react'
const BURL = import.meta.env.VITE_BACKEND_URL || ''
export default function Faculty(){
  const [data, setData] = useState([])
  useEffect(()=>{ fetch(`${BURL}/api/faculty`).then(r=>r.json()).then(setData).catch(()=>{}) },[])
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-[var(--color-primary)] mb-6">Faculty</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {data.map(f=> (
          <div key={f.id} className="p-5 rounded-xl bg-white/70 backdrop-blur border shadow">
            <div className="h-32 bg-slate-200 rounded mb-4" aria-hidden="true"></div>
            <h3 className="font-semibold">{f.name}</h3>
            <div className="text-sm text-slate-600">{f.designation} • {f.department}</div>
            {f.specialization && <div className="text-sm">{f.specialization}</div>}
            {f.email && <a href={`mailto:${f.email}`} className="text-sm underline text-[var(--color-primary)]">{f.email}</a>}
          </div>
        ))}
      </div>
    </div>
  )
}
