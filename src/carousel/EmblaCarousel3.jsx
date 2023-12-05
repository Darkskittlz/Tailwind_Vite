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
import Embla1 from "../assets/embla3-1.jpg"
import Embla2 from "../assets/embla3-2.jpg"
import Embla3 from "../assets/embla3-3.jpg"
import Embla4 from "../assets/embla3-4.jpg"
import Embla5 from "../assets/embla3-5.jpg"
import Embla6 from "../assets/embla3-6.jpg"

export const slides = [
  {
    image: Embla1,
    heading: "VIEWS FOR DAYS",
    caption: "INFINITE OCEAN VIEW BALCONY",
    text: "When your clients are out to sea, they’ll want to see the sea. And there’s no shortage of spectacular ocean views right from their room on the game-changing new Icon of the Seas. Push a button to invite the sea breeze in — new Infinite Balcony rooms transform their living space into an extended oceanside escape. Enjoy spectacular vistas each and every day from the comfort and privacy of their own room. The best way to explore the world is by sea – and a balcony stateroom is the perfect way to get a little bit closer to everything!",
    bullet1: '• Infinite Ocean View Balcony',
    bullet2: '• Family Infinite Ocean View Balcony',
    bullet3: '• Infinite Central Park View Balcony',
    bullet4: '• Ocean View Large Balcony',
    bullet5: '• Connecting Ocean View Balcony',
    bullet6: '• Ocean View Balcony',
    bullet7: '• Central Park View Balcony',
    bullet8: '• Surfside Family View Balcony',
    button: "View All Balconies"
  },
  {
    image: Embla2,
    heading: "OVER THE TOP JUST GOT TOPPED",
    caption: "ULTIMATE FAMILY TOWNHOUSE",
    textalt: "A family vacation doesn’t get any more VIP than in the first-ever Ultimate Family Townhouse on Icon of the Seas — a sprawling adventure-filled pad with three levels of incredible surprises. Plunge down the slide into the coolest living room ever, where hidden nooks wait to be explored. The cinema room sets the stage for unrivaled movie nights and karaoke sing-offs with a popcorn machine and monster-themed daybed. And a private patio level is your new favorite hang spot for table tennis competitions, with all the fun and splash of SurfsideSM just steps away. The whole family enjoys Royal Suite Class Star status that unlocks exclusive experiences, like your family’s personal Royal Genie, priority access everywhere onboard, and so much more.",
    bullet1: '• Ultimate Family Townhouse',
    bullet2: '• Level 1',
    bullet3alt: '• Level 2',
    bullet4alt: '• Level 3',
    button: 'View Gallery'
  },
  {
    image: Embla3,
    heading: "TRULY A CLASS BY ITSELF",
    caption: "ROYAL LOFT",
    text: "This is the new definition of VIP. It isn’t priority access — it’s all access. And it starts with the most expansive and unbelievable suites at sea. A Royal Genie takes your clients’ VIP Star status ship-wide by scoring them exclusive access to the best of everything onboard. It’s like the whole ship is theirs as your clients enjoy one-of-a-kind experiences from bow to stern. Inclusive amenities elevate every aspect of your vacation. When you’re a Star guest, VIP status doesn’t end at your door. And it’s only on Royal Caribbean®.",
    bullet1: '• Royal Loft',
    bullet2: '• Icon Loft',
    bullet3: '• Ultimate Family Townhouse',
    button: 'View All Star Tier Suites'
  },
  {
    image: Embla4,
    heading: "LUXURY IS ADVENTURE AT YOUR FINGERTIPS",
    caption: "Owner's Suite",
    text: "Welcome to the Sky life. It’s spectacular accommodations, attentive service and exclusive experiences with the Royal Concierge as your host. From priority reservations at Coastal Kitchen and the new outdoor eatery, The Grove, to exclusive access to the Suite Lounge and more. While thoughtful inclusions, like luxury in-suite amenities and free high speed internet at sea enhance every other aspect of your vacation.",
    bullet1: "• Owner's Suite",
    bullet2: '• Sunset Suite',
    bullet3: '• Grand Suite',
    bullet4: '• Sky Junior Suite',
    bullet5: '• Sunset Corner Suite',
    bullet6: '• Infinite Grand Suite',
    bullet7: '• Panoramic Suite',
    bullet8: '• Surfside Family Suite',
    button: 'View All Sky Tier Suites'
  },
  {
    image: Embla5,
    heading: "LUXURY IS ALL IN THE DETAILS",
    caption: "SUNSET JUNIOR SUITE",
    text: "Rest and recharge between adventures in a spacious Sea suite where every detail has been carefully considered with your clients in mind. From luxury pillow top mattresses to bath amenities selected to make them feel at home. The indulgence extends beyond their room with evening dining at the exclusive Coastal Kitchen.",
    bullet1: "• Sunset Junior Suite",
    bullet2: '• Junior Suite',
    button: 'View All Sea Tier Suites'
  },
  {
    image: Embla6,
    heading: "TIME TO RECHARGE",
    caption: "PANORAMIC OCEAN VIEW",
    text: "As your clients sail to some of the world’s most iconic destinations, they won’t want to miss a single moment. In an Ocean View stateroom, they’ll be treated to a beautiful new view every day! Spend the day exploring the world, then retreat to a comfortable, well-appointed stateroom and don’t miss a thing. Or retreat to an Interior stateroom and unwind in comfort at the end of a busy day! These well-appointed staterooms offer everything your clients need for a comfortable voyage.",
    bullet1: "• Owner's Suite",
    bullet2: '• Sunset Suite',
    bullet3: '• Grand Suite',
    bullet4: '• Sky Junior Suite',
    bullet5: '• Sunset Corner Suite',
    bullet6: '• Infinite Grand Suite',
    bullet7: '• Panoramic Suite',
    button: 'View All Oceanview & Interior'
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
                      <h5 className="text-3xl text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">ICONIC STAYS</li></ul></h5>
                      <h1 className="mb-5 text-black text-base/6 mt-2">{slide.heading}</h1>
                      <h3 className="text-1xl text-base/6 lg:w-full md:w-full text-black">{slide.text}</h3>
                      <p className="text-base/6 lg:w-full md:w-full text-black">{slide.textalt}</p>
                      <div className='grid-cols-2 grid lg:w-full md:w-5/6 mt-2 mb-2'>
                        <ul className="list-inside">
                          <li className="listItem text-black">{slide.bullet1}</li>
                          <li className="listItem text-black">{slide.bullet2}</li>
                          <li className="listItem text-black">{slide.bullet3}</li>
                          <li className="listItem text-black">{slide.bullet4}</li>
                        </ul>
                        <ul className="list-inside">
                          <li className="listItem text-black">{slide.bullet3alt}</li>
                          <li className="listItem text-black">{slide.bullet4alt}</li>
                          <li className="listItem text-black">{slide.bullet5}</li>
                          <li className="listItem text-black">{slide.bullet6}</li>
                          <li className="listItem text-black">{slide.bullet7}</li>
                          <li className="listItem text-black">{slide.bullet8}</li>
                        </ul>
                      </div>
                      <button className='rounded-full font-semibold border-black text-2xl bg-white mt-4 p-7 text-black'>{slide.button}
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
                    <div className="embla__buttons 2xl:mt-58 2xl:pb-12 mt-34 flex absolute">
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




