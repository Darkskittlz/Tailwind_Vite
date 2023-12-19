import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { CaptionContainer, EmblaGridContainer, IMGContainer, InnerContainer1, InnerContainer2, Margin3Container, MarginContainer } from "../Styles/Styles.js"
import Embla1 from "../assets/little_treasures.png"
import Embla2 from "../assets/fashion2.png"
// import Embla3 from "../assets/fashion1.png"


const timelessEleganceIframe = (
  <iframe
    src="https://giphy.com/embed/eYOrzs9VdJWfWzkU7x"
    width="480"
    height="270"
    className="giphy-embed"
    allowFullScreen
  ></iframe>
);



export const slides = [
  {
    // image: Embla1,
    imgAlt: "Eduardo's renderings of marketplace and pavilions on 6",
    heading: "Subhead",
    // caption: "Caption",
    SubHeader: "REVOLUTION",
    Embla1Br: <br />,
    Embla1text: "Copy Direction: Icon Marketplace + Pavilions designs – this is how we envision execution of pop up on pavilions on 6",
    Embla1text2: "",
    Embla1text3: "",
    ButtonText: "EVOLUTION"
  },
  {
    // image: Embla2,
    imgAlt: "Insert Photo",
    heading: "RESORT REVERIE",
    // caption: "Caption",
    SubHeader: "EVOLUTION",
    Embla2Br: <br />,
    Embla2text: "Copy Direction: Edited assortment, 'decluttering', elevated presentation, increase guest satisfaction onboard & amplify those products that guests voted for in 2023, continue to test/learn based on real time feedback loop from purchase patterns on, use data to steer us to product categories.",
    ButtonText: "TRIED & TRUE"
  },
  {
    image: timelessEleganceIframe,
    heading: "Timeless Elegance, Unmatched Value",
    caption: "Caption",
    SubHeader: "TRIED & TRUE",
    Embla3Br: <br />,
    Embla3text: "Guests may indulge in the perfect blend of value and quality with our carefully selected collection of timeless watches and fashion jewelry. Guests with discerning tastes appreciate renowned brands such as Invicta, Citizen, Bulova, and our proprietary brand, Shae. Our commitment to offering these trusted names at affordable prices not only ensures satisfaction for our customers but also drives purchases across a diverse range of demographics, providing a valuable onboard shopping experience for everyone.",
    Brands: "Citizen, Bulova, Shae, Invicta, IOG, Charms – guests like to shop in an environment out of shop that offers great value (40% of our revenue)",
  },
]


const EmblaCarousel = (props) => {
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
      <MarginContainer>
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

                          {slide.Embla2text}

                          {slide.Embla3text}
                          {slide.Embla3Br}
                          {slide.Embla3Br}
                          {slide.Brands}

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
                      <iframe src={slide.image} width="480" height="270" className='giphy-embed' allowFullScreen></iframe>
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
      </MarginContainer>
    </section >
  )
}

export default EmblaCarousel


