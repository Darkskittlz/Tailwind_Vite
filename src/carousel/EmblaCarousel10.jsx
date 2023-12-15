import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { EmblaGridContainer, IMGContainer, InnerContainer1, InnerContainer2 } from "../Styles/Styles.js"
import Embla1 from "../assets/embla9-1.jpg"
import Embla2 from "../assets/embla9-2.jpg"
import Embla3 from "../assets/embla9-3.jpg"

export const slides = [
  {
    image: Embla1,
    heading: "ICON DEPARTS MEYER TURKU",
    caption: "ICON DEPARTS MEYER TURKU SHIPYARD",
    Embla1Super: "SM",
    Embla1Copywright: "®",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: "It’s go-time! The best family vacation in the world, ",
    Embla1text2: ", departed Meyer Turku shipyard on November 29 toward its highly anticipated debut in Miami, Florida. Follow along on this historic journey and live the excitement firsthand as the Icon of Vacations",
    Embla1text3: " makes its incredible voyage to its new home port — with major milestone moments along the way."
  },
  {
    image: Embla2,
    heading: "CROSSING THE GREAT BELT BRIDGE",
    caption: "ICON OF THE SEAS",
    Embla2Super: "SM",
    Embla2Copywright: "®",
    Embla2IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla2text: "On December 1, ",
    Embla2text2: " — the newest engineering marvel to join the Royal Caribbean",
    Embla2text3: " fleet — crossed beneath the Great Belt Bridge in Denmark with just a few meters of clearance, en route to its new home port in Miami, Florida. From operations to meteorology, Royal Caribbean",
    Embla2text4: " teams contributed their expertise in innovation and engineering to ensure the most revolutionary ship ever cleared the bridge safely."
  },
  {
    image: Embla3,
    heading: "ARRIVAL IN CADIZ",
    caption: "CADIZ, SPAIN",
    Embla3Super: "SM",
    Embla3Copywright: "®",
    Embla3IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla3text: " arrived in Cadiz, Spain on December 5 to welcome its first group of new crew members onboard and begin final touches before the ship's arrival in Miami, Florida. Over the next 19 days, crew members will familiarize themselves with this new class of ship and make last-minute preparations as they await the first guests onboard. Additionally, Central Park",
    Embla3text2: " will be transformed into a tranquil oasis with over 33,000 tropical plants installed along the surroundings of exciting new venues like Bubbles",
    Embla3text3: " and Lou's Jazz 'n Blues",
    Embla3text4: "."
  },
]

const EmblaCarousel10 = (props) => {
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
        <div className="mb-20 embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <IMGContainer>
                  <InnerContainer1>
                    <div className="md:mt-0 xs:w-full xs:pr-10 xs:mt-10">
                      <h5 className="text-3xl text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">AN ICONIC JOURNEY BEGINS</li></ul></h5>
                      <h1 className="mb-16 text-black w-5/6 text-6xl font-semibold">{slide.heading}</h1>

                      {/* Slide 1 */}
                      <h3 className="text-3xl xs:text-3xl leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla1text}
                        {slide.Embla1IOTS}
                        <span className='sup'>{slide.Embla1Super}</span>
                        {slide.Embla1text2}
                        <span className='sup'>{slide.Embla1Super}</span>
                        {slide.Embla1text3}
                      </h3>

                      {/* Slide 2 */}
                      <h3 className="mb-5 text-black text-3xl xs:text-3xl leading-10 mt-2">
                        {slide.Embla2text}
                        {slide.Embla2IOTS}
                        <span className='sup'>{slide.Embla2Super}</span>
                        {slide.Embla2text2}
                        <span className='sup'>{slide.Embla2Copywright}</span>
                        {slide.Embla2text3}
                        <span className='sup'>{slide.Embla2Copywright}</span>
                        {slide.Embla2text4}
                      </h3>

                      {/* Slide 3 */}
                      <h3 className="text-3xl xs:text-4xl leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla3IOTS}
                        {slide.Embla3text}
                        {slide.Embla3Copywright}
                        {slide.Embla3text2}
                        <span className='sup'>{slide.Embla3Super}</span>
                        {slide.Embla3text3}
                        <span className='sup'>{slide.Embla3Super}</span>
                        {slide.Embla3text4}
                      </h3>

                    </div>
                  </InnerContainer1>
                  <InnerContainer2>
                    <h2><ul className="md:ml-5 xs:ml-0 list-disc list-inside text-white"><li>{slide.caption}</li></ul></h2>
                    <img
                      className="embla__slide__img"
                      src={slide.image}
                      alt={`IMG${index + 1}`}
                    />
                    <div className="embla__buttons pb-2 mt-10 flex absolute">
                      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>
                  </InnerContainer2>
                </IMGContainer>
              </div>
            ))}
          </div>
        </div>
      </EmblaGridContainer>
    </section >
  )
}

export default EmblaCarousel10









