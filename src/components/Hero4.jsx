import React, { forwardRef } from 'react'
import Hero4Vid from "../assets/Hero4Vid.mp4"
import { Margin2Container } from '../Styles/Styles'
import PropTypes from 'prop-types';

const Hero4 = forwardRef((_, ref) => {

  return (
    <section ref={ref}>
      <Margin2Container>
        <div className="flex flex-col justify-around z-0">
          <video className="h-full" src={Hero4Vid} autoPlay loop muted />
          <div className="w-full justify-center items-center absolute flex flex-col">
            <h1 className="tracking-tight text-white font-semibold xs:text-7xl md:text-8xl lg:text-9xl uppercase mb-5">Financial Terms</h1>
            {/* <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase text-white">Iconic Thrills</h2> */}
          </div>
        </div>
      </Margin2Container>
    </section>
  )
});

Hero4.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

Hero4.displayName = 'Hero4';


export default Hero4
