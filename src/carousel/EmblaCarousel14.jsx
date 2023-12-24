import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { Caption10Container, Caption2Container, Caption3Container, Caption4Container, Caption6Container, Caption7Container, Caption8Container, Caption9Container, CaptionContainer, EmblaGridContainer, IMG3Container, IMGContainer, InnerContainer1, InnerContainer2, InnerContainer3, InnerContainer4, InnerContainer5, InnerIMG2Container, InnerIMG3Container, InnerIMGContainer, ModalContainer, ModalContainer2, ModalContainer3 } from "../Styles/Styles.js"
import Embla2A from "../assets/Azamara.png"
import Embla2B from "../assets/Crystal.png"
import Embla2C from "../assets/Holland.png"
import Embla2D from "../assets/Virgin.jpg"
import Embla2E from "../assets/Resorts World.jpg"
import Embla2F from "../assets/Scenic.png"
import Embla2G from "../assets/Silversea.png"
import Embla2H from "../assets/Ritz Carlton.png"
import Embla2I from "../assets/Royal Caribbean.webp"
import Embla2J from "../assets/Carnival.png"
import Embla2K from "../assets/Celebrity.png"
import Embla2L from "../assets/Costa.webp"
import Embla3A from "../assets/lisa_bauer_caption.png"
import Embla3B from "../assets/Claudia_caption.png"
import Embla4 from "../assets/CarylCapeci.jpg"
import Embla5 from "../assets/squish.jpg"

export const slides = [
  {
    Embla1SubHeader: "INDUSTRY EXPERIENCE",
    heading: "RFP RESPONSES TO INDUSTRY EXPERIENCE",
    Embla1Br: <br />,
    Embla1text: "Relevant clients",
    Embla1text2: "Starboard industry expertise",
  },
  {
    Embla2SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - NEW BUSINESS SINCE 2019",
    heading: "WE WORK WITH THE BEST",
    Embla2Br: <br />,
    Embla2text: "Our cruise line partners offer every type of cruise vacation experience out there – from the Caribbean to the farthest reaches on the planet. From families looking for adventure and fun to ultra-luxury – and everything in between.",
    Embla2text2: "Plus, we are the only cruise retailer that offers dedicated account teams who build unparalleled, data-driven, cruise line DNA-infused customized retail offerings for each of our partners. ",
    Embla2image:
    {
      1: Embla2A,
      2: Embla2B,
      3: Embla2C,
      4: Embla2D,
      5: Embla2E,
      6: Embla2F,
      7: Embla2G,
      8: Embla2H,
      9: Embla2I,
      10: Embla2J,
      11: Embla2K,
      12: Embla2L
    },
  },
  {
    Embla3image: Embla3A,
    Embla3image2: Embla3B,
    Embla3SubHeader: "INDUSTRY EXPERIENCE",
    heading: "TWO LEADERS THAT TRULY GET ROYAL",
    Embla3CaptionA: "Lisa Bauer, CEO",
    Embla3CaptionB: "Claudia King-McWilliams, VP & General Manager Royal Carribean",
    Embla3Br: <br />,
    Embla3text: "With CEO Lisa Bauer, and Claudia King-McWilliams, VP & General Manager of the Royal Caribbean account, we have two senior leaders that honed their expertise with Royal Caribbean.  They get you, your guests, and how to maximize results and guest experience on a deeper level than any other cruise retail leadership team.",
  },
  {
    Embla4image: Embla4,
    Embla4Caption: "Caryl Capeci, SVP of Fine Jewelry & Watches",
    Embla4SubHeader: "INDUSTRY EXPERIENCE",
    heading: "INVESTING IN FINE JEWELRY, SWISS, AND LUXE TALENT",
    Embla4Br: <br />,
    Embla4text: "With CEO Lisa Bauer, and Claudia King-McWilliams, VP & General Manager of the Royal Caribbean account, we have two senior leaders that honed their expertise with Royal Caribbean.  They get you, your guests, and how to maximize results and guest experience on a deeper level than any other cruise retail leadership team.",
    Embla4text2: "Transitioning from her advisory role, Caryl brings a wealth of experience and leadership, having previously served as the CEO of Hearts on Fire®, The World's Most Perfectly Cut Diamond®.",
    Embla4text3: "Industry Boards/Involvement:",
    Embla4text4: "Diamonds Do Good",
    Embla4text5: "The American Gem Society, AGS",
    Embla4text6: "Jewelers of America",
    Embla4text7: "Distinguished member of the 24 Karat Club, NYC",
  },
  {
    Embla5image: Embla5,
    Embla5Caption: "Sara Loiselle swinging with Squishmallow",
    Embla5SubHeader: "INDUSTRY EXPERIENCE",
    heading: "INTRODUCING SARA LOISELLE",
    Embla5Br: <br />,
    Embla5text: "Starboard is thrilled to introduce Sara Loiselle, our new Toy, Plush, and Game Buyer.  Sarah will be solely dedicated to delivering offerings for kids and families that are exciting, relevant and profitable.",
    Embla5text2: "With a remarkable background in the industry, Sara brings over 15 years of kid’s, tweens, and teens experience to the table.  She is perfectly positioned to  find and onboard the latest irresistible toys, plush and collectibles, plus viral and trending must-haves across all ages to Icon II & III.",
    Embla5text3: "Expect a step change in guest satisfaction, revenue generation, and overall onboard happiness."
  },
]


