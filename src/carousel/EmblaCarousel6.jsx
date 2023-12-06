import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { EmblaGridContainer, IMGContainer, InnerContainer1, InnerContainer2 } from "../Styles/Styles.js"
import Embla1 from "../assets/embla5-1.jpg"
import Embla2 from "../assets/embla5-2.jpg"
import Embla3 from "../assets/embla5-3.jpg"
import Embla4 from "../assets/embla5-4.jpg"
import Embla5 from "../assets/embla5-5.jpg"
import Embla6 from "../assets/embla5-6.jpg"
import Embla7 from "../assets/embla5-7.jpg"

export const slides = [
  {
    image: Embla1,
    heading: "BIG TIME PLAY TIME",
    caption: "LARGER THAN LIFE FAMILY FESTIVAL",
    text: "When you’re a kid, bigger is always better. The Larger Than Life Family Festival supersizes friendly competition with giant versions of everyone’s favorites. Like colossal bowling pins, a towering ring toss target, giant darts and more. Between rounds, dance to live music and refuel with grab-and-go grub from your new faves across SurfsideSM. And it’s all hosted by everyone’s favorite host and new BFF, Admiral Awesome — for an afternoon that stacks up to their huge imaginations.",
  },
  {
    image: Embla2,
    heading: "FIN-FILLED FAMILY FUN",
    caption: "THE BIG SHARK BLOCK PARTY",
    text: "Grab the fam and dive into a SurfsideSM block party that makes a splash — The Big Shark Block Party. Look out for Admiral Awesome and friends giving out fins for dress-up time and leading the dance party to all your favorite marine mashups. Get in on the motion high above the ocean and reef-rock out to all the coastal classics from Baby Shark to Baby Beluga and more.",
  },
  {
    image: Embla3,
    heading: "SWEET DREAMS FROM SURFSIDE",
    caption: "BEDTIME STORY",
    text: "Pack your plushie friends and your softest blankies for Once Upon a Bedtime Story — the coziest way to wind down after a day of family fun in SurfsideSM. Join Admiral Awesome under the stars and cue calm vibes with a sleepy-time stretch sesh and a new, original bedtime story every night that'll leave you feeling happily ever after.",
  },
  {
    image: Embla4,
    heading: "A JAM FOR THE WHOLE FAM",
    caption: "STEEL PAN IMAGE",
    text: "Drum up new memories — and melodies — together as you move and groove to your own tropical tunes. With kid-friendly sheet music and instructional instruments, the Steel Pan Family JamTM will have you playing fresh Caribbean rhythms in the key of sea in no time.",
  },
  {
    image: Embla5,
    heading: "THE LEADER OF LAUGHTER",
    caption: "ADMIRAL AWESOME",
    text: "Introducing Admiral Awesome — the shipwide superstar who is commandeering camaraderie and setting a course for vacation victory. From moments big to small, Admiral Awesome will make each day onboard a forever family memory. As the host of the Larger than Life Family Festival, Once Upon a Bedtime Story, and The Big Shark Block Party — you can always count on Admiral Awesome to steer you in the direction of unforgettable fun.",
  },
  {
    image: Embla6,
    heading: "PLAYTIME REDEFINED",
    caption: "ADVENTURE OCEAN ICON",
    text: "Designed with all ages in mind, the award-winning Adventure Ocean® onboard Icon of the SeasSM is going bigger on adventure than ever — and kids are in for the playtime of their lives. Little ones can let their imaginations guide the way with plenty of whimsical rooms to roam and climbable creations to explore. Tall tales at a magical starry night themed theater. Interactive tinker time at Workshop. Friendly foosball competition and cozy spaces to call their own at Hangout. Plus dedicated programs that will engage all the senses for babies and younger kids at AO Babies and AO Juniors. This is not paint by numbers — this is play outside the lines.",
  },
  {
    image: Embla7,
    heading: "POST UP AND COOL DOWN",
    caption: "LEMON POST",
    text: "Your next drink is never too far away from your pool day. The Lemon PostSM is an open-air hangout overlooking all the family fun of SurfsideSM. Cool down with two refreshing menus to choose from — one carefully crafted for grownups and another with kid-approved sips. With color changing drinks, unique souvenir cups and performative pours, this is not your ordinary lemonade stand.",
  },
]

const EmblaCarousel6 = (props) => {
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
                      <h5 className="text-3xl text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">ICONIC FAMILIES</li></ul></h5>
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

export default EmblaCarousel6






