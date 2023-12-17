import React from 'react'
import { BlueBulletContainer, Margin2Container, Margin3Container } from '../Styles/Styles'

const Hero10A = () => {
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
                  alt="Functionality from www.starboardcruise.com/about-us/" />
              </div>
              <div className="w-5/6 xl:pl-12 lg:pl-0 md:ml-0 xs:ml-2 md:pl-0 md:pr-32 xs:mb-20 xs:w-full reveal">
                <h5 className="text-2xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">INDUSTRY EXPERIENCE</li></ul></h5>
                <h2 className="mb-10 xl:text-5xl lg:text-4xl md:font-semibold xs:text-4xl xs:mt-12 md:mt-0 text-black">We Work with the Best</h2>
                <h3 className="text-2xl xl:text-4xl lg:text-3xl xs:text-4xl text-black">
                  Our cruise line partners offer every type of cruise vacation experience out there – from the Caribbean to the farthest reaches on the planet. From families looking for adventure and fun to ultra-luxury – and everything in between. <br /><br />Plus, we are the only cruise retailer that offers dedicated account teams who build unparalleled, data-driven, cruiseline DNA-infused customized retail offerings for each of our partners.
                </h3>
                <img className="mt-12" alt="Show logos from Starboardcruis.com/our-partners" />
              </div>
            </div>
          </BlueBulletContainer>
        </div>
      </Margin3Container>
    </section>
  )
}

export default Hero10A




