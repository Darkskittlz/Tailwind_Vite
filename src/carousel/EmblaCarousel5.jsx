import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
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
    Embla1Super: "SM",
    Embla1text: "This is not your average piano bar. This is a battle of the baby grands. Located in the lively Royal Promenade, Dueling Pianos",
    Embla1text2: " is a first-of-its-kind bar in the fleet, bringing a new scale of sing-alongs with nightly high-energy piano performances. Two talented pianists take song requests and go key-to-key, tickling the ivories — and your funny bone. With a full catalog of toe-tapping tunes, belly-busting banter and musical mixology, this interactive show hits all the right notes."
  },
  {
    image: Embla2,
    heading: "GET INTO TREBLE",
    caption: "LOU'S JAZZ 'N BLUES",
    Embla2Super: "SM",
    Embla2Copywright: "®",
    Embla2text: "Welcome to Lou’s Jazz 'n Blues",
    Embla2text2: ", an instrumental addition to Central Park",
    Embla2text3: ". From soulful classics to jazz pop performances, sounds from the house band drift through the lush landscape of this open-air neighborhood. Swing by for cocktails that play ode to legendary favorites — and stay for live music from the Big Easy to the Big Apple. Whether your clients are enjoying ragtime riffs from your table-for-two indoors or setting the mood on an evening stroll during Jazz in the Park, they won’t be able to resist jiving along."
  },
  {
    image: Embla3,
    heading: "LATTES TO LATE NIGHT",
    caption: "RYE & BEAN",
    Embla3Super: "SM",
    Embla3Copywright: "®",
    Embla3text: "From classic cups of joe to coffee-infused cocktails that’ll perk up the night — this is anything but bean there, done that. Start the day and end the evening at Rye & Bean",
    Embla3text2: ", a transformative coffee shop that’s the perfect blend of cozy morning hangout and buzzing late-night bar. Whether your clients' go-to is a flat white or an expertly made espresso martini, they'll find themselves sipping on freshly brewed views at the AquaDome",
    Embla3text3: " from dawn until the very last drop."
  },
  {
    image: Embla4,
    heading: "A HIGH UP HANGOUT",
    caption: "OVERLOOK PODS",
    Embla4Copywright: "®",
    Embla4Super: "SM",
    Embla4text: "Take a night out to new heights — and new sights — at The Overlook",
    Embla4text2: " lounge. With two levels of floor-to-ceiling wraparound windows, the ocean views from inside the awe-inspiring AquaDome",
    Embla4text3: " are unmatched. Your clients can make their way to the glowing garden of Overlook Pods for their most elevated hangout ever. Challenge their friends to a classic board game, lounge around to the live music or cozy up with a cocktail before catching a show at the AquaTheater show. Perfectly perched for prime panoramas, these next-level nooks are the first of their kind at sea — taking laidback to another level."
  },
  {
    image: Embla5,
    heading: "MEET ME AT 1400",
    caption: "1400 LOBBY BAR",
    Embla5Copywright: "®",
    Embla5Super: "SM",
    Embla5text: "Designed with vintage vibes to leave your clients with a first impression that lasts, 1400",
    Embla5text2: " Lobby Bar is the new meetup spot onboard. This bar is the closest your clients will get to the waves — and the first time the Royal Promenade has ever opened up to the outdoors. Kick back and soak up the energy of the bustling indoor boulevard or enjoy a drink with a side of sea breeze on the ocean facing terrace. And indulge in upscale cocktails inspired by the history of shipbuilding and developed with world-renowned mixologist Tony Abou-Ganim."
  },
  {
    image: Embla6,
    heading: "BE THERE IN A PROSECCO",
    caption: "BUBBLES",
    Embla6Copywright: "®",
    Embla6Super: "SM",
    Embla6text: "Make your clients' vacation pop at Bubbles",
    Embla6text2: ", a new walk-up champagne bar in the heart of Central Park",
    Embla6text3: ". Order by the bottle or the glass — it’s always the perfect time for a chilled flute of brut. Start the morning off right with a mimosa or a bright-and-early Bellini. And celebrate moments big and small with a trickling champagne tower that sparkles. All while being serenaded by the soulful sounds of Jazz in the Park."
  },
  {
    image: Embla7,
    heading: "LET THE GOOD TIMES TAKE FLIGHT",
    caption: "POINT & FEATHER",
    Embla7Copywright: "®",
    Embla7Super: "SM",
    Embla7text: "Take a night out across the pond at Point & Feather",
    Embla7text2: ", an English pub that’s pouring up perfect pints and stirring up an all-new menu of spirited sips. Challenge the crew to a game of darts to decide who gets the next round. Or take aim in a thrilling tournament where bragging rights are on the bullseye. Grab a seat wherever you like — with a guitarist’s stage that’s front and center, you’ll hear your song request all the way from the bar to the Royal Promenade."
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
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <IMGContainer>
                  <InnerContainer1>
                    <div className="xs:mb-20">
                      <h5 className="text-3xl text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">ICONIC BARS & NIGHTLIFE</li></ul></h5>
                      <h1 className="mb-5 text-5xl font-semibold text-black mt-2">{slide.heading}</h1>
                      <h3 className="text-2xl xs:text-3xl lg:w-full md:w-full text-black">

                        {slide.Embla1text}
                        <span className='sup'>{slide.Embla1Super}</span>
                        {slide.Embla1text2}

                        {slide.Embla2text}
                        <span className='sup'>{slide.Embla2Super}</span>
                        {slide.Embla2text2}
                        <span className='sup'>{slide.Embla2Copywright}</span>
                        {slide.Embla2text3}

                        {slide.Embla3text}
                        <span className='sup'>{slide.Embla3Super}</span>
                        {slide.Embla3text2}
                        <span className='sup'>{slide.Embla3Super}</span>
                        {slide.Embla3text3}

                        {slide.Embla4text}
                        <span className='sup'>{slide.Embla4Super}</span>
                        {slide.Embla4text2}
                        <span className='sup'>{slide.Embla4Super}</span>
                        {slide.Embla4text3}

                        {slide.Embla5text}
                        <span className='sup'>{slide.Embla5Super}</span>
                        {slide.Embla5text2}

                        {slide.Embla6text}
                        <span className='sup'>{slide.Embla6Super}</span>
                        {slide.Embla6text2}
                        <span className='sup'>{slide.Embla6Copywright}</span>
                        {slide.Embla6text3}

                        {slide.Embla7text}
                        <span className='sup'>{slide.Embla7Super}</span>
                        {slide.Embla7text2}

                      </h3>
                    </div>
                  </InnerContainer1>
                  <InnerContainer2>
                    <h2><ul className="ml-5 list-disc list-inside text-white"><li>{slide.caption}</li></ul></h2>
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





