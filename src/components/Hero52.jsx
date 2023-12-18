import React, { forwardRef } from 'react'
import Hero52IMG from "../assets/Popping.png"
import PropTypes from 'prop-types';

const Hero52 = forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      <div className="reveal flex flex-col justify-around z-0">
        <img src={Hero52IMG} />
        <div className="w-full h-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-center text-white font-bold md:w-3/4 sm:w-2/4 xs:w-3/4 xs:text-7xl md:text-9xl lg:text-9xl uppercase mb-8">POPPING UP DIFFERENTLY</h1>
          <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase text-white">ICON MARKETPLACE & PAVILIONS</h2>
        </div>
      </div>
    </section>
  )
})


Hero52.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

Hero52.displayName = 'Hero52';

export default Hero52


