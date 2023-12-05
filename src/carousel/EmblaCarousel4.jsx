import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { EmblaGridContainer, IMGContainer, InnerContainer1, InnerContainer2 } from "../Styles/Styles.js"
import Embla1 from "../assets/embla2-1.jpg"
import Embla2 from "../assets/embla2-2.jpg"
import Embla3 from "../assets/embla2-3.jpg"
import Embla4 from "../assets/embla2-4.jpg"
import Embla5 from "../assets/embla2-5.jpg"
import Embla6 from "../assets/embla2-6.jpg"
import Embla7 from "../assets/embla2-7.jpg"
import Embla8 from "../assets/embla2-8.jpg"
import Embla9 from "../assets/embla2-9.jpg"

export const slides = [
  {
    image: Embla1,
    heading: "CHOOSE YOUR POOLSIDE PARADISE",
    caption: "THE HIDEAWAY",
    text: "Pool days aren’t just for kids on the new Icon of the Seas. Shake up your sea day with ice-cold drinks and sun-drenched hangs. Like the suspended infinity pool that bumps beach club beats. A swim-up bar that doubles as a dance party. And an elevated retreat that's in another stratosphere of chic. Plus, each poolside vibe overflows with lively music, signature cocktail menus and infinite views."
  },
  {
    image: Embla2,
    heading: "SOAK UP THE MEMORIES",
    caption: "WATER'S EDGE POOL",
    text: "Take your pick of family-friendly pools to relax, reconnect and splash the day away. There are more opportunities for family bonding than ever before with refreshing new options like the largest pool at sea and a sprawling oasis where babies, kids and adults alike can unwind from sun-soaked SurfsideSM adventures. And when hunger strikes, your options are as tasty as they are convenient with grab-and-go bites, fresh Mexican faves and an all-new food hall."
  },
  {
    image: Embla3,
    heading: "COCO BEACH CLUB",
    caption: "UPGRADE YOUR POOL DAY",
    text: "For a chic day in the sun filled with next-level lounging, an Icon of the SeasSM vacation lets you indulge from ship to shore. Reserve your own private top-deck casita before you even sail. Or slip away to the elevated pool deck exclusively for suite guests. At Perfect Day at CocoCay, choose from two different vibes — an all-new adults-only dayclub party with The HideoutSM cabanas. Or an exclusive private retreat for the whole family with upgraded menus and overwater cabanas."
  },
  {
    image: Embla4,
    heading: "MEET YOU AT THE CASITA",
    caption: "CASITAS",
    text: "Reserve your very own casita for the day — the ultimate home base where up to eight can soak up endless ocean views with all your pool day needs at hand."
  },
  {
    image: Embla5,
    heading: "A SUSPENDED REALITY",
    caption: "HIDEAWAY POOL",
    text: "Floating in mid-air eight stories up, the Hideaway Pool is no mirage. This engineering marvel is the first of its kind at sea and like nothing your clients have ever seen — or swam — before. Perfectly perched in the center of the new Hideaway neighborhood and with its own resident DJ, it's the ultimate spot to keep the beach club vibes going all day. Designed with disappearing edges for seamless sunsets and full-sized daybeds surrounded by water, this signature infinity pool will make for their most snap-worthy sea day yet."
  },
  {
    image: Embla6,
    heading: "LARGE SCALE LOUNGING",
    caption: `THE ROYAL BAY POOL`,
    text: "There’s always a seat open at the Royal BaySM Pool. With over 40,000 gallons of water, this sprawling oasis is the largest pool at sea — complete with in-water loungers and raised whirlpools offering elevated views. Your clients will find plenty of space to soak up the sun or make a splash. And for a more low-key vibe, cool off nearby in The CoveSM Pool with a disappearing edge and ocean views. Or have it made in the shade of their own tropi-chic domed daybed."
  },
  {
    image: Embla7,
    heading: "HEIGHTEN YOUR EXPECTATIONS",
    caption: `CLOUD 17 <span className="sup">SM</span>`,
    text: `Reach for the sky at Cloud 17 — a new retreat overlooking the ocean. Tucked away on the top deck, this adults-only oasis achieves a new stratosphere of chic with a secluded pool, cantilevered whirlpool, and private access to The Lime & Coconut® bar. Mellow out to live Caribbean music in this open-air sanctuary that’s high above ordinary.`
  },
  {
    image: Embla8,
    heading: "DIVE IN AND ORDER UP",
    caption: `SWIM & TONIC<span className="sup">SM</span>`,
    text: `Drift on over to Swim & Tonic — the largest swim-up bar at sea and the first ever in the Royal Caribbean® fleet. This is the go-to for ice-cold drinks and sun-kissed beats. Submerge into the coolest way to sip and grab a seat at the bar, or kick back on one of the in-water loungers for just a splash of the action. Overflowing with island vibes, the new Swim & Tonic means max refreshment is never more than a wade away.`
  },
  {
    image: Embla9,
    heading: "A SUITE ESCAPE",
    caption: "THE GROVE SUITE SUN DECK",
    text: "Now your clients’ suite gets them access to their own private slice of paradise. Slip away to The Grove Suite Sun Deck — the upgraded pool deck exclusively for VIP guests. This elevated retreat is perched high up in the Suite Neighborhood with endless ocean views across two decks. Take a dip in the pool, unwind in the whirlpool or relax on one of the swinging day beds. Drink orders are always top priority at the nearby bar. And when it’s time for a bite, The Grove presents Mediterranean mezes and elevated dining you can enjoy al fresco — so they never miss a moment of the sun."
  },
]

const EmblaCarousel4 = (props) => {
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
                      <h5 className="text-3xl text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">ICONIC THRILLS</li></ul></h5>
                      <h1 className="mb-5 text-base/6 text-black mt-2">{slide.heading}</h1>
                      <h3 className="text-base/6 text-black">{slide.text}</h3>
                    </div>
                  </InnerContainer1>
                  <InnerContainer2>
                    <h2><ul className="list-disc list-inside"><li>{slide.caption}</li></ul></h2>
                    <img
                      className="embla__slide__img"
                      src={slide.image}
                      alt={`IMG${index + 1}`}
                    />
                    <div className="embla__buttons mt-18 pb-2 flex absolute">
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

export default EmblaCarousel4



