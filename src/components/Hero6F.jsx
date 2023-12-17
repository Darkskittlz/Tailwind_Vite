import React from 'react'
import OurNextChapterStartsNow from "../assets/our_next_chapter_starts_now.png"
import { BlueBulletContainer, Margin2Container, Margin3Container } from '../Styles/Styles'

const Hero6F = () => {
  return (
    <section>
      <Margin3Container>
        <div className="xs:m-10 flex">
          <BlueBulletContainer>
            <div className="xs:mx-10 flex-col flex">
              <div className="w-5/6 xl:pl-12 lg:pl-0 md:ml-0 xs:ml-2 md:pl-0 md:pr-32 xs:mb-20 xs:w-full reveal">
                <h5 className="text-2xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">CRUISE & TRAVEL BUSINESS UPDATES - INNOVATION</li></ul></h5>
                <h2 className="mb-10 md:mt-20 xl:text-5xl lg:text-4xl md:font-semibold xs:text-4xl xs:mt-12 text-black">MAKING SHOPPING EVEN MORE FUN</h2>
                <h3 className="text-2xl xl:text-4xl lg:text-3xl xs:text-4xl text-black">We use digital experiences to engage guests and make their shopping experience more engaging while increasing conversion.
                </h3>
              </div>
            </div>
          </BlueBulletContainer>
        </div>
        <div className="flex mt-24 w-full justify-around">
          <img className='' alt="SKInsight" />
          <img className='' alt="Printed Ribbon" />
          <img className='' alt="Whiskey Quiz" />
        </div>
      </Margin3Container>
    </section>
  )
}

export default Hero6F


