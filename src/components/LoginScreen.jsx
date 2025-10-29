import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function LoginScreen({onLogin, initialName='Agent'}){
  const [name, setName] = useState(initialName)
  const [password, setPassword] = useState('')

  function submit(e){
    e.preventDefault()
    onLogin(name)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} className="w-full max-w-[760px] bg-white rounded-lg shadow-xl p-8 sm:p-10">
        <h2 className="text-2xl font-semibold mb-3">CARE — Agent Login</h2>
        <p className="text-sm text-gray-500 mb-8">Sign in to start coaching and live assist.</p>
        <form onSubmit={submit} className="grid gap-6">
          <input required value={name} onChange={(e)=>setName(e.target.value)} className="border p-3 rounded" placeholder="Agent name" />
          <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="border p-3 rounded" placeholder="Password" />
          <div className="flex items-center justify-between">
            <label className="text-sm"><input type="checkbox" className="mr-2"/> Remember me</label>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign in</button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}