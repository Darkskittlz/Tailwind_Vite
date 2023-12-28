import React, { forwardRef } from 'react'
import Hero4Vid from "../assets/Hero4Vid.mp4"
import PropTypes from 'prop-types';

const Hero43 = forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      <div className="flex flex-col justify-around z-0">
        <video className='brightness-75' src={Hero4Vid} loop autoPlay muted />
        <div className="w-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-center text-white font-bold font-oswald md:w-3/4 sm:w-2/4 xs:w-3/4 xs:text-7xl md:text-9xl lg:text-9xl uppercase mb-8">BLING IT ON</h1>
          <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase font-oswald text-white">FINE JEWELRY</h2>
        </div>
      </div>
    </section>
  )
})

Hero43.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

Hero43.displayName = 'Hero43';


export default Hero43


