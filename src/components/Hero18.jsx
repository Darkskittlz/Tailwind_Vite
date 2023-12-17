import React, { forwardRef } from 'react'
import Hero18IMG from "../assets/Hero18IMG.jpg"
import PropTypes from 'prop-types';

const Hero18 = forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      <div className="reveal flex flex-col justify-around xs:mt-10 z-0">
        <img src={Hero18IMG} />
        <div className="w-full h-full justify-center items-center absolute flex flex-col">
          <h1 className="tracking-tight text-center text-white font-bold xs:text-7xl md:text-9xl lg:text-9xl uppercase mb-8">REFERENCES</h1>
          {/* <h2 className="font-bold lg:text-5xl md:text-4xl uppercase text-white">Iconic Families</h2> */}
        </div>
      </div>
    </section>
  )
})

Hero18.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired
};

Hero18.displayName = 'Hero18';

export default Hero18
