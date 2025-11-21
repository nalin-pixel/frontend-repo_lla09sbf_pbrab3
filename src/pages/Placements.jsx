export default function Placements(){
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-[var(--color-primary)] mb-4">Placements</h1>
      <div className="grid md:grid-cols-4 gap-4">
        {[['Avg Package','5.6 LPA'],['Highest','18 LPA'],['Recruiters','80+'],['Placement %','90%']].map(([k,v])=> (
          <div key={k} className="p-5 rounded-xl bg-white/70 backdrop-blur border shadow">
            <div className="text-slate-500 text-sm">{k}</div>
            <div className="text-2xl font-semibold">{v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
