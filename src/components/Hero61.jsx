import React, { forwardRef } from 'react'
import Hero10Vid from "../assets/hero10Vid.mp4"
import PropTypes from 'prop-types';

const Hero61 = forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      <div className="flex flex-col justify-around z-0">
        <video className='brightness-75' src={Hero10Vid} loop autoPlay muted />
        <div className="w-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-center text-white font-bold md:w-3/4 sm:w-2/4 xs:w-3/4 xs:text-7xl md:text-9xl lg:text-9xl uppercase font-oswald mb-8">IT'S ICONIC</h1>
          <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase font-oswald text-white">LOGO</h2>
        </div>
      </div>
    </section>
  )
})

Hero61.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

Hero61.displayName = 'Hero61';

export default Hero61
