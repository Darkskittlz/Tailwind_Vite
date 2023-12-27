import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { Caption11Container, CaptionContainer, EmblaGridContainer, IMGContainer, InnerContainer1, InnerContainer2, Margin2Container, Margin3Container, Margin4Container } from "../Styles/Styles.js"
import Embla1 from "../assets/CheersToAnIcon/Personalization Station.png"
import Embla2 from "../assets/CheersToAnIcon/Evolution.png"
import Embla3 from "../assets/CheersToAnIcon/Exclusive Travel Edition.png"


export const slides = [
  {
    image: Embla1,
    imgAlt: "",
    heading: "PERSONALIZING RETAIL MANAGEMENT",
    caption1: "Personalization Station",
    SubHeader: "REVOLUTION",
    Embla1Br: <br />,
    Embla1text: "Guests can stand out from the crowd and take their cruise experience to the next level at Starboard’s personalization station located within Port Merchants.",
    Embla1text2: "From celebration of special occasions, creating a family cruise memento, commemorating a significant milestone, conveying a heartfelt message, or customizing a special gift, Starboard can deliver!",
    Embla1text3: "Creativity is encouraged and we take stewardship of the Royal Caribbean brand seriously!  Smart software will ensure compliance with placement, size, and use of pre-approved brand logos to amplify your brand.  A library of celebratory artwork, fonts, and text guidelines will ensure every item is both beautiful and treasured.",
    Embla1text4: "Cheers to unforgettable memories and personalized keepsakes!",
    ButtonText: "EVOLUTION"
  },
  {
    image: Embla2,
    heading: "RAISE YOUR GLASS TO SPIRIT EXPERTS AND MAXIMUM CONVENIENCE",
    caption2: "Part Merchants, Icon II & III",
    SubHeader: "EVOLUTION",
    Embla2Br: <br />,
    Embla2text: "We take pride in our ability to deliver exceptional service tailored to each guest’s individual interests and preferences. Port Merchants is no exception.  Whether you’re looking for high-end spirits or ready to take advantage of travel retail exclusives and value, we’re poised to serve.",
    Embla2text2: "Our spirit experts will earn Certified Professional credentials in Scotch, Bourbon, and Whiskey by the Council of Whiskey Masters. Guests will find a kindred spirit engaging in lively discussions about the history, heritage, and flavor profiles of our selection of premium brands. Private and group tastings will be hosted throughout each cruise, and assistance with recommendations will be our pleasure. ",
    Embla2text3: "Guests wanting the speed and convenience of on-demand shopping won’t be disappointed.  Simple, intuitive, fast – the core principles behind the design of our self-service kiosk and app.  Browse, select, and automatically receive our best pricing with all purchases delivered on the final night of the cruise.",
    Embla2text4: "Whatever our guests prefer, we are at their service on their terms.",
    ButtonText: "TRIED & TRUE"
  },
  {
    image: Embla3,
    heading: "TOP BRANDS AND EXCLUSIVES WITH DUTY FREE SAVINGS",
    SubHeader: "TRIED & TRUE",
    Embla3Br: <br />,
    Embla3text: "Port Merchants will continue to offer our guests' favorite brands with the bonus of larger bottles (1L vs 750ml), duty-free savings and special promotions. ",
    Embla3text2: "Looking for bragging rights back home?  Highly sought after travel retail exclusives are our specialty.  Everything from Hennessy White, Johnny Walker, Angel's Envy, Jack Daniels, Macallan and more!",
    Embla3text3: "And, to keep your memories flooding back to your  favorite port of call, we hand select unique brands guests have discovered on a shore excursion or a beachfront hideaway.",
    Embla3text4: "Salud! Cin Cin! Cheers!",
  },
]


const EmblaCarousel12 = (props) => {
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
          <div className="mb-20 embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                    <span>{index + 1}</span>
                  </div>
                  <IMGContainer>
                    <InnerContainer1>
                      <div className="xs:w-full xs:pr-10 xs:mt-20 md:mt-0 xs:mb-20">
                        <h5 className="text-3xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">{slide.SubHeader}</li></ul></h5>
                        <h1 className="font-bold leading-10 w-5/6 text-black">{slide.heading}</h1>

                        <h3 className="lg:text-3xl xs:text-3xl mb-5 text-black">
                          {slide.Embla1text}
                          {slide.Embla1Br}
                          {slide.Embla1Br}
                          {slide.Embla1text2}
                          {slide.Embla1Br}
                          {slide.Embla1Br}
                          {slide.Embla1text3}
                          {slide.Embla1Br}
                          {slide.Embla1Br}
                          {slide.Embla1text4}
                        </h3>

                        {/* Slide 2 */}
                        {slide.Embla2text}
                        {slide.Embla2Br}
                        {slide.Embla2Br}
                        {slide.Embla2text2}
                        {slide.Embla2Br}
                        {slide.Embla2Br}
                        {slide.Embla2text3}
                        {slide.Embla2Br}
                        {slide.Embla2Br}
                        {slide.Embla2text4}

                        {/* Slide 3 */}
                        <h3 className="lg:text-3xl xs:text-3xl mb-5 text-black">
                          {slide.Embla3text}
                          {slide.Embla3Br}
                          {slide.Embla3Br}
                          {slide.Embla3text2}
                          {slide.Embla3Br}
                          {slide.Embla3Br}
                          {slide.Embla3text3}
                          {slide.Embla3Br}
                          {slide.Embla3Br}
                          {slide.Embla3text4}
                        </h3>

                      </div>
                    </InnerContainer1>
                    <InnerContainer2>
                      {slide.Embla1text && (
                        <Caption11Container>
                          <h2><ul className="ml-5 list-disc list-inside text-SB_Blue"><li>{slide.caption1}</li></ul></h2>
                        </Caption11Container>
                      )}
                      {slide.Embla2text && (
                        <Caption11Container>
                          <h2><ul className="ml-5 list-disc list-inside text-white"><li>{slide.caption2}</li></ul></h2>
                        </Caption11Container>
                      )}
                      {slide.Embla1text && (
                        <>
                          <img
                            className="embla__slide__img"
                            src={slide.image}
                            alt={slide.imgAlt}
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
                        </>
                      )}
                      {slide.Embla2text && (
                        <>
                          <img
                            className="embla__slide__img"
                            src={slide.image}
                            alt={slide.imgAlt}
                          />
                          <div className="embla__buttons pb-20 mt-8 flex absolute">
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
                        </>
                      )}
                      {slide.Embla3text && (
                        <>
                          <div className='mr-thirty_two'>
                            <img
                              className="embla__slide__img"
                              src={slide.image}
                              alt={slide.imgAlt}
                            />
                          </div>
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
                        </>
                      )}
                    </InnerContainer2>
                  </IMGContainer>
                </div>
              ))}
            </div>
          </div>
        </EmblaGridContainer>
      </Margin2Container>
    </section>
  )
}

export default EmblaCarousel12

