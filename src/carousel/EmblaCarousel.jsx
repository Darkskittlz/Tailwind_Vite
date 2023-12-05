import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { EmblaGridContainer, FlexContainer, IMGContainer, InnerContainer1, InnerContainer2 } from "../Styles/Styles.js"
import Cruise1 from '/Cruise2.jpg'
import Cruise2 from '/Cruise1.jpg'
import Cruise3 from '/Cruise3.jpg'

export const slides = [
  {
    image: Cruise1,
    heading: "TAKE ADVENTURE BY STORM",
    caption: "CATEGORY 6 WATERPARK",
    text: "The storm of the century is brewing — and your clients are in its path. Brace for Category 6, the largest waterpark at sea, with six record-breaking slides. Roaring thunder means the Frightening Bolt is close, and this drop waterslide is the tallest at sea. Once their stomach lurches, it’s too late. They’ll be caught in the Pressure DropSM, the first open free-fall slide at sea. And if your clients are still determined to charge in headfirst, they can grab a friend and take on the first mat racing duo ever to sail, Storm ChasersSM. Or gather the whole crew — and their courage — for Hurricane HunterSM and Storm SurgeSM, doubling up the firsts with not one but two new raft slides the whole family can ride."
  },
  {
    image: Cruise2,
    heading: "Claim the Crown",
    caption: "CROWN'S EDGE",
    text: "Do your clients dare step to the edge of bravery? Only on Icon of the Seas will they encounter the Crown’s EdgeSM — a fear-inducing challenge that’s part skywalk, part ropes course, part thrill ride and an all-out test of courage. Strap in and step onto the walkway. Dare to look down at the crashing waves below — but keep moving. Because when they least expect it, the floor beneath your clients’ feet could collapse and leave them dangling high over the ocean. When the moment of truth comes, only the courageous will conquer."
  },
  {
    image: Cruise3,
    heading: "GO AHEAD AND PLAY FAVORITES",
    caption: "RETURNING FLEET FAVORITES",
    text: "The new Icon of the Seas wouldn’t be complete without all the fleet favorites that make Royal Caribbean® the best family vacation on the planet. And now, 50 years’ worth of memory-maxing experiences are becoming their boldest versions yet. Your clients can perfect their pop-up on the FlowRider® surf simulator. Race to the summit of Adrenaline PeakSM — the ultimate rock-climbing expedition. Get in on a pick-up game at the Sports Court. And pair up for putts at a totally reimagined mini-golf course — where firing up friendly competition is par for the course. Bolder bonding is back by popular demand."
  }
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
                    <div className="xs:mr-20 xs:mb-20">
                      <h5 className="text-3xl text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">ICONIC THRILLS</li></ul></h5>
                      <h1 className="mb-5 text-black text-base/6 mt-2">{slide.heading}</h1>
                      <h3 className="text-2xl text-black text-base/6">{slide.text}</h3>
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

export default EmblaCarousel


