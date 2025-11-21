import { useState } from 'react'

const BURL = import.meta.env.VITE_BACKEND_URL || ''

export default function StudentLogin(){
  const [mode, setMode] = useState('roll')
  const [form, setForm] = useState({ roll:'', dob:'', email:'', password:'' })
  const [error, setError] = useState('')

  async function onSubmit(e){
    e.preventDefault()
    setError('')
    const payload = mode==='roll' ? { roll: form.roll, dob: form.dob } : { email: form.email, password: form.password }
    const res = await fetch(`${BURL}/api/student/login`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    if(!res.ok){ setError('Invalid credentials'); return }
    const data = await res.json()
    localStorage.setItem('student', JSON.stringify(data))
    window.location.href = '/student'
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-3xl font-semibold text-[var(--color-primary)] mb-6">Student Hub Login</h1>
      <div className="flex gap-3 mb-4">
        <button className={`px-3 py-2 rounded ${mode==='roll'?'bg-[var(--color-primary)] text-white':'border'}`} onClick={()=>setMode('roll')}>Roll + DOB</button>
        <button className={`px-3 py-2 rounded ${mode==='email'?'bg-[var(--color-primary)] text-white':'border'}`} onClick={()=>setMode('email')}>Email + Password</button>
      </div>
      <form onSubmit={onSubmit} className="space-y-3">
        {mode==='roll' ? (
          <>
            <input className="w-full border rounded px-3 py-2" placeholder="Roll Number" value={form.roll} onChange={e=>setForm({...form, roll:e.target.value})} required />
            <input className="w-full border rounded px-3 py-2" type="date" placeholder="DOB" value={form.dob} onChange={e=>setForm({...form, dob:e.target.value})} required />
          </>
        ) : (
          <>
            <input className="w-full border rounded px-3 py-2" type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
            <input className="w-full border rounded px-3 py-2" type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required />
          </>
        )}
        {error && <div className="text-red-600 text-sm" role="alert">{error}</div>}
        <button className="w-full px-5 py-3 rounded-md bg-[var(--color-primary)] text-white">Login</button>
      </form>
      <div className="mt-3 text-sm"><a className="underline" href="#">Forgot password?</a> • <a className="underline" href="#">OTP reset</a></div>
    </div>
  )
}
