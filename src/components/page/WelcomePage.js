import React from 'react'
import { LogIn } from '../auth/LogIn'

export const WelcomePage = () => {
  return (
    <div className="flex h-screen flex-wrap">
      <div className="flex  flex-col items-center justify-center  gap-4 w-1/2 bg-fuchsia-300 p-4">
        <h1 className="text-4xl font-bold">Welcome to our Website</h1>
        <p className="text-lg">Search for the Perfect GIF for any Occasion</p>
        <p className="text-lg">Endless Entertainment with GIPHY GIFs!!</p>
      </div>

      <div className="w-1/2 bg-gray-100 p-4">
        <LogIn />
      </div>
    </div>
  )
}
