import React, { forwardRef } from 'react'
import Hero10Vid from "../assets/hero10Vid.mp4"
import PropTypes from 'prop-types';

const Hero46 = forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      <div className="flex flex-col justify-around z-0">
        <video src={Hero10Vid} loop autoPlay muted />
        <div className="w-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-center text-white font-bold md:w-3/4 sm:w-2/4 xs:w-3/4 xs:text-7xl md:text-9xl font-oswald lg:text-9xl uppercase mb-8">HANDBAG HAVEN</h1>
          <h2 className="font-semibold font-oswald lg:text-5xl md:text-4xl uppercase text-white">LEATHER</h2>
        </div>
      </div>
    </section>
  )
})

Hero46.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

Hero46.displayName = 'Hero46';


export default Hero46


