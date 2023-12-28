import React, { forwardRef } from 'react'
import Hero15Vid from "../assets/hero15vid.mp4"
import PropTypes from 'prop-types';

const Hero64 = forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      <div className="flex flex-col justify-around z-0">
        <video className='brightness-75' src={Hero15Vid} loop autoPlay muted />
        <div className="w-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-center text-white font-bold md:w-3/4 sm:w-2/4 xs:w-3/4 xs:text-7xl md:text-9xl lg:text-9xl font-oswald uppercase mb-8">ADVENTURE AWAITS</h1>
          <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase font-oswald text-white">KIDS & FAMILY</h2>
        </div>
      </div>
    </section>
  )
})

Hero64.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

Hero64.displayName = 'Hero64';


export default Hero64

