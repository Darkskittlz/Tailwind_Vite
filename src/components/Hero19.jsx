import React from 'react'
import Hero19IMG from "../assets/HeroIMG19.jpg"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { ClassNames } from '@emotion/react'

const Hero19 = () => {
  return (
    <section>
      <div className="lg:flex-row xs:flex-col md:flex-col m-10 items-center flex">
        <div className="reveal w-full flex justify-center align-top">
          <img
            className="rounded-3xl sm:h-full md:h-full lg:h-full xl:h-full"
            src={Hero19IMG}
            alt="cruiseimg" />
        </div>
        <div className="w-5/6 xl:pl-32 lg:pl-0 lg:ml-32 md:ml-0 xs:ml-0 md:pl-0 md:mt-10 xs:w-full xs:mt-5 pr-32 reveal">
          <h2 className="mb-10 xl:text-5xl lg:text-4xl xs:text-4xl font-bold text-black">The best family vacation in the world takes together time to another level on the all new <span className='italic'>Icon of the Seas</span><span className='sup'>SM</span>.</h2>
          <h3 className="text-2xl xl:text-4xl lg:text-3xl xs:text-3xl xl:mb-5 text-black">Shake up your living room dance parties and supersize your competitive spirit with larger-than-life games at high-energy SurfsideSM festivals for the whole family. Refuel between adventures with plenty of dining options for any age. And tuck in for nightly bedtime stories that’ll leave you feeling happily ever after. Older adventurers can swap screentime for scream time on six record-breaking waterslides at Category 6 waterpark, including two family raft slides. Then win one for the home team with laser tag battles and Royal Escape RoomSM riddles. However you play each day, your family will never forget the best week ever onboard The Icon of Vacations.</h3>
          <div className='flex flex-col mt-4'>
            <button
              className="2xl:w-2/5 xl:w-2/4 xl:pl-8 xl:py-3 lg:w-3/5 lg:p-5 md:w-2/6 md:p-5 sm:w-2/5 xs:w-3/4 xs:p-4 rounded-full text-4xl bg-white mt-20 text-black">
              Consumer Flyer
              <ArrowOutwardIcon className='mb-3 ml-5' style={{ color: "#3663ae" }} />
            </button>
            <button
              className="2xl:w-2/5 xl:w-2/4 lg:w-3/5 md:w-2/6 md:p-5 sm:w-fit xs:w-3/4 xs:p-4 rounded-full text-4xl mt-20 justify-center tracking-tight bg-white py-3 text-black">
              Customizable Email
              <ArrowOutwardIcon className="mb-3 ml-5" style={{ color: "#3663ae" }} />
            </button>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Hero19
