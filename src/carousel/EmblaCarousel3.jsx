import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { CaptionContainer, EmblaGridContainer, IMG2Container, IMGContainer, IMGContainer2, InnerCenterContainer, InnerContainer2, InnerContainer3, InnerIMG3Container, InnerIMG4Container, Margin2Container, Margin3Container, Margin4Container, MarginContainer } from "../Styles/Styles.js"
import Embla1 from "../assets/ItsInTheBag/The_Vault.png"
import Embla2 from "../assets/ItsInTheBag/Little_Treasures.png"
import Embla3 from "../assets/ItsInTheBag/The_Collection.png"
import Embla4 from "../assets/ItsInTheBag/Leather_Logos.png"

export const slides = [
  {
    Emblaimage1: Embla1,
    heading: "THE VAULT",
    caption1: "The Vault",
    SubHeader: "REVOLUTION",
    Embla1Br: <br />,
    Embla1text: "On Icon II & III we will unveil The Vault, a virtual shopping experience that unlocks access to an extended range of handbags and accessories that are onboard yet not on display in The Collection. Momentous change is coming.",
    Embla1text2: "Browse our stunning assortment of pristine, pre-loved styles from Chanel, Christian Dior, Fendi, Gucci, Louis Vuitton, and Hermes. View new collections from Marc Jacobs, Kurt Geiger and more. See detailed handbag descriptions and request a personal shopping appointment – we'll have your favorite pieces ready with a complimentary glass of bubbles.  Convenience and personalized service means our guests will always find their dream handbag.",
    ButtonText: "EVOLUTION"
  },
  {
    Emblaimage2: Embla2,
    heading: "THE COLLECTION WELCOMES LITTLE TREASURES",
    caption2: "Little Treasures",
    SubHeader: "EVOLUTION",
    Embla2Br: <br />,
    Embla2text: "Find the perfect balance of style and affordability with Little Treasures, our carefully curated bridge jewelry collection.",
    Embla2text2: "Guests can express their personal style through fashionable pieces that range from classic to trending to statement designs.  Stunning baubles, priced within reach.  A perfect Little Treasure to remember your cruise vacation and compliment your handbag find.",
    ButtonText: "TRIED & TRUE"
  },
  {
    Emblaimage3: Embla3,
    Emblaimage4: Embla4,
    heading: "THE COLLECTION",
    caption3: "The Collection, Allure of the Seas",
    SubHeader: "TRIED & TRUE",
    Embla3Br: <br />,
    Embla3text: "This highly successful strategy, seamlessly incorporates our proven 'good, better, best' merchandising approach.  The Collection is a stylish and expansive boutique offering styles and brands that deliver a wide range of price points. Guests will find fashion jewelry, trending sunglasses, accessories, and handbags from trendy to artisanal, and contemporary to pre-loved vintage. This winning shopping experience is a Royal Caribbean 'fashion fan favorite'.",
  },
]

const EmblaCarousel3 = (props) => {
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
      <Margin2Container>
        <Margin4Container>
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
                        <div className="md:mt-0 md:w-full xs:w-full xs:pr-10 xs:mt-10">
                          <h5 className="text-3xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">{slide.SubHeader}</li></ul></h5>
                          <h1 className="mb-10 text-7xl font-bold text-black mt-2">{slide.heading}</h1>
                          <h3 className="lg:text-3xl xs:text-1xl mb-5 text-black">

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
                            {slide.Embla3text && (
                              <>
                                {slide.Embla3text}
                                {slide.Embla3Br}
                                {slide.Embla3Br}
                                <div className='w-full lg:-ml-14 xs:mt-20'>
                                  <img className='lg:h-0 xs:h-xs xs:-ml-4' src={slide.Emblaimage4} />
                                </div>
                              </>
                            )}


                          </h3>
                        </div>
                      </InnerContainer3>
                      <InnerContainer2>
                        {slide.Emblaimage1 && (
                          <div className='lg:mr-44 xs:mb-9 xs:mr-4'>
                            <img
                              className="embla__slide__img"
                              src={slide.Emblaimage1}
                              alt={`IMG${index + 1}`}
                            />
                          </div>
                        )}
                        {slide.Emblaimage2 && (
                          <div className='lg:mr-44 xs:mb-9 xs:mr-4'>
                            <img
                              className="embla__slide__img"
                              src={slide.Emblaimage2}
                              alt={`IMG${index + 2}`}
                            />
                          </div>
                        )}
                        {slide.Emblaimage3 && (
                          <div className='lg:mr-44 xs:mb-9 xs:mr-4'>
                            <img
                              className="embla__slide__img"
                              src={slide.Emblaimage3}
                              alt={`IMG${index + 3}`}
                            />
                          </div>
                        )}
                        <div className="embla__buttons pb-28 lg:mt-0 xs:mt-22 xs:mb-22 flex absolute">
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
                      </InnerContainer2>
                    </IMGContainer>
                  </div>
                ))}
              </div>
            </div>
          </EmblaGridContainer>
        </Margin4Container>
      </Margin2Container>
    </section >
  )
}

export default EmblaCarousel3




