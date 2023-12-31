import React from 'react'
import Hero12IMG from "../assets/hero12IMG.jpg"

const Hero12 = () => {
  return (
    <section>
      <div className="reveal flex flex-col justify-around xs:mt-10 z-0">
        <img src={Hero12IMG} />
        <div className="w-full justify-center items-center absolute flex flex-col">
          <h1 className="tracking-tight text-center text-white font-semibold xs:text-7xl md:text-9xl lg:text-9xl uppercase mb-8">REVOLUTIONIZING IN STORE MERCHANDISING</h1>
          {/* <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase text-white">Iconic Stays</h2> */}
        </div>
      </div>
    </section>
  )
}

export default Hero12
