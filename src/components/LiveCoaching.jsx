import React, { useState, useEffect, useRef } from 'react'

export default function LiveCoaching(){
  const [callTimer, setCallTimer] = useState(0)
  const [isOnCall, setIsOnCall] = useState(true)
  const [transcript, setTranscript] = useState([
    {who:'Customer', text:"I'm really frustrated with this. I just need help."},
    {who:'Agent', text:'I can certainly help with that. Let me look into your issue.'}
  ])
  const [coachingTip, setCoachingTip] = useState('Be empathetic — acknowledge their concern')
  const [sentiment, setSentiment] = useState('Frustrated')

  useEffect(()=>{
    if(!isOnCall) return
    const t = setInterval(()=>setCallTimer(s=>s+1), 1000)
    return ()=>clearInterval(t)
  },[isOnCall])

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Live Coaching</h2>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500">Timer: {Math.floor(callTimer/60)}:{String(callTimer%60).padStart(2,'0')}</div>
          <button onClick={()=>setIsOnCall(false)} className="bg-red-500 text-white px-3 py-1 rounded">End Call</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded shadow p-4 h-[420px] flex flex-col">
          <div className="flex-1 overflow-auto mb-3" style={{maxHeight: '320px'}}>
            {transcript.map((t,i)=> (
              <div key={i} className={`mb-2 ${t.who==='Customer' ? 'text-gray-800' : 'text-blue-700'}`}><span className="font-semibold">{t.who}:</span> {t.text}</div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <input className="flex-1 border rounded p-2" placeholder="Type a coaching suggestion..." onKeyDown={(e)=>{
              if(e.key==='Enter' && e.currentTarget.value.trim()){ setTranscript(t=>[...t,{who:'Agent', text:e.currentTarget.value}]); e.currentTarget.value=''; }
            }} />
            <button onClick={()=>setTranscript(t=>[...t,{who:'System', text:'Suggested: Mirror customer emotion and propose a solution'}])} className="bg-blue-600 text-white px-4 py-2 rounded">Suggest</button>
          </div>
        </div>

        <div className="bg-white rounded shadow p-4 h-[420px]">
          <h3 className="font-semibold mb-2">AI Coaching Tip</h3>
          <div className="bg-blue-50 p-3 rounded min-h-[120px]">
            <div className="text-sm text-gray-700">{coachingTip}</div>
            <div className="text-xs text-gray-500 mt-2">Tip source: CARE AI — empathy & compliance model</div>
          </div>

          <h3 className="font-semibold mt-4 mb-2">Knowledge Suggestions</h3>
          <div className="space-y-2">
            <div className="border rounded p-2 text-sm">Refund policy</div>
            <div className="border rounded p-2 text-sm">Escalation flow</div>
            <div className="border rounded p-2 text-sm">Order status lookup</div>
          </div>

          <h3 className="font-semibold mt-4 mb-2">Sentiment</h3>
          <div className="text-sm font-medium">{sentiment}</div>
        </div>
      </div>
    </div>
  )
}