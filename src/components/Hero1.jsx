import React, { useEffect, useState, forwardRef } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PropTypes from 'prop-types';
import Hero1Vid from "../assets/Hero1Vid.mp4"
import { Hero1Header } from '../Styles/Styles';

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
        <video className="" src={Hero1Vid} autoPlay loop muted />
        <div className="w-full absolute items-center lg:mt-64 xs:mt-20 md:mt-48 sm:mt-44 h-2/5 flex flex-col">
          <Hero1Header>
            <h1 className='text-white font-family italic'>ICON RETAIL </h1>
            <h2 className='text-white font-family italic'>ON ICON OF THE SEAS II & III</h2>
          </Hero1Header>
        </div>
        {
          showExploreDetails ? (
            <nav>
              <div className="flex items-end flex-wrap justify-center IconContainer mb-10 z-10 text-center">
                <a
                  onClick={() => {
                    scrollToSection('section40')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer p-2 px-5 bg-white m-2 text-black">
                  Luxe & Swiss
                  <ArrowDownwardIcon className='ml-2' />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section43')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer p-2 px-5 bg-white m-2 text-black">
                  Fine Jewelry
                  <ArrowDownwardIcon className='ml-2' />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section46')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer p-2 px-5 bg-white m-2 text-black">
                  Leather
                  <ArrowDownwardIcon className='ml-2' />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section49')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer p-2 px-5 bg-white m-2 text-black">
                  Fashion Apparel
                  <ArrowDownwardIcon className='ml-2' />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section52')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer px-5 p-2 bg-white m-2 text-black">
                  Marketplace & Pavilions
                  <ArrowDownwardIcon className='ml-2' />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section55')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer px-5 p-2 bg-white m-2 text-black">
                  Beauty
                  <ArrowDownwardIcon className='ml-2' />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section58')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer px-5 p-2 bg-white m-2 text-black">
                  Liquor
                  <ArrowDownwardIcon className='ml-2' />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section61')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer px-5 p-2 bg-white m-2 text-black">
                  Logo
                  <ArrowDownwardIcon className='ml-2' />
                </a>
                <a
                  onClick={() => {
                    scrollToSection('section64')
                  }}
                  className="rounded-full flex items-center relative cursor-pointer px-5 p-2 bg-white m-2 text-black">
                  Kids & Family
                  <ArrowDownwardIcon className='ml-2' />
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
