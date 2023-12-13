import React from 'react'
import Hero22IMG from "../assets/Hero22IMG.jpg"

const Hero22 = () => {
  return (
    <section>
      <div className="reveal flex flex-col justify-around z-0">
        <img src={Hero22IMG} />
        <div className="w-full h-full justify-center items-center absolute flex flex-col">
          <h1 className="tracking-tight text-center text-white font-bold md:w-3/4 sm:w-2/4 xs:w-3/4 xs:text-7xl md:text-9xl lg:text-9xl uppercase mb-8">Memories Made Over Meals</h1>
          <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase text-white">Iconic Dining</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero22
