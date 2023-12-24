import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { Caption2Container, Carousel2Container, CarouselContainer, EmblaGridContainer, IMGContainer, InnerContainer1, InnerContainer2, InnerIMGContainer, Margin2Container, Margin3Container, Margin4Container, MarginContainer, ModalContainer3 } from "../Styles/Styles.js"
import Embla1 from "../assets/First_At_Sea.png"
import Embla1_Chanel from "../assets/Chanel.png"
import Embla2 from "../assets/Central_Park_HOS.jpg"
import Embla2A from "../assets/Lux&Swiss/Bvlgari.png"
import Embla2B from "../assets/Lux&Swiss/Chanel.png"
import Embla2C from "../assets/Lux&Swiss/Breitling.svg"
import Embla2D from "../assets/Lux&Swiss/Swiss Crown.jpg"
import Embla2E from "../assets/Lux&Swiss/Cartier.png"
import Embla2F from "../assets/Lux&Swiss/Hublot.png"
import Embla2G from "../assets/Lux&Swiss/Tag Heur.png"
import Embla2H from "../assets/Lux&Swiss/Longines.jpg"
import Embla2I from "../assets/Lux&Swiss/Tissot.png"
import Embla3 from "../assets/CentralPark.jpg"

export const slides = [
  {
    image: Embla1,
    Embla1_brandIMG: Embla1_Chanel,
    heading: "FIRST AT SEA: CHANEL",
    Embla1caption: "Introducing Chanel Watches & Jewelry",
    SubHeader: "REVOLUTION",
    Embla1Super: "SM",
    Embla1Br: <br />,
    Embla1Copywright: "®",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: "An iconic brand with a long history of impeccable quality, timeless elegance, and classic style. A First at Sea, we’re thrilled to introduce Chanel watches and fine jewelry to Royal Caribbean Icon II & III.",
    Embla1text2: "Chanel enjoys significant popularity with their brand loyalists and new customers alike.  Both  will step into our world of Chanel and be smitten with our newest wanderlust in Central Park.",
    Embla1text3: "Chanel's iconic jewelry designs and delicate timepieces are the dream compliment to the assortments of BVLGARI, Cartier and other Swiss Luxury brands of Icon II & III.",
    ButtonText: "Evolution"
  },
  {
    image: Embla2,
    Embla2A: Embla2A,
    Embla2B: Embla2B,
    Embla2C: Embla2C,
    Embla2D: Embla2D,
    Embla2E: Embla2E,
    Embla2F: Embla2F,
    Embla2G: Embla2G,
    Embla2H: Embla2H,
    Embla2I: Embla2I,
    heading: "OUR VISION OF DECK 8 ON ICON II & III",
    Embla2caption: "Central Park, Icon II & III",
    SubHeader: "EVOLUTION",
    Embla2Super: "SM",
    Embla2Copywright: "®",
    Embla2IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla2text: "",
    Embla2text2: "",
    ButtonText: "Tried & True"
  },
  {
    image: Embla3,
    heading: "A TIMELESS LINEUP,  A TEAM WORTHY OF THE MISSION.",
    Embla3caption: "Central Park, Harmony of the Seas",
    SubHeader: "TRIED & TRUE",
    Embla3Super: "SM",
    Embla3Br: <br />,
    Embla3Copywright: "®",
    Embla3IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla3text: "Starboard remains dedicated to an exquisite collection of timeless, trusted brands that have graced our luxury lineup for years.",
    Embla3text2: "Each brand has an aura of prestige and distinct hallmarks of heritage, craftsmanship, precision, and exceptional quality.",
    Embla3text3: "Starboard’s Swiss and Lux Ambassadors take pride in their expert ability to showcase each brand, pass on their knowledge and establish a personal connection to guide guests in their selection of a piece that will become a cherished part of their journey through time.",
  },
]

const EmblaCarousel2 = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)


  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  return (
    <section>
      <Margin2Container>
        <EmblaGridContainer>
          <div className="md:mb-20 xs:mb-0 embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                    <span>{index + 1}</span>
                  </div>
                  <IMGContainer>
                    <InnerContainer1>
                      <div className="md:mt-0 xs:w-full xs:pr-10 xs:mt-20 xs:mb-20">
                        <h5 className="text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">{slide.SubHeader}</li></ul></h5>
                        <h1 className="mb-10 font-bold leading-10 text-black mt-2">{slide.heading}</h1>
                        <h3 className="mb-5 text-black">

                          {/* Slide 1 */}
                          {slide.Embla1text}
                          {slide.Embla1Br}
                          {slide.Embla1Br}
                          {slide.Embla1text2}
                          {slide.Embla1Br}
                          {slide.Embla1Br}
                          {slide.Embla1text3}
                          {slide.Embla1Br}
                          {slide.Embla1Br}
                          {slide.Embla1text && (
                            <div className='w-full flex justify-center'>
                              <img src={slide.Embla1_brandIMG} className="h-chanelIMG w-2/3 mr-12 object-cover rounded-img" />
                            </div>
                          )}



                          {/* Slide 2 */}
                          <ModalContainer3>
                            <InnerContainer2>
                              <div className='ml-8'>
                                <h3 className="xs:text-1xl mb-5 text-black">
                                  {slide.Embla4text}
                                </h3>
                              </div>
                            </InnerContainer2>
                            <InnerIMGContainer>
                              <img src={slide.Embla2A} className="" />
                              <img src={slide.Embla2B} className="" />
                              <img src={slide.Embla2C} className="" />
                              <img src={slide.Embla2D} className="" />
                              <img src={slide.Embla2E} className="" />
                              <img src={slide.Embla2F} className="" />
                              <img src={slide.Embla2G} className="" />
                              <img src={slide.Embla2H} className="" />
                              <img src={slide.Embla2I} className="" />
                            </InnerIMGContainer>
                          </ModalContainer3>

                          {/* Slide 3 */}
                          <div className='-mt-96'>
                            {slide.Embla3Br}
                            {slide.Embla3Br}
                            {slide.Embla3text}
                            {slide.Embla3Br}
                            {slide.Embla3Br}
                            {slide.Embla3text2}
                            {slide.Embla3Br}
                            {slide.Embla3Br}
                            {slide.Embla3text3}
                          </div>

                        </h3>
                      </div>
                    </InnerContainer1>
                    <Carousel2Container>
                      <h2><ul className="text-white ml-5 list-disc list-inside"><li>{slide.Embla1caption}</li></ul></h2>
                      <h2><ul className="text-white ml-5 list-disc list-inside"><li>{slide.Embla2caption}</li></ul></h2>
                      <h2><ul className="ml-5 list-disc list-inside"><li>{slide.Embla3caption}</li></ul></h2>
                      <img
                        className="embla__slide__img"
                        src={slide.image}
                        alt={`IMG${index + 1}`}
                      />
                      <div className="embla__buttons pb-20 flex absolute">
                        {/* <button className="embla__prev mr-10" onClick={scrollPrev}> */}
                        {/*   Prev */}
                        {/* </button> */}
                        {/* <button className="embla__next" onClick={scrollNext}> */}
                        {/*   Next */}
                        {/* </button> */}
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <button
                          className='forwardButton'
                          onClick={onNextButtonClick}
                          disabled={nextBtnDisabled}
                        >
                          {slide.ButtonText}
                          <NextButton
                            className="pr-8 py-5 ml-3 items-center flex"
                          />
                        </button>
                      </div>
                    </Carousel2Container>
                  </IMGContainer>
                </div>
              ))}
            </div>
          </div>
        </EmblaGridContainer>
      </Margin2Container>
    </section >
  )
}

export default EmblaCarousel2



