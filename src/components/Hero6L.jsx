import React from 'react'
import { BlueBulletContainer, Margin3Container } from '../Styles/Styles'
import Hero5IMG from "../assets/hero5IMG.jpg"

const Hero6L = () => {
  return (
    <section>
      <Margin3Container>
        <div className="xs:m-10 flex justify-between">
          <BlueBulletContainer>
            <div className="reveal lg:flex-row-reverse xs:flex-col w-full flex  align-top">
              <div className="md:mt-0 md:flex-wrap md:align-baseline justify-center flex md:w-full md:pr-0 xs:w-full xs:pr-10 xs:mt-10">
                <img
                  className="rounded-3xl sm:h-full md:h-5/6 lg:h-5/6 xl:h-5/6"
                  // src={}
                  alt="LOGO SPLASH" />
              </div>
              <div className="w-5/6 xl:pl-12 lg:pl-0 md:ml-0 xs:ml-2 md:pl-0 md:pr-32 xs:mb-20 xs:w-full reveal">
                <h5 className="text-2xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">CRUISE & TRAVEL BUSINESS UPDATES</li></ul></h5>
                <h2 className="mb-10 xl:text-5xl lg:text-4xl md:font-semibold xs:text-4xl xs:mt-12 md:mt-0 text-black">New Business Since 2019</h2>
                <h3 className="text-2xl xl:text-4xl lg:text-3xl xs:text-4xl text-black italic">
                  New Brands: Virgin Voyages, Ritz Carlton Yacht Club, Holland America, Resorts World Cruises, Azamara, Scenic, Crystal
                </h3>
              </div>
            </div>
          </BlueBulletContainer>
        </div>
      </Margin3Container>
    </section>
  )
}

export default Hero6L


