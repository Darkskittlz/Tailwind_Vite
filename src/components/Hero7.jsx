import React from 'react'
import Video from "../assets/HeroVid.mp4";
import "../Styles/App.css"

const Hero7 = () => {
  return (
    <section>
      <div className="reveal flex flex-col justify-around Hero7Container z-10">
        <video src={Video} autoPlay loop muted />
        <div className="w-full h-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-white lg:text-9xl font-semibold uppercase mb-5">Pool Hop Nonstop</h1>
          <h2 className="font-semibold lg:text-5xl uppercase">Iconic Chills</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero7
