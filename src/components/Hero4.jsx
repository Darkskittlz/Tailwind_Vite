import React from 'react'
import Hero4Vid from "../assets/Hero4Vid.mp4"
import { Margin2Container } from '../Styles/Styles'


const Hero4 = () => {
  return (
    <section>
      <Margin2Container>
        <div className="reveal flex flex-col justify-around z-0">
          <video className="h-full" src={Hero4Vid} autoPlay loop muted />
          <div className="w-full h-full justify-center items-center absolute flex flex-col">
            <h1 className="tracking-tight text-white font-semibold xs:text-7xl md:text-8xl lg:text-9xl uppercase mb-5">Dial Up The Daring</h1>
            <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase">Iconic Thrills</h2>
          </div>
        </div>
      </Margin2Container>
    </section>
  )
}

export default Hero4
