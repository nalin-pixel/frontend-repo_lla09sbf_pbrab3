export default function Disclosures(){
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-[var(--color-primary)] mb-4">Mandatory Disclosures</h1>
      <details className="p-4 rounded-xl bg-white/70 backdrop-blur border shadow mb-3">
        <summary className="cursor-pointer font-medium">AICTE Approval</summary>
        <div className="mt-2 text-slate-700">Approval documents available for download.</div>
      </details>
      <details className="p-4 rounded-xl bg-white/70 backdrop-blur border shadow mb-3">
        <summary className="cursor-pointer font-medium">BPUT Affiliation</summary>
        <div className="mt-2 text-slate-700">Affiliation details and codes.</div>
      </details>
    </div>
  )
}
