import React from 'react'
import OurNextChapterStartsNow from "../assets/our_next_chapter_starts_now.png"
import { BlueBulletContainer, Margin2Container, Margin3Container } from '../Styles/Styles'

const Hero6C = () => {
  return (
    <section>
      <Margin3Container>
        <div className="xs:m-10 flex justify-between">
          <BlueBulletContainer>
            <div className="reveal lg:flex-row-reverse xs:flex-col w-full flex  align-top">
              <div className="w-5/6 xl:pl-12 lg:pl-0 md:ml-0 xs:ml-2 md:pl-0 md:pr-32 xs:mb-20 xs:w-full reveal">
                <h5 className="text-2xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">CRUISE & TRAVEL BUSINESS UPDATES - PRODUCT</li></ul></h5>
                <h2 className="mb-10 xl:text-5xl lg:text-4xl md:font-semibold xs:text-4xl xs:mt-12 md:mt-0 text-black">LEADING THE WAY WITH "FIRST AT SEA" LAUNCHES</h2>
                <h3 className="text-2xl xl:text-4xl lg:text-3xl xs:text-4xl text-black">It’s true, we like to be first.  And we are always ahead of the game, bringing brands to shops at sea for the first time.</h3>
                <br />
                <br />
                <h3 className="text-2xl xl:text-4xl lg:text-3xl xs:text-4xl text-black text-center">Nate Berkus, Bvlgari, Cartier, Coach, Cuervos & Sobrinos, Engrace Lab Grown Diamonds, Goop Beauty, Gorilla,  Hublot, Kiehls, Michael Kors, Kylie Cosmetics, Loewe Fragrance, Stella McCartney, Mono B, Olaplex, Sephora Collection, Kate Spade, Tiffany & Co., What Goes Around Comes Around</h3>
              </div>
            </div>
          </BlueBulletContainer>
        </div>
      </Margin3Container>
    </section>
  )
}

export default Hero6C


