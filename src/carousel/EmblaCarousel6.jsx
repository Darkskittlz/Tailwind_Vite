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
    Embla1Super: "SM",
    Embla1Copywright: "®",
    Embla1text: "When you’re a kid, bigger is always better. ",
    Embla1text2: "The Larger Than Life Family Festival ",
    Embla1text3: "supersizes friendly competition with giant versions of everyone’s favorites. Like colossal bowling pins, a towering ring toss target, giant darts and more. Between rounds, dance to live music and refuel with grab-and-go grub from your new faves across Surfside",
    Embla1text4: ". And it’s all hosted by everyone’s favorite host and new BFF, Admiral Awesome — for an afternoon that stacks up to their huge imaginations."
  },
  {
    image: Embla2,
    heading: "FIN-FILLED FAMILY FUN",
    caption: "THE BIG SHARK BLOCK PARTY",
    Embla2Super: "SM",
    Embla2Copywright: "®",
    Embla2text: "Grab the fam and dive into a Surfside",
    Embla2text2: " block party that makes a splash — ",
    Embla2text3: "The Big Shark Block Party ",
    Embla2text4: ". Look out for Admiral Awesome and friends giving out fins for dress-up time and leading the dance party to all your favorite marine mashups. Get in on the motion high above the ocean and reef-rock out to all the coastal classics from Baby Shark to Baby Beluga and more."
  },
  {
    image: Embla3,
    heading: "SWEET DREAMS FROM SURFSIDE",
    caption: "BEDTIME STORY",
    Embla3Super: "SM",
    Embla3Copywright: "®",
    Embla3text: "Pack your plushie friends and your softest blankies for ",
    Embla3text2: "Once Upon a Bedtime Story ",
    Embla3text3: " — the coziest way to wind down after a day of family fun in Surfside",
    Embla3text4: ". Join Admiral Awesome under the stars and cue calm vibes with a sleepy-time stretch sesh and a new, original bedtime story every night that'll leave you feeling happily ever after."
  },
  {
    image: Embla4,
    heading: "A JAM FOR THE WHOLE FAM",
    caption: "STEEL PAN IMAGE",
    Embla4Super: "TM",
    Embla4Copywright: "®",
    Embla4text: "Drum up new memories — and melodies — together as you move and groove to your own tropical tunes. With kid-friendly sheet music and instructional instruments, the ",
    Embla4text2: "Steel Pan Family Jam",
    Embla4text3: " will have you playing fresh Caribbean rhythms in the key of sea in no time."
  },
  {
    image: Embla5,
    heading: "THE LEADER OF LAUGHTER",
    caption: "ADMIRAL AWESOME",
    Embla5text: "Introducing ",
    Embla5text2: "Admiral Awesome",
    Embla5text3: " — the shipwide superstar who is commandeering camaraderie and setting a course for vacation victory. From moments big to small, Admiral Awesome will make each day onboard a forever family memory. As the host of the Larger than Life Family Festival, Once Upon a Bedtime Story, and The Big Shark Block Party — you can always count on Admiral Awesome to steer you in the direction of unforgettable fun.",
  },
  {
    image: Embla6,
    heading: "PLAYTIME REDEFINED",
    caption: "ADVENTURE OCEAN ICON",
    Embla6Super: "SM",
    Embla6Copywright: "®",
    Embla6text: "Designed with all ages in mind, the award-winning Adventure Ocean",
    Embla6text2: " onboard Icon of the Seas",
    Embla6text3: " is going bigger on adventure than ever — and kids are in for the playtime of their lives. Little ones can let their imaginations guide the way with plenty of whimsical rooms to roam and climbable creations to explore. Tall tales at a magical starry night themed theater. Interactive tinker time at Workshop. Friendly foosball competition and cozy spaces to call their own at Hangout. Plus dedicated programs that will engage all the senses for babies and younger kids at AO Babies and AO Juniors. This is not paint by numbers — this is play outside the lines."
  },
  {
    image: Embla7,
    heading: "POST UP AND COOL DOWN",
    caption: "LEMON POST",
    Embla7Super: "SM",
    Embla7Copywright: "®",
    Embla7text: "Your next drink is never too far away from your pool day. The Lemon Post",
    Embla7text2: " is an open-air hangout overlooking all the family fun of Surfside",
    Embla7text3: ". Cool down with two refreshing menus to choose from — one carefully crafted for grownups and another with kid-approved sips. With color changing drinks, unique souvenir cups and performative pours, this is not your ordinary lemonade stand."
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
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <IMGContainer>
                  <InnerContainer1>
                    <div className="md:mt-0 xs:w-full xs:pr-10 xs:mt-20">
                      <h5 className="text-3xl text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">ICONIC FAMILIES</li></ul></h5>
                      <h1 className="mb-5 xl:text-5xl lg:text-5xl xs:text-4xl font-semibold text-black text-base/6 mt-2">{slide.heading}</h1>
                      <h3 className="text-2xl xl:text-3xl lg:text-3xl xs:text-3xl xl:mb-5 text-black">

                        {slide.Embla1text}
                        <span className="font-bold">{slide.Embla1text2}</span>
                        {slide.Embla1text3}
                        <span className='sup'>{slide.Embla3Super}</span>
                        {slide.Embla1text4}

                        {slide.Embla2text}
                        <span className='sup'>{slide.Embla2Super}</span>
                        {slide.Embla2text2}
                        <span className='font-bold'>{slide.Embla2text3}</span>
                        {slide.Embla2text4}

                        {slide.Embla3text}
                        <span className='font-bold'>{slide.Embla3text2}</span>
                        {slide.Embla3text3}
                        <span className='sup'>{slide.Embla3Super}</span>
                        {slide.Embla3text4}

                        {slide.Embla4text}
                        <span className='font-bold'>{slide.Embla4text2}</span>
                        <span className='sup'>{slide.Embla4Super}</span>
                        {slide.Embla4text3}

                        {slide.Embla5text}
                        <span className='font-bold'>{slide.Embla5text2}</span>
                        {slide.Embla5text3}

                        {slide.Embla6text}
                        <span className='sup'>{slide.Embla6Copywright}</span>
                        {slide.Embla6text2}
                        <span className='sup'>{slide.Embla6Super}</span>
                        {slide.Embla6text3}

                        {slide.Embla7text}
                        <span className='sup'>{slide.Embla7Super}</span>
                        {slide.Embla7text2}
                        <span className='sup'>{slide.Embla7Super}</span>
                        {slide.Embla7text3}

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

export default EmblaCarousel6






