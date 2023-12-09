import React from 'react'
import Hero23IMG from "../assets/Hero23IMG.jpg"
import "../Styles/App.css"
import { Margin2Container } from '../Styles/Styles'

const Hero23 = () => {
  return (
    <section>
      <Margin2Container>
        <div className="lg:flex-row xs:flex-col md:flex-col m-10 items-center flex">
          <div className="reveal w-full flex align-top">
            <h5 className="text-3xl text-left mt-5 ml-5 absolute font-semibold"><ul className="list-disc list-inside"><li className="listItem">ICONIC STAYS</li></ul></h5>
            <img
              className="rounded-3xl sm:h-full md:h-full lg:h-full xl:h-full"
              src={Hero23IMG}
              alt="cruiseimg" />
          </div>
          <div className="w-5/6 xl:pl-32 lg:pl-0 lg:ml-32 md:ml-0 xs:ml-0 md:pl-0 md:mt-10 xs:w-full xs:mt-5 pr-32 reveal">
            <h2 className="mb-10 xl:text-5xl lg:text-4xl xs:text-4xl font-semibold leading-4 text-black">With Over 20 ways to dine onboard, <strong className="italic font-semibold">Icon of the Seas<span className='sup'>SM</span></strong> </h2>
            <h3 className="text-2xl xl:text-3xl lg:text-3xl xs:text-3xl xl:mb-5 text-black">That means more to taste and discover on your culinary adventure together. Whether you’re craving the cheesy slice of the day, freshly made sushi rolls on the go, or a shareable smorgasbord for your whole crew — you’ll always find cuisine to satisfy any mood you’re in without having to wander too far. And every dish is designed to be a treat for the senses, delivered in captivating venues with photo-worthy plating and a side of live entertainment. Onboard The Icon of Vacations<span className='sup'>SM</span>, memorable moments are always on the menu.</h3>
            {/* <div className='HeroGrid'> */}
            {/*   <button */}
            {/*     className="text-left p-5 rounded-full text-4xl bg-white mt-12 text-black"> */}
            {/*     Consumer Flyer */}
            {/*     <ArrowOutwardIcon className='mb-3 ml-5' style={{ color: "#3663ae" }} /> */}
            {/*   </button> */}
            {/*   <button */}
            {/*     className="text-left p-5 rounded-full text-4xl bg-white mt-12 text-black"> */}
            {/*     Customizable Email */}
            {/*     <ArrowOutwardIcon className="mb-3 ml-5" style={{ color: "#3663ae" }} /> */}
            {/*   </button> */}
            {/*   <button */}
            {/*     className="text-left p-5 rounded-full text-4xl bg-white mt-12 text-black"> */}
            {/*     Dining Infographic */}
            {/*     <ArrowOutwardIcon className="mb-3 ml-5" style={{ color: "#3663ae" }} /> */}
            {/*   </button> */}
            {/* </div> */}
          </div>
        </div>
      </Margin2Container>
    </section>
  )
}

export default Hero23
