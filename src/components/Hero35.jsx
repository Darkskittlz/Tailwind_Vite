import React from 'react'
import Hero29IMG from "../assets/Hero28IMG.jpg"
import { MarginContainer } from '../Styles/Styles'

const Hero35 = () => {
  return (
    <section>
      <MarginContainer>
        <div className="lg:flex-row xs:flex-col md:flex-col m-10 items-center flex">
          <div className="reveal w-full flex align-top">
            <h5 className="text-3xl text-left mt-5 ml-5 absolute font-semibold text-white"><ul className="list-disc list-inside"><li className="listItem">ICON OF THE SEAS</li></ul></h5>
            <img
              className="rounded-3xl sm:h-full md:h-full lg:h-full xl:h-full"
              src={Hero29IMG}
              alt="cruiseimg" />
          </div>
          <div className="w-5/6 xl:pl-32 lg:pl-0 lg:ml-32 md:ml-0 xs:ml-0 md:pl-0 md:mt-10 xs:w-full xs:mt-5 md:pr-32 xs:pr-0 reveal">
            <h2 className="md:mb-10 md:text-6xl md:mt-0 xs:mb-5 xs:text-4xl xs:mt-5 font-semibold leading-4 text-black">Departing the Shipyard </h2>
            <h3 className="text-2xl xl:text-3xl lg:text-3xl xs:text-3xl xl:mb-5 text-black">Icon of the Seas<span className='sup'>SM</span> departed Meyer Turku shipyard on November 29 toward Miami, Florida. Follow the historic journey to bring home the best family vacation in the world!</h3>
          </div>
        </div>
      </MarginContainer>
    </section>
  )
}

export default Hero35
