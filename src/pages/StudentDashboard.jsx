import { useEffect, useState } from 'react'

const BURL = import.meta.env.VITE_BACKEND_URL || ''

export default function StudentDashboard(){
  const [student, setStudent] = useState(null)
  const [attendance, setAttendance] = useState([])
  const [results, setResults] = useState([])
  const [fees, setFees] = useState([])

  useEffect(()=>{
    const s = JSON.parse(localStorage.getItem('student')||'null')
    if(!s){ window.location.href = '/student/login'; return }
    setStudent(s.student)
    fetch(`${BURL}/api/student/${s.student.id}/attendance`).then(r=>r.json()).then(setAttendance)
    fetch(`${BURL}/api/student/${s.student.id}/results`).then(r=>r.json()).then(setResults)
    fetch(`${BURL}/api/student/${s.student.id}/fees`).then(r=>r.json()).then(setFees)
  }, [])

  if(!student) return null
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-[var(--color-primary)] mb-2">Welcome, {student.name}</h1>
      <div className="text-slate-600 mb-6">{student.program} • Semester {student.semester} • {student.department}</div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-white/70 backdrop-blur border shadow">
          <div className="font-medium mb-2">Attendance</div>
          <ul className="space-y-1 text-sm">
            {attendance.map(a=> <li key={a.id} className="flex justify-between"><span>{a.subject}</span><span>{a.percentage}%</span></li>)}
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-white/70 backdrop-blur border shadow">
          <div className="font-medium mb-2">Results</div>
          {results.map(r=> (
            <div key={r.id} className="text-sm">Sem {r.semester}: SGPA {r.sgpa} • CGPA {r.cgpa}</div>
          ))}
        </div>
        <div className="p-5 rounded-xl bg-white/70 backdrop-blur border shadow">
          <div className="font-medium mb-2">Fees</div>
          {fees.map(f=> (
            <div key={f.id} className="text-sm">Sem {f.semester}: {f.status} {f.amount_due ? `• ₹${f.amount_due}`:''}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
