import React, { useEffect, useState } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LoyalLogo from "../assets/LoyalPNG.png"
import Hero1Vid from "../assets/Hero1Vid.mp4"

const Hero1 = () => {
  const [showExploreDetails, setShowExploreDetails] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      setShowExploreDetails(viewportWidth >= 960);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <div className="flex flex-col HeroGridContainer z-10">
        <video src={Hero1Vid} className="HeroVideo" autoPlay loop muted />
        <div className="w-full h-full justify-center items-center absolute flex flex-col">
          <img className="w-full md:w-32 lg:w-3/6" src="https://images.ctfassets.net/1euybtmvarct/E1AtIFaT27VDaRgIJ5vSd/c5c11fcc52f8b5f156ee2aaa45d53da2/icon-logo.svg" alt="Icon Logo" />
        </div>
        {showExploreDetails ? (
          <div className="items-end justify-center IconContainer mb-10 text-center">
            <button
              className="rounded-full p-2 pl-5 pr-3 bg-white m-2 text-black">
              Iconic Thrills
              <ArrowDownwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-2 pl-5 pr-3 bg-white m-2 text-black">
              Iconic Chills
              <ArrowDownwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-2 pl-5 pr-3 bg-white m-2 text-black">
              Iconic Wows
              <ArrowDownwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-2 pl-5 pr-3 bg-white m-2 text-black">
              Iconic Stays
              <ArrowDownwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full pl-5 pr-3 p-2 bg-white m-2 text-black">
              Bars & Nightlife
              <ArrowDownwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full pl-5 pr-3 p-2 bg-white m-2 text-black">
              Kids, Teens & Family
              <ArrowDownwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full pl-5 pr-3 p-2 bg-white m-2 text-black">
              Dining
              <ArrowDownwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full pl-5 pr-3 p-2 bg-white m-2 text-black">
              Entertainment
              <ArrowDownwardIcon style={{ color: "#3663ae" }} />
            </button>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <button
              className="rounded-full pt-5 pb-5 pl-10 pr-10 mb-10 HeroButton bg-white text-black">
              Explore Details
              <ArrowDownwardIcon style={{ color: "#3663ae" }} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero1
