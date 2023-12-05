import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { EmblaGridContainer, IMGContainer, InnerContainer1, InnerContainer2 } from "../Styles/Styles.js"
import Embla1 from "../assets/embla4-1.jpg"
import Embla2 from "../assets/embla4-2.jpg"
import Embla3 from "../assets/embla4-3.jpg"
import Embla4 from "../assets/embla4-4.jpg"
import Embla5 from "../assets/embla4-5.jpg"
import Embla6 from "../assets/embla4-6.jpg"
import Embla7 from "../assets/embla5-7.jpg"

export const slides = [
  {
    image: Embla1,
    heading: "A GRAND 'OL TIME",
    caption: "DUELING PIANOS",
    text: "This is not your average piano bar. This is a battle of the baby grands. Located in the lively Royal Promenade, Dueling Pianos(SM) is a first-of-its-kind bar in the fleet, bringing a new scale of sing-alongs with nightly high-energy piano performances. Two talented pianists take song requests and go key-to-key, tickling the ivories — and your funny bone. With a full catalog of toe-tapping tunes, belly-busting banter and musical mixology, this interactive show hits all the right notes.",
  },
  {
    image: Embla2,
    heading: "GET INTO TREBLE",
    caption: "",
    text: "",
  },
  {
    image: Embla3,
    heading: "",
    caption: "",
    text: "",
  },
  {
    image: Embla4,
    heading: "",
    caption: "",
    text: "",
  },
  {
    image: Embla5,
    heading: "",
    caption: "",
    text: "",
  },
  {
    image: Embla6,
    heading: "",
    caption: "",
    text: "",
  },
  {
    image: Embla7,
    heading: "LET THE GOOD TIMES TAKE FLIGHT",
    caption: "POINT & FEATHER",
    text: "Take a night out across the pond at Point & FeatherSM, an English pub that’s pouring up perfect pints and stirring up an all-new menu of spirited sips. Challenge the crew to a game of darts to decide who gets the next round. Or take aim in a thrilling tournament where bragging rights are on the bullseye. Grab a seat wherever you like — with a guitarist’s stage that’s front and center, you’ll hear your song request all the way from the bar to the Royal Promenade.",
  },
]

const EmblaCarousel5 = (props) => {
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
                    <div className="xs:mb-20">
                      <h5 className="text-3xl text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">ICONIC STAYS</li></ul></h5>
                      <h1 className="mb-5 text-black text-base/6 mt-2">{slide.heading}</h1>
                      <h3 className="text-1xl text-base/6 lg:w-full md:w-full text-black">{slide.text}</h3>
                    </div>
                  </InnerContainer1>
                  <InnerContainer2>
                    <h2><ul className="list-disc list-inside"><li>{slide.caption}</li></ul></h2>
                    <img
                      className="embla__slide__img"
                      src={slide.image}
                      alt={`IMG${index + 1}`}
                    />
                    <div className="embla__buttons pb-2 flex absolute">
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

export default EmblaCarousel5





