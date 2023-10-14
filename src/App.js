import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignUp } from './components/auth/SignUp'
import { Home } from './components/Home'

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
  )
}
