import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { Caption11Container, CaptionContainer, EmblaGridContainer, IMGContainer, InnerContainer1, InnerContainer2, InnerContainer6, Margin2Container, Margin3Container, Margin4Container } from "../Styles/Styles.js"
import Embla1 from "../assets/AdventureAwaits/Sugar_Beach.png"
import EmblaVid from "../assets/AdventureAwaits/StandardStore.mp4"
import Embla3 from "../assets/AdventureAwaits/Plush_Growth.png"


export const slides = [
  {
    image: Embla1,
    heading: "SPLASHY TOWN",
    SubHeader: "REVOLUTION",
    Embla1Br: <br />,
    Embla1text: `Welcome to “Splashy Town” a magical space designed for families and kids.  This pint-sized seaside town on the banks of Splashaway Bay is located within the former Sugar Beach.  Inside, kid-inspired storefronts will stir tiny imaginations.`,
    Embla1text2: "Adorable baby fish plush and favorites from Jellycat and Squishmallow are new cuddly companions with matching blankies for Once Upon a Bedtime story nights.  Keeping tiny hands and minds busy is important when you’re out exploring the world and our array of packable toys are not just fun, they spark creative play.  Little minds dive deep with our sea-going pretend and dress-up costumes transforming our little cruisers into brave pirates, mythical mermaids, knights, princesses, sailors and more. And, what’s an adventure without memories?  Similar to Logo, our personalization station, ensures every child can add their name to souvenir keepsakes.",
    Embla1text3: "Come aboard and dive into a world of fun and imagination at “Splashy Town”, because every childhood is a voyage worth sailing!",
    ButtonText: "REVOLUTION"
  },
  {
    Embla2Vid: EmblaVid,
    heading: "TAP, SHOP, AND GO",
    SubHeader: "REVOLUTION",
    Embla2Br: <br />,
    Embla2text: "Shop in minutes, check out in seconds and never wait in line. Sunshine & Sundries will feature another first at sea – Tap, Shop, and Go!",
    Embla2text2: `From essentials and “fun in the sun” must haves to snacks and more, simply tap your Seapass card at the door, pick-up what you need and go.`,
    Embla2text3: "We guarantee to be hassle-free!  This seamless and privacy focused solution is powered by state-of-the-art AI cameras. With no gates or shelf sensors, nothing stands in the way of your perfect day!",
    Embla2text4: "#moretimeforfun",
    ButtonText: "EVOLUTION"
  },
  {
    image: Embla3,
    heading: "2023 RECORD BREAKING PLUSH RESULTS",
    SubHeader: "TRIED & TRUE",
    Embla3Br: <br />,
    Embla3text: "Current revenue tally: $1.7M YTD in 2023 vs. $1.1M for full year 2019 our previous peak revenue year, an increase of +55%.",
    Embla3text2: "Plush unit sales increased to 109,000 units YTD in 2023 vs. 71,000 for full year 2019 our previous peak volume year, an increase of +51%.",
    Embla3text3: "Plush is here to stay and on a solid track to keep growing!",
  },
]


const EmblaCarousel18 = (props) => {
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
                        </h3>

                        {/* Slide 2 */}
                        <h3 className="lg:text-3xl xs:text-3xl mb-5 text-black">
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
                        </h3>

                        {/* Slide 3 */}
                        <h3 className="lg:text-3xl xs:text-3xl mb-5 text-black">
                          {slide.Embla3text}
                          {slide.Embla3Br}
                          {slide.Embla3Br}
                          {slide.Embla3text2}
                          {slide.Embla3Br}
                          {slide.Embla3Br}
                          {slide.Embla3text3}
                        </h3>

                      </div>
                    </InnerContainer1>
                    <InnerContainer2>
                      {slide.Embla1text && (
                        <>
                          <img
                            className="embla__slide__img"
                            src={slide.image}
                          />
                          <div className="embla__buttons lg:pb-12 xs:pb-12 flex absolute">
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
                        <IMGContainer>
                          <div className="h-tall flex justify-end mr-10 relative">
                            <video
                              loop
                              className="w-5/6 right-0 rounded-img2"
                              src={slide.Embla2Vid}
                              autoPlay
                              muted
                            />
                          </div>
                          <div className="embla__buttons bottom-0 flex absolute">
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
                        </IMGContainer>
                      )}
                      {slide.Embla3text && (
                        <>
                          <div className='mr-thirty_two'>
                            <img
                              className="xs:hidden lg:flex embla__slide__img"
                              src={slide.image}
                            />
                          </div>
                          <div className="embla__buttons lg:pb-12 xs:pb-12 flex absolute">
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

export default EmblaCarousel18

