import React from 'react'
import Ripple from '../ui/ripple'

function Loader() {
  return (
    <div className="home h-screen w-screen flex items-center justify-center">
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
        <p className="z-10 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter select-none pointer-events-none text-black/40">
          Loading...
        </p>
        <Ripple className="bg-black/30" />
      </div>
    </div>
  )
}

export default Loader