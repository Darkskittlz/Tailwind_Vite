import React from 'react'
import Hero5IMG from "../assets/hero5IMG.jpg"
import { BlueBulletContainer, Margin3Container } from '../Styles/Styles'

const Hero5 = () => {
  return (
    <section>
      <Margin3Container>
        <div className="xs:m-10 flex justify-around">
          <BlueBulletContainer>
            <div className="md:flex-row-reverse xs:mx-10 xs:flex-col justify-between flex">
              <div className="w-full flex justify-center align-top">
                <img
                  className="rounded-3xl sm:h-full md:h-5/6 lg:h-5/6 xl:h-5/6"
                  // src={Hero5IMG}
                  alt="FINANCIAL TERMS IMG" />
              </div>
              <div className="w-5/6 xl:pl-12 lg:pl-0 md:ml-0 xs:ml-2 md:pl-0 md:pr-32 xs:mb-20 xs:w-full reveal">
                <h5 className="text-2xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">FINANCIAL TERMS</li></ul></h5>
                <h2 className="mb-10 md:mt-20 xl:text-5xl lg:text-4xl md:font-semibold xs:text-4xl xs:mt-12 text-black">SUBHEAD
                </h2>
                <h3 className="text-2xl xl:text-4xl lg:mb-10 lg:text-3xl xs:text-4xl text-black">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</h3>
                <button className='rounded-full font-semibold border-black text-2xl bg-white md:mt-0 p-7 text-black'>PDF</button>
              </div>
            </div>
          </BlueBulletContainer>
        </div>
      </Margin3Container>
    </section>
  )
}

export default Hero5

