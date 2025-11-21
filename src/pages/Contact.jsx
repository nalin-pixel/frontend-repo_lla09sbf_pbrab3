export default function Contact(){
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-[var(--color-primary)] mb-4">Contact</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="text-slate-700 mb-2">Badaraghunathpur, PO Madanpur, Bhubaneswar</div>
          <div className="text-slate-700 mb-2">Email: info@gec.edu.in</div>
          <div className="text-slate-700 mb-4">Phone: +91-XXXXXXXXXX</div>
          <div className="h-64 bg-slate-200 rounded"></div>
        </div>
        <form className="space-y-3">
          <input className="w-full border rounded px-3 py-2" placeholder="Name" aria-label="Name" />
          <input className="w-full border rounded px-3 py-2" placeholder="Email" aria-label="Email" />
          <input className="w-full border rounded px-3 py-2" placeholder="Subject" aria-label="Subject" />
          <textarea className="w-full border rounded px-3 py-2" placeholder="Message" rows={5} aria-label="Message" />
          <button className="px-5 py-3 rounded-md bg-[var(--color-primary)] text-white">Send</button>
        </form>
      </div>
    </div>
  )
}