const EmblaCarousel14 = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)


  return (
    <section>
      <EmblaGridContainer>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container2">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <IMG3Container>
                  <InnerContainer5>
                    <div className="md:mt-0 md:w-full md:p-5 xs:w-full xs:pr-10 xs:mt-10 ">
                      <h5 className="text-3xl text-white text-left font-semibold">
                        <ul className="list-disc list-inside">
                          <li className="listItem">
                            {slide.Embla1SubHeader}
                            {slide.Embla2SubHeader}
                            {slide.Embla3SubHeader}
                            {slide.Embla4SubHeader}
                            {slide.Embla5SubHeader}
                          </li>
                        </ul>
                      </h5>
                      <h1 className="mb-10 text-3xl font-bold text-black mt-2">{slide.heading}</h1>
                      <h3 className="xs:text-1xl mb-5 text-black">

                        {/* Slide 1 */}
                        {slide.Embla1text && (
                          <h3 className="xs:text-1xl mb-5 text-black">
                            {slide.Embla1text}
                            {slide.Embla1Br}
                            {slide.Embla1Br}
                            {slide.Embla1text2}
                          </h3>
                        )}

                        {/* Slide 2 */}
                        {slide.Embla2text && (
                          <ModalContainer3>
                            <div className=''>
                              <h3 className="xs:text-1xl mb-5 text-black">
                                {slide.Embla2text}
                                {slide.Embla2Br}
                                {slide.Embla2Br}
                                {slide.Embla2text2}
                              </h3>
                            </div>
                            <InnerIMG3Container>
                              <img src={slide.Embla2image['1']} className="" key={`image-${index}-1`} />
                              <img src={slide.Embla2image['2']} className="" key={`image-${index}-2`} />
                              <img src={slide.Embla2image['3']} className="" key={`image-${index}-3`} />
                              <img src={slide.Embla2image['4']} className="" key={`image-${index}-4`} />
                              <img src={slide.Embla2image['5']} className="" key={`image-${index}-5`} />
                              <img src={slide.Embla2image['6']} className="" key={`image-${index}-6`} />
                              <img src={slide.Embla2image['7']} className="" key={`image-${index}-7`} />
                              <img src={slide.Embla2image['8']} className="" key={`image-${index}-8`} />
                              <img src={slide.Embla2image['9']} className="" key={`image-${index}-9`} />
                              <img src={slide.Embla2image['10']} className="" key={`image-${index}-10`} />
                              <img src={slide.Embla2image['11']} className="" key={`image-${index}-11`} />
                              <img src={slide.Embla2image['12']} className="" key={`image-${index}-12`} />
                              <img src={slide.Embla2image['13']} className="" key={`image-${index}-13`} />
                              <img src={slide.Embla2image['14']} className="" key={`image-${index}-14`} />
                              <img src={slide.Embla2image['15']} className="" key={`image-${index}-15`} />
                              <img src={slide.Embla2image['16']} className="" key={`image-${index}-16`} />
                              <img src={slide.Embla2image['17']} className="" key={`image-${index}-17`} />
                            </InnerIMG3Container>
                          </ModalContainer3>
                        )}

                        {/* Slide 3 */}
                        {slide.Embla3text && (
                          <div className='w-full justify-between flex'>
                            <div className='w-2/4 -mt-24'>
                              <h3 className="xs:text-1xl mb-5 text-black">
                                {slide.Embla3Br}
                                {slide.Embla3Br}
                                {slide.Embla3text}
                              </h3>
                            </div>
                            <div className='flex gap-3'>
                              <img src={slide.Embla3image} className="h-md object-cover rounded-img" key={`image-${index}-18`} />
                              <img src={slide.Embla3image2} className="h-md object-cover rounded-img" key={`image-${index}-19`} />
                            </div>
                          </div>
                        )}

                        {slide.Embla4text && (
                          <div className='w-full flex justify-between'>
                            <div className='w-2/4 -mt-24'>
                              {slide.Embla4Br}
                              {slide.Embla4Br}
                              {slide.Embla4text}
                              {slide.Embla4Br}
                              {slide.Embla4Br}
                              {slide.Embla4text2}
                              {slide.Embla4Br}
                              {slide.Embla4Br}
                              {slide.Embla4text3}
                              {slide.Embla4Br}
                              {slide.Embla4text4}
                              {slide.Embla4Br}
                              {slide.Embla4text5}
                              {slide.Embla4Br}
                              {slide.Embla4text6}
                              {slide.Embla4Br}
                              {slide.Embla4Br}
                              {slide.Embla4text7}
                            </div>
                            <Caption9Container>
                              <h2>
                                <ul className="ml-5 list-disc list-inside">
                                  <li>
                                    {slide.Embla4Caption}
                                  </li>
                                </ul>
                              </h2>
                            </Caption9Container>
                            <div >
                              <img src={slide.Embla4image} className="h-tall mr-12 object-cover rounded-img" key={`image-${index}-30`} />
                            </div>
                          </div>
                        )}


                        {slide.Embla5text && (
                          <div className='w-full flex justify-between'>
                            <div className='w-2/4 -mt-24'>
                              {slide.Embla5Br}
                              {slide.Embla5Br}
                              {slide.Embla5text}
                              {slide.Embla5Br}
                              {slide.Embla5Br}
                              {slide.Embla5text2}
                              {slide.Embla5Br}
                              {slide.Embla5Br}
                              {slide.Embla5text3}
                            </div>
                            <Caption10Container>
                              <h2>
                                <ul className="ml-5 list-disc list-inside">
                                  <li>
                                    {slide.Embla5Caption}
                                  </li>
                                </ul>
                              </h2>
                            </Caption10Container>
                            <div >
                              <img src={slide.Embla5image} className="h-tall mr-12 object-cover rounded-img" key={`image-${index}-30`} />
                            </div>
                          </div>
                        )}




                      </h3>
                    </div>
                  </InnerContainer5>

                  <div className="embla__buttons bottom-0 flex absolute">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <button
                      className='forwardButton'
                      onClick={onNextButtonClick}
                      disabled={nextBtnDisabled}
                    >
                      <NextButton
                        className="pr-8 py-5 ml-3 items-center flex"
                      />
                    </button>
                  </div>

                </IMG3Container>
              </div>
            ))}
          </div>
        </div>
      </EmblaGridContainer>
    </section >
  )
}

export default EmblaCarousel14




