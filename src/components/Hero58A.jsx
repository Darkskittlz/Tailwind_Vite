import React from 'react'
import Hero23IMG from "../assets/Hero23IMG.jpg"
import "../Styles/App.css"
import { Margin2Container } from '../Styles/Styles'

const Hero58A = () => {
  return (
    <section>
      <Margin2Container>
        <div className="lg:flex-row xs:flex-col md:flex-col m-10 items-center flex">
          <div className="reveal w-full flex align-top">
            {/* <h5 className="text-3xl text-left mt-5 ml-5 absolute font-semibold text-white"><ul className="list-disc list-inside"><li className="listItem">ICONIC STAYS</li></ul></h5> */}
            {/*   <img */}
            {/*     className="rounded-3xl sm:h-full md:h-full lg:h-full xl:h-full" */}
            {/*     src={Hero23IMG} */}
            {/*     alt="cruiseimg" /> */}
          </div>
          <div className="w-5/6 xl:pl-32 lg:pl-0 lg:ml-32 md:ml-0 xs:ml-0 md:pl-0 md:mt-10 xs:w-full xs:mt-5 md:pr-32 reveal">
            <h2 className="mb-10 xl:text-5xl lg:text-4xl xs:text-4xl font-bold leading-4 text-black">Subhead</h2>
            <h3 className="text-2xl xl:text-3xl lg:text-3xl xs:text-3xl xl:mb-5 text-black">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</h3>
          </div>
        </div>
      </Margin2Container>
    </section>
  )
}

export default Hero58A

