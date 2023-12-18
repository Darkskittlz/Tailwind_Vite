import React from 'react'
import Hero16IMG from "../assets/hero16IMG.jpg"
import { Margin2Container } from '../Styles/Styles'

const Hero16 = () => {
  return (
    <section>
      <Margin2Container>
        <div className="lg:flex-row xs:flex-col md:flex-col ml-10 mr-10 items-center flex">
          <div className="reveal w-full flex justify-center align-top">
            {/* <img */}
            {/*   className="rounded-3xl sm:h-full md:h-full lg:h-full xl:h-full" */}
            {/*   src={Hero16IMG} */}
            {/*   alt="cruiseimg"  */}
            {/* /> */}
          </div>
          <div className="w-5/6 xl:pl-32 lg:pl-0 lg:ml-32 xs:ml-0 md:pl-0 md:mt-10 xs:w-full xs:mt-5 md:pr-32 xs:pr-0 reveal">
            <h2 className="mb-10 xl:text-5xl lg:text-4xl xs:text-4xl font-semibold xs:mt-12 md:mt-0 text-black">Subhead </h2>
            <h3 className="text-2xl xl:text-4xl lg:text-3xl xs:text-4xl xl:mb-5 text-black">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</h3>
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
      </Margin2Container>
    </section>
  )
}

export default Hero16

