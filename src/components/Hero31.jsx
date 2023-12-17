import React, { forwardRef } from 'react'
import Video from "../assets/Hero1Vid.mp4";
import "../Styles/App.css"
import PropTypes from "prop-types";

const Hero31 = forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      <div className="reveal flex flex-col justify-around z-0">
        <video className="h-full" src={Video} autoPlay loop muted />
        <div className="w-full h-full justify-center absolute items-center flex flex-col">
          {/* <h1 className="tracking-tight text-white font-semibold xs:text-7xl md:text-8xl lg:text-9xl uppercase mb-5">Positioning</h1> */}
          {/* <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase">Positioning</h2> */}
        </div>
      </div>
    </section>
  )
});



Hero31.displayName = "Hero31";


export default Hero31

