import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { CaptionContainer, EmblaGridContainer, IMGContainer, InnerContainer1, InnerContainer2 } from "../Styles/Styles.js"
import Embla1 from "../assets/little_treasures.png"
import Embla2 from "../assets/fashion2.png"
// import Embla3 from "../assets/fashion1.png"


export const slides = [
  {
    // image: Embla1,
    imgAlt: "",
    heading: "RAISE YOUR GLASS TO SPIRIT EXPERTS AND MAXIMUM CONVENIENCE",
    caption: "Port Merchants, Icon II & III",
    SubHeader: "REVOLUTION",
    Embla1Br: <br />,
    Embla1text: "",
    Embla1text2: "",
    Embla1text3: "",
    Embla1text4: "",
    ButtonText: "EVOLUTION"
  },
  {
    // image: Embla2,
    imgAlt: "",
    heading: "",
    // caption: "Caption",
    SubHeader: "EVOLUTION",
    Embla1Br: <br />,
    Embla1text: "",
    Embla1text2: "",
    Embla1text3: "",
    Embla1text4: "",
    ButtonText: "TRIED & TRUE"
  },
  {
    // image: Embla3,
    imgAlt: "",
    heading: "",
    // caption: "Caption",
    SubHeader: "TRIED & TRUE",
    Embla1Br: <br />,
    Embla1text: "",
    Embla1text2: "",
    Embla1text3: "",
    Embla1text4: "",
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


  function TimelessElegance() {
    const containsText = document.body.innerText.includes('Timeless Elegance, Unmatched Value')

    return containsText;
  }

  const isTimelessElegance = TimelessElegance();
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

                        {slide.Embla2text}
                        {slide.Embla2Br}
                        {slide.Embla2Br}
                        {slide.Embla2Brands}

                        {slide.Embla3text}
                        {slide.Embla3Br}
                        {slide.Embla3Br}
                        {slide.Embla3Brands}

                      </h3>
                    </div>
                  </InnerContainer1>
                  <InnerContainer2>
                    <CaptionContainer>
                      <h2><ul className="ml-5 list-disc list-inside"><li>{slide.caption}</li></ul></h2>
                    </CaptionContainer>
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

export default EmblaCarousel12

