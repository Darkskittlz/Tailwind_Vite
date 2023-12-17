import React from 'react'
import OurNextChapterStartsNow from "../assets/our_next_chapter_starts_now.png"
import { BlueBulletContainer, Margin3Container } from '../Styles/Styles'

const Hero6B = () => {
  return (
    <section>
      <Margin3Container>
        <div className="xs:m-10 flex w-full justify-between">
          <BlueBulletContainer>
            <div className="reveal lg:flex-row-reverse xs:flex-col w-full flex  align-top">
              <div className="md:mt-0 md:flex-wrap md:align-baseline justify-center flex md:w-full md:pr-0 xs:w-full xs:pr-10 xs:mt-10">
                <img
                  className="rounded-3xl sm:h-full md:h-5/6 lg:h-5/6 xl:h-5/6"
                  src={OurNextChapterStartsNow}
                  alt="cruiseimg" />
              </div>
              <div className="w-5/6 xl:pl-12 lg:pl-0 md:ml-0 xs:ml-2 md:pl-0 md:pr-32 xs:mb-20 xs:w-full reveal">
                <h5 className="text-2xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">CRUISE & TRAVEL BUSINESS UPDATES</li></ul></h5>
                <h2 className="mb-10 xl:text-5xl lg:text-4xl md:font-semibold xs:text-4xl xs:mt-12 md:mt-0 text-black">OUR NEXT CHAPTER STARTS NOW</h2>
                <h3 className="text-2xl xl:text-4xl lg:text-3xl xs:text-4xl text-black">With our North Star guiding us towards curating a vibrant world with the best vacation retail experience, Starboard and Onboard Media are part of a new joint venture named Global Travel Retail Holdings. <br /> With a super strong financial position, new investors bringing tech capabilities and continued participation by LVMH we are poised for growth and being Royal’s go-to Retail partner.</h3>
              </div>
            </div>
          </BlueBulletContainer>
        </div>
      </Margin3Container>
    </section >
  )
}

export default Hero6B

