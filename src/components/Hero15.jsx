import React, { forwardRef } from 'react'
import Video from "../assets/hero15vid.mp4";
import "../Styles/App.css"
import PropTypes from 'prop-types';

const Hero15 = forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      <div className="flex flex-col justify-around z-0">
        <video className="h-full" src={Video} autoPlay loop muted />
        <div className="w-full justify-center absolute items-center flex flex-col">
          <h1 className="tracking-tight text-white font-semibold xs:text-7xl md:text-8xl lg:text-9xl uppercase mb-5 text-center">POSITIONING</h1>
          {/* <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase text-white">Iconic Nightlife</h2> */}
        </div>
      </div>
    </section>
  )
});

Hero15.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired
};

Hero15.displayName = 'Hero15';

export default Hero15

