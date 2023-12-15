import React, { useEffect, useState, forwardRef } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PropTypes from 'prop-types';
import Hero1Vid from "../assets/Hero1Vid.mp4"

const Hero1 = forwardRef(({ scrollToSection }, ref) => {
  const [showExploreDetails, setShowExploreDetails] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      setShowExploreDetails(viewportWidth >= 1021);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <>
      <div className="flex flex-col z-10 xs:mb-28" ref={ref} >
        <video className="h-full" src={Hero1Vid} autoPlay loop muted />
        <div className="w-full items-center absolute lg:mt-64 xs:mt-20 md:mt-48 sm:mt-44 h-2/5 flex flex-col">
          <img className="w-2/4" src="https://images.ctfassets.net/1euybtmvarct/E1AtIFaT27VDaRgIJ5vSd/c5c11fcc52f8b5f156ee2aaa45d53da2/icon-logo.svg" alt="Icon Logo" />
        </div>
        {
          showExploreDetails ? (
            <nav>
              <div className="flex items-end flex-wrap justify-center IconContainer mb-10 z-10 text-center">
                <a
                  onClick={() => {
                    scrollToSection('section1')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer p-2 pl-5 pr-3 bg-white m-2 text-black">
                  The Royal Shops
                  <ArrowDownwardIcon style={{ color: "#3663ae" }} />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section4')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer p-2 pl-5 pr-3 bg-white m-2 text-black">
                  Financial Terms
                  <ArrowDownwardIcon style={{ color: "#3663ae" }} />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section7')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer p-2 pl-5 pr-3 bg-white m-2 text-black">
                  Business Updates
                  <ArrowDownwardIcon style={{ color: "#3663ae" }} />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section10')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer p-2 pl-5 pr-3 bg-white m-2 text-black">
                  Legal Requirements
                  <ArrowDownwardIcon style={{ color: "#3663ae" }} />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section15')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer pl-5 pr-3 p-2 bg-white m-2 text-black">
                  Industry Experience
                  <ArrowDownwardIcon style={{ color: "#3663ae" }} />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section31')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer pl-5 pr-3 p-2 bg-white m-2 text-black">
                  Positioning
                  <ArrowDownwardIcon style={{ color: "#3663ae" }} />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section34')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer pl-5 pr-3 p-2 bg-white m-2 text-black">
                  References
                  <ArrowDownwardIcon style={{ color: "#3663ae" }} />
                </a>
              </div>
            </nav>
          ) : (
            <div className="w-full flex  justify-center">
              <a
                onClick={() => {
                  scrollToSection('section4')
                }}
                className="rounded-full xs:-mt-20 absolute justify-center xs:pt-3 xs:pl-5 xs:pr-5 xs:pb-3 pt-5 pl-10 pr-10 pb-5 bg-white text-black">
                Explore Details
                <ArrowDownwardIcon style={{ color: "#3663ae" }} />
              </a>
            </div>
          )
        }
      </div >
    </>
  )
});

Hero1.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

Hero1.displayName = 'Hero1';

export default Hero1
