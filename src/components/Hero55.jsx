import React, { forwardRef } from 'react'
import Hero1Vid from "../assets/Hero1Vid.mp4"
import PropTypes from 'prop-types';

const Hero55 = forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      <div className="flex flex-col justify-around z-0">
        <video className='brightness-75' src={Hero1Vid} loop autoPlay muted />
        <div className="w-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-center text-white font-bold md:w-3/4 sm:w-2/4 xs:w-3/4 xs:text-7xl md:text-9xl lg:text-9xl font-oswald uppercase mb-8">MIRROR, MIRROR ON THE WALL</h1>
          <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase font-oswald text-white">BEAUTY</h2>
        </div>
      </div>
    </section>
  )
})

Hero55.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

Hero55.displayName = 'Hero55';


export default Hero55


