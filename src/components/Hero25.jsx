import React from 'react'
import Hero25IMG from "../assets/Hero25IMG.jpg"

const Hero25 = () => {
  return (
    <section>
      <div className="reveal flex flex-col justify-around z-0">
        <img src={Hero25IMG} />
        <div className="w-full h-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-center text-white font-bold md:w-3/4 sm:w-2/4 xs:w-3/4 xs:text-7xl md:text-9xl lg:text-9xl uppercase mb-8">REVOLUTIONIZING SHOPPING CONVENIENCE</h1>
          {/* <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase text-white">Iconic Entertainment</h2> */}
        </div>
      </div>
    </section>
  )
}

export default Hero25
