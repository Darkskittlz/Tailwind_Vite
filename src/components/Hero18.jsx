import React from 'react'
import Hero18IMG from "../assets/Hero18IMG.jpg"

const Hero18 = () => {
  return (
    <section>
      <div className="reveal flex flex-col justify-around xs:mt-10 z-0">
        <img src={Hero18IMG} />
        <div className="w-full h-full justify-center items-center absolute flex flex-col">
          <h1 className="tracking-tight text-center text-white font-bold xs:text-7xl md:text-9xl lg:text-9xl uppercase mb-8">Full-On Family Fun</h1>
          <h2 className="font-bold lg:text-5xl md:text-4xl uppercase text-white">Iconic Families</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero18
