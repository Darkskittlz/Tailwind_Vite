import React from 'react'
import Hero4Vid from "../assets/Hero4Vid.mp4"


const Hero4 = () => {
  return (
    <section>
      <div className="reveal flex flex-col justify-around Hero4Container z-10">
        <video src={Hero4Vid} autoPlay loop muted />
        <div className="w-full h-full justify-center items-center absolute flex flex-col">
          <h1 className="tracking-tight text-white font-semibold lg:text-9xl uppercase mb-5">Dial Up The Daring</h1>
          <h2 className="font-semibold lg:text-5xl uppercase">Iconic Thrills</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero4
