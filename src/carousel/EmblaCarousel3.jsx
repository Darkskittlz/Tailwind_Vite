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


export const slides = [
  {
    image: "https://images.ctfassets.net/1euybtmvarct/7bSPidnBxxnxCpHrc8LVlG/9910f45d730be821f323be20e4097f15/RCI_IC_Infinite_Balcony_OV_View_CGI59_RET__1_.jpg?w=1600&h=1524&q=50&fm=webp",
    heading: "VIEWS FOR DAYS",
    caption: "INFINITE OCEAN VIEW BALCONY",
    text: "When your clients are out to sea, they’ll want to see the sea. And there’s no shortage of spectacular ocean views right from their room on the game-changing new Icon of the Seas. Push a button to invite the sea breeze in — new Infinite Balcony rooms transform their living space into an extended oceanside escape. Enjoy spectacular vistas each and every day from the comfort and privacy of their own room. The best way to explore the world is by sea – and a balcony stateroom is the perfect way to get a little bit closer to everything!",
    bullet1: 'Infinite Ocean View Balcony',
    bullet2: 'Family Infinite Ocean View Balcony',
    bullet3: 'Infinite Central Park View Balcony',
    bullet4: 'Ocean View Large Balcony',
    bullet5: 'Connecting Ocean View Balcony',
    bullet6: 'Ocean View Balcony',
    bullet7: 'Central Park View Balcony',
    bullet8: 'Surfside Family View Balcony',
    button: "View All Balconies"
  },
  {
    image: "",
    heading: "",
    caption: "",
    text: ""
  },
  {
    image: "",
    heading: "",
    caption: "",
    text: ""
  },
  {
    image: "",
    heading: "",
    caption: "",
    text: ""
  },
  {
    image: "",
    heading: "",
    caption: "",
    text: ""
  },
  {
    image: "",
    heading: "",
    caption: "",
    text: ""
  },
]

const EmblaCarousel3 = (props) => {
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
                      <h3 className="text-2xl text-base/6 lg:w-full md:w-2/4 text-black">{slide.text}</h3>
                      <div className='grid-cols-2 grid lg:w-full md:w-2/4 mt-2 mb-2'>
                        <ul className="list-disc list-inside">
                          <li className="listItem text-black">{slide.bullet1}</li>
                          <li className="listItem text-black">{slide.bullet2}</li>
                          <li className="listItem text-black">{slide.bullet3}</li>
                          <li className="listItem text-black">{slide.bullet4}</li>
                        </ul>
                        <ul className="list-disc list-inside">
                          <li className="listItem text-black">{slide.bullet5}</li>
                          <li className="listItem text-black">{slide.bullet6}</li>
                          <li className="listItem text-black">{slide.bullet7}</li>
                          <li className="listItem text-black">{slide.bullet8}</li>
                        </ul>
                      </div>
                      <button className='rounded-full border-black text-3xl bg-white mt-4 p-7 text-black'>{slide.button}
                        <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
                      </button>
                    </div>
                  </InnerContainer1>
                  <InnerContainer2>
                    <h2><ul className="list-disc list-inside"><li>{slide.caption}</li></ul></h2>
                    <img
                      className="embla__slide__img"
                      src={slide.image}
                      alt={`IMG${index + 1}`}
                    />
                    <div className="embla__buttons">
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

export default EmblaCarousel3




