import React from 'react'
import Hero16IMG from "../assets/hero16IMG.jpg"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const Hero16 = () => {
  return (
    <section>
      <div className="lg:flex-row xs:flex-col md:flex-col m-10 items-center flex">
        <div className="reveal w-full flex justify-center align-top">
          <img
            className="rounded-3xl sm:h-full md:h-full lg:h-full xl:h-full"
            src={Hero16IMG}
            alt="cruiseimg" />
        </div>
        <div className="w-5/6 xl:pl-32 lg:pl-0 lg:ml-32 md:ml-0 xs:ml-0 md:pl-0 md:mt-10 xs:w-full xs:mt-5 pr-32 reveal">
          <h2 className="mb-10 xl:text-5xl lg:text-4xl xs:text-4xl font-semibold xs:font-normal text-black">When the sun goes down, your clients' night onboard Icon of the Seas lights up with possibilities. </h2>
          <h3 className="text-2xl xl:text-3xl lg:text-3xl xs:text-3xl xl:mb-5 text-black">With over 15 buzzing spots and live music venues, every night onboard overflows with ways to raise the bar on spirit-sipping and showstopping. Turn up the volume on unforgettable with rockin' set lists, or catch a battle of the baby grands at Dueling Pianos<span className='sup'> SM</span> — a first-of-its-kind bar in the fleet. Fuel the whole teams’ competitive spirit with a rousing round of darts, brews over billiards and retro arcade classics. Or make it a party for two with starlit sips set to the soundtrack of soulful classics before a sidesplitting stand-up show. There’s never been a night out like going all out onboard the new <strong className='font-semibold'>Icon of the Seas<span className='sup'>SM</span></strong>.</h3>
          {/* <div className='flex flex-col mt-4'> */}
          {/*   <button */}
          {/*     className="2xl:w-2/5 xl:w-2/4 xl:pl-8 xl:py-3 lg:w-3/5 lg:p-5 md:w-2/6 md:p-5 sm:w-2/5 xs:w-3/4 xs:p-4 rounded-full text-4xl bg-white mt-5 text-black"> */}
          {/*     Consumer Flyer */}
          {/*     <ArrowOutwardIcon className='mb-3 ml-5' style={{ color: "#3663ae" }} /> */}
          {/*   </button> */}
          {/*   <button */}
          {/*     className="2xl:w-2/5 xl:w-2/4 xl:pl-8 xl:py-3 lg:w-3/5 lg:p-5 md:w-2/6 md:p-5 sm:w-2/5 xs:w-3/4 xs:p-4 rounded-full text-4xl bg-white mt-5 text-black"> */}
          {/*     Trade Flyer */}
          {/*     <ArrowOutwardIcon className="mb-3 ml-5" style={{ color: "#3663ae" }} /> */}
          {/*   </button> */}
          {/*   <button */}
          {/*     className="2xl:w-2/5 xl:w-2/4 lg:w-3/5 md:w-2/6 md:p-5 sm:w-fit xs:w-3/4 xs:p-4 rounded-full text-4xl mt-5 justify-center tracking-tight bg-white py-3 text-black"> */}
          {/*     Customizable Email */}
          {/*     <ArrowOutwardIcon className="mb-3 ml-5" style={{ color: "#3663ae" }} /> */}
          {/*   </button> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero16

