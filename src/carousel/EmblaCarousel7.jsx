import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { EmblaGridContainer2, IMGContainer, InnerContainer1, InnerContainer2, Margin2Container } from "../Styles/Styles.js"
import Embla1 from "../assets/embla6-1.jpg"
import Embla2 from "../assets/embla6-2.jpg"
import Embla3 from "../assets/embla6-3.jpg"
import Embla4 from "../assets/embla6-4.jpg"
import Embla5 from "../assets/embla6-5.jpg"
import Embla6 from "../assets/embla6-6.jpg"
import Embla7 from "../assets/embla6-7.jpg"
import Embla8 from "../assets/embla6-8.jpg"

export const slides = [
  {
    image: Embla1,
    heading: "WHERE THRILLS COLLIDE",
    caption: "THRILL ISLAND",
    Embla1Super: "SM",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: "There’s a place your clients won’t find on any map, where the most adrenaline-amping adventures converge — Thrill Island on ",
    Embla1text2: ". Face the wrath of Category 6, the largest waterpark at sea with six record-breaking slides. Find the courage to conquer the Crown’s Edge",
    Embla1text3: ", a test of bravery like nothing they’ve ever dared, dangling high above the ocean. And see how classic favorites have grown wild — like Adrenaline Peak",
    Embla1text4: ", a high-scoring new twist on the rock climbing wall. Plus, our most mind-bending mini-golf course ever, Lost Dunes",
    Embla1text5: ". When it’s time to fuel up, discover bites bold enough for the hungriest explorers, plus towering treats you’ll have to scale to eat. X marks the spot for adventure at Thrill Island — only on ",
    Embla1text6: "."
  },
  {
    image: Embla2,
    heading: "PLAY ON. AND ON. AND ON.",
    caption: "SURFSIDE",
    Embla2Super: "SM",
    Embla2IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    copywright: "®",
    Embla2headertext: "Make the most of every minute together at Surfside",
    Embla2headertext2: " — it’s a stay-all-day neighborhood for families.",
    Embla2text: "Everything your clients could want for their boldest day of bonding is right here, so the whole crew will never want to leave. Open the floodgates on fun at the sprawling Splashaway Bay",
    Embla2text2: " aquapark with slides, spray fountains and a massive drench bucket that keeps the kids running back for more. Or head to the Water’s Edge pool for unmatched, infinite horizon views. In between arcade plays and carousel spins, fuel up at dining spots serving crowd-pleasing bites and foodie delights. Kids of all ages get hangout spots of their own with the award-winning Adventure Ocean",
    Embla2text3: " and Social 020 teen space close by. And finish by toasting to the best family vacation ever at a new family-friendly hangout mixing up kid-approved sips as well as grownup drinks with a twist."
  },
  {
    image: Embla3,
    heading: "BEACH CLUB BLISS ABOVE ALL",
    caption: "THE HIDEAWAY",
    Embla3Super: "SM",
    Embla3IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla3text: "Escape to new heights of bragworthy at the beach club inspired Hideaway, only on ",
    Embla3text2: ". Lounge the day away as DJs transport your clients to a beach club scene conjuring Mykonos moods, Mallorca mindsets and beyond. And at the center of it all — the first suspended pool at sea defies gravity, hovering eight stories high. Kick back and catch some rays on the multilevel, terraced lounge area, where every chaise is certain to have a spectacular sunset view. Or catch up with friends over cocktails from the expansive wraparound Hideaway Bar. Once they’ve uncovered The Hideaway, your clients’ sea days will never be the same."
  },
  {
    image: Embla4,
    heading: "EVERY DAY IS SUN DAY",
    Embla4Super: "SM",
    Embla4Copywright: "®",
    Embla4IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    caption: "CHILL ISLAND",
    Embla4text: "Sun seekers, it’s your time to shine on the new ",
    Embla4text2: " — with the most pools on any ship. Head to Chill Island",
    Embla4text3: ", an upper-deck oasis built around the biggest pool ever to set sail. Dive in and order up at the first swim-up bar in the fleet, Swim & Tonic, with its own dedicated pool scene and even more hot tub hangs. Or hit one of four bars at The Lime and Coconut",
    Embla4text4: ", our biggest ever — including our first-ever frozen cocktail bar — and sip to the rhythm of live music and DJs at every turn. By the time low-key is calling your clients’ names, the infinity edge of The Cove Pool offers serene ocean views just steps away."
  },
  {
    image: Embla5,
    heading: "AWE INSPIRING BY DAY. ICONIC BY NIGHT.",
    caption: "AQUADOME",
    Embla5Super: "SM",
    Embla5IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla5text: "Real icons don’t just steal the show — they change the way your clients see it forever. Enter the shimmering AquaDome",
    Embla5text2: ", perched at the top of the new ",
    Embla5text3: ". Where a whole world of sensory discoveries awaits . Brave athletes pull off superhuman stunts beneath a towering, shapeshifting waterfall. Dining options designed to dazzle pique every culinary curiosity. Cocktails are crafted to surprise and delight. And lounge spots elevate their ocean views to new heights. It’s every experience they could want for a bold night out and all sorts of elevated comforts for next-level lounging beneath the sun — all in one place your clients need to see and still won’t believe.",
  },
  {
    image: Embla6,
    heading: "UPSCALE ON A NEW SCALE",
    caption: "SUITE NEIGHBORHOOD",
    Embla6Super: "SM",
    Embla6IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla6text: "Luxury is anything but boring in Royal Suite Class — and the groundbreaking new ",
    Embla6text2: " takes it to plush new levels. Just steps away from their  room, your clients will discover the Suite Neighborhood, a retreat with indulgences exclusively for suite guests. Soak up rays on the two-story sun deck or take a tranquil dip in the private pool and hot tub. Savor upscale cuisine at two restaurants for suite guests only — the casual elegance of Coastal Kitchen or al fresco Mediterranean bliss at The Grove. And at the Suite Lounge, enjoy bites and cocktails over jaw-dropping views right into the heart of the revolutionary AquaDome",
    Embla6text3: ". It’s time they discover just how suite life can be.",
  },
  {
    image: Embla7,
    heading: "THE HEARTBREAK OF AN ICON",
    caption: "Royal Promenade",
    Embla7Super: "SM",
    Embla7IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla7text: "From the moment your clients step onboard ",
    Embla7text2: ",  they’re in the heart of the action at the Royal Promenade — and they’ll find themselves coming back again and again. Fifteen bars, restaurants and cafés serve up something new to hear, see, do, or taste at every turn, from intimate pub performances at the Point & Feather to showstopping sing-alongs at Spotlight",
    Embla7text3: " Karaoke, plus larger-than-life parades and parties. Catch maxed-out axels and supersized spins at our biggest-ever ice skating arena, Absolute Zero. And your clients will take their tastebuds on an epicurean tour of eateries, or take the whole crew on a nonstop hop through bars that flow seamlessly from one into the next, all right onboard.",
  },
  {
    image: Embla8,
    heading: "NO ORDINARY STROLL THROUGH THE PARK",
    caption: "CENTRAL PARK",
    Embla8Super: "SM",
    Embla8Copywright: "®",
    Embla8IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla8text: "On ",
    Embla8text2: ", your clients will find our biggest, lushest Central Park",
    Embla8text3: " yet — an open-air nature retreat where over 13,000 tropical plants and trees line winding pathways and climb four living walls that soar five decks high. Budding delights are nestled in — from elegant fine dining eateries to breezy bars and upscale shops. New walk-up windows offer al fresco sips and snacks to perfectly complement their stroll while they bop along to a new venue making a jazz debut that hits a fresh high note.",
  },
]

