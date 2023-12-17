import React from 'react'
import { Margin2Container } from '../Styles/Styles'

const Hero8 = () => {
  return (
    <section>
      <Margin2Container>
        <div className="lg:flex-row md:flex-col xs:mx-10 xs:flex-col justify-between flex">
          <div className="reveal w-full flex justify-center align-top">
            <img className="rounded-3xl xl:h-5/6 lg:h-full md:h-full sm:h-full" src="" alt="PhotoIMG" />
          </div>
          <div className="w-5/6 xl:pl-12 xl:mt-24 xl:pr-72 lg:pl-0 md:w-full md:m-10 md:pr-6 md:pl-0 md:pb-32 md:mt-0 xs:mt-10 reveal">
            <h2 className="mb-10 xl:text-5xl lg:text-4xl md:text-4xl md:font-bold md:mt-20 xs:text-4xl xs:mb-6 font-bold text-black">Subhead</h2>
            <h3 className="text-2xl xl:text-4xl lg:text-2xl md:text-4xl text-black">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</h3>
          </div>
        </div>
      </Margin2Container>
    </section>
  )
}

export default Hero8
