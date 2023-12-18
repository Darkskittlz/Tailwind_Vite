import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { CarouselContainer, EmblaGridContainer, IMGContainer, InnerContainer1, Margin2Container } from "../Styles/Styles.js"
import Embla1 from "../assets/first_at_sea_chanel.png"
import Embla2 from "../assets/embla2-2.jpg"
import Embla3 from "../assets/Central_Park.jpg"

export const slides = [
  {
    image: Embla1,
    heading: "FIRST AT SEA: CHANEL",
    caption: "Introducing Chanel Watches & Jewelry",
    SubHeader: "REVOLUTION",
    Embla1Super: "SM",
    Embla1Copywright: "®",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: "An iconic brand with a long history of impeccable quality, timeless elegance, and classic style. We’re thrilled to introduce Chanel watches and jewelry to Icon II & III and proud to unveil a significant Royal Caribbean first at sea.",
    Embla1text2: "As a new Central Park destination, the Chanel boutique will draw dedicated brand loyalists and encourage discovery for guests that will step into the world of Chanel for the first time.",
    Embla1text3: "Chanel, the perfect compliment to Icon II and III.",
    ButtonText: "Evolution"
  },
  {
    // image: Embla2,
    heading: "OUR VISION OF DECK 8 ON ICON II & III",
    caption: "Central Park, Star of the Seas",
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
    heading: "A TIMELESS LUXURY LINEUP",
    caption: "Central Park, Harmony of the Seas",
    SubHeader: "TRIED & TRUE",
    Embla3Super: "SM",
    Embla3Copywright: "®",
    Embla3IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla3text: "Starboard remains dedicated to an exquisite collection of timeless, trusted brands that have graced our luxury lineup for years.",
    Embla3text2: "Each brand tells a story of enduring elegance, and we take pride in offering our discerning customers a curated selection that reflects their desire for luxury and style.",
    Embla3text3: "Our superpower is curation.  Our collection of esteemed and relevant brands is carefully assembled to enhance every guest experience, build trust and foster long-term relationships with our luxury clientele.",
    Embla3TextBrands: "Bvlgari, Cartier, Chanel, Swiss Crown, Breitling, Hublot, Tag, Longines, Tissot"
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
                          {slide.Embla1text2}

                          {/* Slide 2 */}
                          {slide.Embla2text}

                          {/* Slide 3 */}
                          {slide.Embla3text}
                          <br />
                          <br />
                          {slide.Embla3text2}
                          <br />
                          <br />
                          {slide.Embla3text3}
                          <br />
                          <br />
                          {slide.Embla3TextBrands}
                          {/* <h4 className='text-center text-1xl'>{slide.Embla3TextBrands}</h4> */}
                        </h3>
                      </div>
                    </InnerContainer1>
                    <CarouselContainer>
                      <h2><ul className="ml-5 list-disc list-inside"><li>{slide.caption}</li></ul></h2>
                      <img
                        className="embla__slide__img"
                        src={slide.image}
                        alt={`IMG${index + 1}`}
                      />
                      <div className="embla__buttons pb-20 flex absolute">
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
                    </CarouselContainer>
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



