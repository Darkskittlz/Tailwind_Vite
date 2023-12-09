import React from 'react'
import Hero28IMG from "../assets/Hero27IMG.jpg"

const Hero28 = () => {
  return (
    <section>
      <div className="reveal flex flex-col justify-around z-0">
        <img className="h-full" src={Hero28IMG} />
        <div className="w-full h-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-center text-white font-bold md:w-3/4 sm:w-2/4 xs:w-3/4 xs:text-7xl md:text-9xl lg:text-9xl uppercase mb-8">Icon Is On The Way</h1>
          <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase">Milestones of Icon's Journey from Finland To Florida</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero28
