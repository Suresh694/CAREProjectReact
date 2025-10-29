import React from 'react'

export default function Insights(){
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Insights & Analytics</h2>
        <div className="text-sm text-gray-500">Last 30 days</div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-3">Performance Trend</h3>
          <div className="h-48 border rounded flex items-center justify-center text-gray-400">Good</div>

          <h3 className="font-semibold mt-4 mb-2">Top Improvement Areas</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Empathy phrasing</li>
            <li>Faster resolution lookup</li>
            <li>Escalation adherence</li>
          </ul>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-3">Summary</h3>
          <div className="text-sm text-gray-700">Avg Agent Score: <span className="font-semibold">86</span></div>
          <div className="text-sm text-gray-700 mt-2">Positive Sentiment: <span className="font-semibold">42%</span></div>
          <div className="text-sm text-gray-700 mt-2">Avg Handle Time: <span className="font-semibold">6m 30s</span></div>
        </div>
      </div>
    </div>
  )
}