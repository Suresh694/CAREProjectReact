import React, { useState } from 'react'

export default function Dashboard(){
  const [isOnCall, setIsOnCall] = useState(false)
  const [callTimer, setCallTimer] = useState(0)
  const [transcript, setTranscript] = useState([])
  const [coachingTip, setCoachingTip] = useState('')
  const [sentiment, setSentiment] = useState('Neutral')

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-6">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Coaching Dashboard</h1>
          <p className="text-sm text-gray-500">Overview & quick actions</p>
        </div>
        <div className="text-right bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500 mb-1">On call</div>
          <div className={`text-lg font-semibold ${isOnCall ? 'text-green-600' : 'text-gray-600'}`}>{isOnCall ? 'Active' : 'Idle'}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded shadow p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Real-time Conversation</h3>
            <div className="text-sm text-gray-500">Call timer: 0:00</div>
          </div>
          <div className="h-40 border rounded p-3 overflow-auto bg-gray-50">
            <div className="text-gray-400">No activity — start a call to see live transcript.</div>
          </div>

          <div className="mt-4 flex gap-2">
            <button onClick={()=>{setIsOnCall(true)}} className="bg-blue-600 text-white px-4 py-2 rounded">Start Call</button>
            <button onClick={()=>{setIsOnCall(false)}} className="bg-gray-200 px-4 py-2 rounded">End Call</button>
            <button className="ml-auto text-sm text-blue-600">Go to Insights →</button>
          </div>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-2">Coaching Tip</h3>
          <div className="bg-blue-50 p-3 rounded min-h-[80px]">
            <div className="text-sm text-gray-600">{coachingTip || 'No tips yet — start a call.'}</div>
          </div>

          <h3 className="font-semibold mt-4 mb-2">Performance</h3>
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-blue-600">87</div>
            <div className="text-sm text-gray-500">Agent Score</div>
          </div>

          <h3 className="font-semibold mt-4 mb-2">Sentiment</h3>
          <div className="text-sm text-gray-700">{sentiment}</div>
        </div>
      </div>
    </div>
  )
}