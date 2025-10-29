import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import LoginScreen from './components/LoginScreen'
import Dashboard from './components/Dashboard'
import LiveCoaching from './components/LiveCoaching'
import Insights from './components/Insights'
import Feedback from './components/Feedback'
import Settings from './components/Settings'

export default function App(){
  const [screen, setScreen] = useState('login')
  const [agentName, setAgentName] = useState('Priya Sharma')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function handleLogin(name){
    setAgentName(name)
    setIsAuthenticated(true)
    setScreen('dashboard')
  }

  if(!isAuthenticated && screen === 'login'){
    return <LoginScreen onLogin={handleLogin} initialName={agentName} />
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-50">
      <div className="w-full max-w-[1440px] flex shadow-lg bg-white mx-auto">
        <Sidebar screen={screen} setScreen={setScreen} />
        <div className="flex-1 overflow-auto bg-gray-50">
          <motion.div 
            className="flex items-center justify-between bg-white border-b px-6 py-4 lg:px-8 lg:py-5"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="flex items-center gap-6">
              <div className="font-semibold text-lg">CARE — Coaching Dashboard</div>
              <div className="text-sm text-gray-500">{screen.charAt(0).toUpperCase() + screen.slice(1)}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">{agentName}</div>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                {agentName.split(' ').map(n=>n[0]).slice(0,2).join('')}
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={screen} 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -20 }} 
              transition={{ duration: 0.28 }}
            >
              {screen === 'dashboard' && <Dashboard />}
              {screen === 'live' && <LiveCoaching />}
              {screen === 'insights' && <Insights />}
              {screen === 'feedback' && <Feedback />}
              {screen === 'settings' && <Settings />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}