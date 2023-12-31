import React, { forwardRef } from 'react'
import Hero1Vid from "../assets/Hero1Vid.mp4"
import PropTypes from 'prop-types';

const Hero40 = forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      <div className="flex flex-col justify-around z-0">
        <video className='brightness-75' src={Hero1Vid} loop autoPlay muted />
        <div className="w-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-center font-oswald text-white font-bold md:w-3/4 sm:w-2/4 xs:w-3/4 xs:text-7xl md:text-9xl lg:text-9xl uppercase mb-8">LEADING WITH LUXURY</h1>
          <h2 className="font-semibold lg:text-5xl font-oswald md:text-4xl uppercase text-white">LUXE & SWISS</h2>
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

