import React, { forwardRef } from 'react'
import Hero15Vid from "../assets/hero15vid.mp4"
import PropTypes from 'prop-types';

const Hero49 = forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      <div className="reveal flex flex-col justify-around z-0">
        <video src={Hero15Vid} autoPlay muted />
        <div className="w-full h-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-center text-white font-bold md:w-3/4 sm:w-2/4 xs:w-3/4 xs:text-7xl md:text-9xl lg:text-9xl uppercase mb-8">BEACH TO BAR</h1>
          <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase text-white">FASHION APPAREL</h2>
        </div>
      </div>
    </section>
  )
})

Hero49.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

Hero49.displayName = 'Hero49';


export default Hero49