const EmblaCarousel7 = (props) => {
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
      <Margin2Container>
        <EmblaGridContainer2>
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
                        <h5 className="text-3xl text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">NEIGHBORHOODS</li></ul></h5>
                        <h1 className="mb-5 text-black font-semibold w-5/6 text-7xl mt-2">{slide.heading}</h1>

                        {/* Slide 1 */}
                        <h3 className="text-2xl xl:text-3xl lg:text-3xl xs:text-3xl xl:mb-5 text-black">
                          {slide.Embla1text}
                          <span className='tracking-tighter'>{slide.Embla1IOTS}</span>
                          {slide.Embla1text2}
                          <span className='sup'>{slide.Embla1Super}</span>
                          {slide.Embla1text2}
                          <span className='sup'>{slide.Embla1Super}</span>
                          {slide.Embla1text3}
                          <span className='sup'>{slide.Embla1Super}</span>
                          {slide.Embla1text4}
                          <span className='sup'>{slide.Embla1Super}</span>
                          {slide.Embla1text5}
                          <span className='tracking-tighter'>{slide.Embla1IOTS}</span>
                          {slide.Embla1text6}
                        </h3>

                        {/* Slide 2 */}
                        <h2 className="mb-5 text-black text-2xl xs:text-3xl font-semibold mt-2">
                          {slide.Embla2headertext}
                          <span className='sup'>{slide.Embla2Super}</span>
                          {slide.Embla2headertext2}
                        </h2>
                        <h3 className="text-2xl xs:text-3xl lg:w-full md:w-full text-black">
                          {slide.Embla2text}
                          <span className='sup'>{slide.Embla2Super}</span>
                          {slide.Embla2text2}
                          <span className='sup'>{slide.copywright}</span>
                          {slide.Embla2text3}
                        </h3>

                        {/* Slide 3 */}
                        <h3 className="text-2xl xs:text-3xl lg:w-full md:w-full text-black">
                          {slide.Embla3text}
                          <span className='tracking-tighter'>{slide.Embla3IOTS}</span>
                          {slide.Embla3text2}
                        </h3>

                        {/* Slide 4 */}
                        <h3 className="text-2xl xs:text-3xl lg:w-full md:w-full text-black">
                          {slide.Embla4text}
                          <span className='tracking-tighter'>{slide.Embla3IOTS}</span>
                          {slide.Embla4text2}
                          <span className='sup'>{slide.Embla4Copywright}</span>
                          {slide.Embla4text3}
                        </h3>


                        {/* Slide 5 */}
                        <h3 className="text-2xl xs:text-3xl lg:w-full md:w-full text-black">
                          {slide.Embla5text}
                          <span className='sup'>{slide.Embla5Super}</span>
                          {slide.Embla5text2}
                          <span className='tracking-tighter'>{slide.Embla5IOTS}</span>
                          {slide.Embla5text3}
                        </h3>

                        {/* Slide 6 */}
                        <h3 className="text-2xl xs:text-3xl lg:w-full md:w-full text-black">
                          {slide.Embla6text}
                          <span className='tracking-tighter'>{slide.Embla6IOTS}</span>
                          {slide.Embla6text2}
                          <span className='sup'>{slide.Embla6Super}</span>
                          {slide.Embla6text3}
                        </h3>

                        {/* Slide 7 */}
                        <h3 className="text-2xl xs:text-3xl lg:w-full md:w-full text-black">
                          {slide.Embla7text}
                          <span className='tracking-tighter'>{slide.Embla7IOTS}</span>
                          {slide.Embla7text2}
                          <span className='sup'>{slide.Embla7Super}</span>
                          {slide.Embla7text3}
                        </h3>

                        {/* Slide 8 */}
                        <h3 className="text-2xl xs:text-3xl lg:w-full md:w-full text-black">
                          {slide.Embla8text}
                          <span className='tracking-tighter'>{slide.Embla8IOTS}</span>
                          {slide.Embla8text2}
                          <span className='sup'>{slide.Embla8Copywright}</span>
                          {slide.Embla8text3}
                        </h3>

                      </div>
                    </InnerContainer1>
                    <InnerContainer2>
                      <h2><ul className="ml-5 list-disc list-inside"><li>{slide.caption}<span className='sup'>{slide.Embla2Super}</span></li></ul></h2>
                      <h2><ul className="ml-5 list-disc list-inside"><li>{slide.caption}<span className='sup'>{slide.Embla4Super}</span></li></ul></h2>
                      <img
                        className="embla__slide__img"
                        src={slide.image}
                        alt={`IMG${index + 1}`}
                      />
                      <div className="embla__buttons pb-8 flex absolute">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                      </div>
                    </InnerContainer2>
                  </IMGContainer>
                </div>
              ))}
            </div>
          </div>

        </EmblaGridContainer2>
      </Margin2Container>
    </section >
  )
}

export default EmblaCarousel7






