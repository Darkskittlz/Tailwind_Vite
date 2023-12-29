import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { CaptionContainer, Caption11Container, EmblaGridContainer, IMG2Container, IMGContainer, InnerContainer1, InnerContainer2, InnerContainer3, Margin3Container, MarginContainer } from "../Styles/Styles.js"
import Embla1Video from "../assets/BeachToBar/FashionTrendsetter.mp4"
import Embla2 from "../assets/BeachToBar/Athletic_Capsule.png"
import Embla3 from "../assets/BeachToBar/Fashion_Inspiration.png"
import Embla4 from "../assets/BeachToBar/Prince_Greene.png"


export const slides = [
  {
    Embla1Video: Embla1Video,
    heading: "BUILD YOUR LOOK - VIRTUALLY",
    SubHeader: "REVOLUTION",
    Embla1Br: <br />,
    Embla1text: "With so much to do and so little time, our guests need an easier way to find the perfect beach to bar or athleisure look.",
    Embla1text2: `Enter “Virtual Try-On”!  In 6th and Main, guests simply look at their reflection in our super cool AR mirror and select styles from our in-shop and in-stock apparel line-up.  Scrolling capsules and changing looks to discover a perfect match is fast and easy.  And, with our "Complete the Look" feature, guests can try on jewelry, a great hat or coordinating bag to round out their virtual shopping experience.`,
    ButtonText: "EVOLUTION"
  },
  {
    Embla2image: Embla2,
    heading: "INTRODUCING THE NEXT LEVEL OF ONBOARD STYLE",
    caption2: "The Athletic Capsule",
    SubHeader: "REVOLUTION",
    Embla2Br: <br />,
    Embla2text: "Athleisure, the perfect blend of comfort, gym and everything in between.  We understand the importance of offering brands that are accessible to all, which is why we’re pursuing brands like Fabletics, Athleta, Adidas, Vuori and Lululemon. These fashion-forward brands not only embody the latest trends in athleisure, but they also offer a range of price points to suit every guest's budget.",
    Embla2text2: "We're eager to partner with multiple brands to test small, best-selling capsules or explore collaboration opportunities to create an exclusive Royal Caribbean branded collection.",
    ButtonText: "EVOLUTION"
  },
  {
    Embla3image: Embla3,
    heading: "POOL OR BEACH TO BAR",
    caption3: "Fashion Inspiration",
    SubHeader: "EVOLUTION",
    Embla3Br: <br />,
    Embla3text: "Every itinerary is unique and we're curating assortments with looks that are perfect for strolling on the beach, relaxing by the pool or exploring local markets in your favorite ports of call. Our versatile collection seamlessly transitions from day to night, ensuring guests feel stylish throughout their entire dream vacation.",
    Embla3text2: "Inspired by a love of travel and insight into global fashion trends, we're committed to testing and learning with brands and looks that resonate with your guests that ensure they are effortlessly chic and comfortable.",
    ButtonText: "TRIED & TRUE"
  },
  {
    Embla4image: Embla4,
    heading: "RESORT REVERIE",
    caption4: "Prince + Green, Allure of the Seas",
    SubHeader: "EVOLUTION",
    Embla4Br: <br />,
    Embla4text: "Sparked by the grand opening of Prince + Greene on Allure of the Seas we will continue to refine our assortment to be more modern and appealing to Royal Caribbean guests.",
    Embla4text2: "In 2023 we tested a broad range of price points and brands.  We’ve hit our stride with Prince + Greene and will evolve our fashion apparel based on how your guests vote.",
  },
]

const EmblaCarousel6 = (props) => {
  const [hideBullets, setHideBullets] = useState(true);
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      setHideBullets(viewportWidth <= 1530);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <MarginContainer>
        <EmblaGridContainer>
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                    <span>{index + 1}</span>
                  </div>
                  <IMGContainer>
                    <InnerContainer3>
                      <div className="md:mt-0 md:w-full xs:w-full xs:pr-10 xs:mt-20">
                        <h5 className="text-3xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">{slide.SubHeader}</li></ul></h5>
                        <h1 className="mb-10 text-7xl font-bold text-black mt-2">{slide.heading}</h1>
                        <h3 className="xs:text-1xl mb-5 text-black">

                          {/* Slide 1 */}
                          {slide.Embla1text}
                          {slide.Embla1Br}
                          {slide.Embla1Br}
                          {slide.Embla1text2}

                          {/* Slide 2 */}
                          {slide.Embla2text}
                          {slide.Embla2Br}
                          {slide.Embla2Br}
                          {slide.Embla2text2}


                          {/* Slide 3 */}
                          {slide.Embla3text}
                          {slide.Embla3Br}
                          {slide.Embla3Br}
                          {slide.Embla3text2}

                          {/* Slide 4 */}
                          {slide.Embla4text}
                          {slide.Embla4Br}
                          {slide.Embla4Br}
                          {slide.Embla4text2}
                        </h3>

                      </div>
                    </InnerContainer3>
                    <InnerContainer2>
                      {slide.Embla1Video && (
                        <>
                          <div className="lg:h-xx xs:h-md flex justify-end lg:mr-10 xs:mr-0 xs:-mt-48 relative">
                            <video
                              className="lg:mb-0 xs:-mb-36 right-0 rounded"
                              src={slide.Embla1Video}
                              loop
                              autoPlay
                              muted
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
                      {slide.Embla2image && (
                        <>
                          <img src={slide.Embla2image} className="lg:h-tall xs:h-full xs:mb-5 object-cover lg:mr-64 rounded-img" key={`image-${index}-19`} />
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
                      {slide.Embla3image && (
                        <>
                          <img src={slide.Embla3image} className="h-tall mr-28 object-cover rounded-img2" key={`image-${index}-20`} />
                          <div className="embla__buttons pb-8 flex absolute">
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
                      {slide.Embla4image && (
                        <>
                          <img src={slide.Embla4image} className="h-tall lg:mr-20 xs:mr-0 object-cover rounded-img" key={`image-${index}-21`} />
                          <div className="embla__buttons pb-8 flex absolute">
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
      </MarginContainer>
    </section >
  )
}

export default EmblaCarousel6




