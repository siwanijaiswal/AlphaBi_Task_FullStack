import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LogIn } from './components/auth/LogIn'
import { SignUp } from './components/auth/SignUp'
import { Home } from './components/Home'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}
