import React from 'react'

export default function Feedback(){
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Feedback & Training</h2>
        <div className="text-sm text-gray-500">Post-call summary</div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-2">Call Summary</h3>
          <div className="text-sm text-gray-700 mb-3">The AI detected elements of frustration and recommended empathy-first phrasing. Suggested actions were: check order status, offer refund if eligible, and escalate to operations when necessary.</div>

          <h3 className="font-semibold mb-2">Training Suggestions</h3>
          <ol className="list-decimal list-inside text-sm text-gray-700">
            <li>Empathy micro-lessons (10 min)</li>
            <li>Order lookup quick commands</li>
            <li>Escalation decision tree tabletop</li>
          </ol>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-2">Recent Feedback</h3>
          <div className="text-sm text-gray-700">Handled a customer dispute professionally — manager</div>
          <div className="mt-3 text-sm text-gray-700">Score: <span className="font-semibold">88</span></div>
          <div className="mt-4">
            <button onClick={()=>alert('Training scheduled (mock)')} className="bg-blue-600 text-white px-3 py-2 rounded">Schedule training</button>
          </div>
        </div>
      </div>
    </div>
  )
}