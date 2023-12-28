import React from 'react'
import Hero26IMG from "../assets/Hero26IMG.jpg"
import "../Styles/App.css"
import { Margin2Container } from '../Styles/Styles'

const Hero32 = () => {
  return (
    <section>
      <Margin2Container>
        <div className="lg:flex-row xs:flex-col md:flex-col m-10 items-center flex">
          <div className="reveal w-full flex align-top">
            <h5 className="text-3xl text-left mt-5 ml-5 absolute font-semibold text-white"><ul className="list-disc list-inside"><li className="listItem">ICONIC ENTERTAINMENT</li></ul></h5>
            <img
              className="rounded-3xl"
              src={Hero26IMG}
              alt="cruiseimg" />
          </div>
          <div className="w-5/6 xl:pl-32 lg:pl-0 lg:ml-32 md:ml-0 xs:ml-0 md:pl-0 md:mt-10 xs:w-full xs:mt-5 md:pr-32 xs:pr-0 reveal">
            <h2 className="mb-10 xl:text-5xl lg:text-4xl xs:text-4xl font-semibold leading-4 text-black">With our boldest entertainment lineup ever, the new <strong className="italic font-semibold">Icon of the Seas<span className='sup'>SM</span></strong> raises the bar on curtain raising.</h2>
            <h3 className="text-2xl xl:text-3xl lg:text-3xl xs:text-3xl xl:mb-5 text-black">Like Broadway-style renditions of storytime classics, productions dreamed up for littles, adults-only comedy shows and live music for any mood. Plus, two new venues that set the stage for spectacular — from the largest ice skating arena at sea to a first-of-its-kind venue that takes the only aqua shows at sea to an unimaginable new level.</h3>
            {/* <div className='HeroGrid'> */}
            {/*   <button */}
            {/*     className="text-left p-5 rounded-full text-4xl bg-white mt-12 text-black"> */}
            {/*     Consumer Flyer */}
            {/*     <ArrowOutwardIcon className='mb-3 ml-5' style={{ color: "#3663ae" }} /> */}
            {/*   </button> */}
            {/*   <button */}
            {/*     className="text-left p-5 rounded-full text-4xl bg-white mt-12 text-black"> */}
            {/*     Web Banners */}
            {/*     <ArrowOutwardIcon className="mb-3 ml-5" style={{ color: "#3663ae" }} /> */}
            {/*   </button> */}
            {/*   <button */}
            {/*     className="text-left p-5 rounded-full text-4xl bg-white mt-12 text-black"> */}
            {/*     Entertainment Infographic */}
            {/*     <ArrowOutwardIcon className="mb-3 ml-5" style={{ color: "#3663ae" }} /> */}
            {/*   </button> */}
            {/*   <button */}
            {/*     className="text-left p-5 rounded-full text-4xl bg-white mt-12 text-black"> */}
            {/*     Bars & Nightlife Infographic */}
            {/*     <ArrowOutwardIcon className="mb-3 ml-5" style={{ color: "#3663ae" }} /> */}
            {/*   </button> */}
            {/* </div> */}
          </div>
        </div>
      </Margin2Container>
    </section>
  )
}

export default Hero32
