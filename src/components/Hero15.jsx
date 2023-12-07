import React from 'react'
import Video from "../assets/hero15vid.mp4";
import "../Styles/App.css"

const Hero15 = () => {
  return (
    <section>
      <div className="reveal flex flex-col justify-around z-0">
        <video src={Video} autoPlay loop muted />
        <div className="w-full h-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-white font-semibold xs:text-7xl md:text-8xl lg:text-9xl uppercase mb-5">An Icon After Dark</h1>
          <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase">Iconic Nightlife</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero15
