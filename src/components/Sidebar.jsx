import React from 'react'
import logo from '../assets/logo.svg'

export default function Sidebar({screen, setScreen}){
  return (
    <div className="w-56 lg:w-64 bg-white border-r px-4 py-5 lg:px-5 lg:py-6 h-full flex-shrink-0">
      <div className="mb-8 flex items-center gap-4">
        <img src={logo} alt="CARE" className="w-8 h-8 sm:w-10 sm:h-10" />
        <div>
          <div className="font-semibold">CARE</div>
          <div className="text-xs text-gray-500 mt-0.5">Agent Coaching</div>
        </div>
      </div>
      <nav className="space-y-2.5 text-sm">
        <button onClick={()=>setScreen('dashboard')} className={`w-full text-left px-3 py-2 rounded ${screen==='dashboard' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}>Dashboard</button>
        <button onClick={()=>setScreen('live')} className={`w-full text-left px-3 py-2 rounded ${screen==='live' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}>Live Coaching</button>
        <button onClick={()=>setScreen('insights')} className={`w-full text-left px-3 py-2 rounded ${screen==='insights' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}>Insights</button>
        <button onClick={()=>setScreen('feedback')} className={`w-full text-left px-3 py-2 rounded ${screen==='feedback' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}>Feedback</button>
        <button onClick={()=>setScreen('settings')} className={`w-full text-left px-3 py-2 rounded ${screen==='settings' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}>Settings</button>
      </nav>
    </div>
  )
}