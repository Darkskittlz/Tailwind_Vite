import React, { forwardRef } from 'react'
import Hero25IMG from "../assets/Hero25IMG.jpg"
import PropTypes from 'prop-types';

const Hero40 = forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      <div className="reveal flex flex-col justify-around z-0">
        <img src={Hero25IMG} />
        <div className="w-full h-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-center text-white font-bold md:w-3/4 sm:w-2/4 xs:w-3/4 xs:text-7xl md:text-9xl lg:text-9xl uppercase mb-8">LEADING WITH LUXURY</h1>
          <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase text-white">LUX & SWISS</h2>
        </div>
      </div>
    </section>
  )
})

Hero40.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

Hero40.displayName = 'Hero40';


export default Hero40

