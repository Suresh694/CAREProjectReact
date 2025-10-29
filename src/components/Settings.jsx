import React from 'react'

export default function Settings(){
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <div className="bg-white rounded shadow p-4 grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Language</label>
          <select className="w-full border p-2 rounded mt-2">
            <option>English (US)</option>
            <option>Hindi</option>
            <option>English (UK)</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium">Notifications</label>
          <div className="mt-2">
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked/> Coaching tips</label>
            <label className="flex items-center gap-2 mt-2"><input type="checkbox"/> Post-call emails</label>
          </div>
        </div>
      </div>
    </div>
  )
}