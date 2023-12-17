import React from 'react'
import { BlueBulletContainer, Margin2Container, Margin3Container } from '../Styles/Styles'
import Hero5IMG from "../assets/hero5IMG.jpg"

const Hero6E = () => {
  return (
    <section>
      <Margin3Container>
        <div className="xs:m-10 flex justify-between">
          <BlueBulletContainer>
            <div className="md:flex-row-reverse xs:mx-10 xs:flex-col justify-between flex">
              <div className="md:mt-0 md:flex-wrap md:align-baseline justify-center flex md:w-full md:pr-0 xs:w-full xs:pr-10 xs:mt-10">
                <img
                  className="rounded-3xl sm:h-full md:h-5/6 lg:h-5/6 xl:h-5/6"
                  // src={Hero5IMG}
                  alt="TECHNOLOGY" />
              </div>
              <div className="w-5/6 xl:pl-12 lg:pl-0 md:ml-0 xs:ml-2 md:pl-0 md:pr-32 xs:mb-20 xs:w-full reveal">
                <h5 className="text-2xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">CRUISE & TRAVEL BUSINESS UPDATES - TECHNOLOGY</li></ul></h5>
                <h2 className="mb-10 xl:text-5xl lg:text-4xl md:font-semibold xs:text-4xl xs:mt-12 md:mt-0 text-black">ECOMMERCE? READY TO DEPLOY NOW</h2>
                <h3 className="text-2xl xl:text-4xl lg:text-3xl xs:text-4xl text-black">
                  You all know this is a passion point of ours; we’ve got the capabilities ready to go now
                </h3>
                <ul className='pl-10 mt-5'>
                  <li className='list-disc'>Pre-Cruise reserve and pick up onboard</li>
                  <li className='list-disc'>Onboard 24/7 shopping</li>
                  <li className='list-disc'>Post cruise new revenue stream</li>
                </ul>
              </div>
            </div>
          </BlueBulletContainer>
        </div>
      </Margin3Container>
    </section>
  )
}

export default Hero6E


