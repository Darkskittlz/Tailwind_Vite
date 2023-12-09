import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { EmblaGridContainer, IMGContainer, InnerContainer1, InnerContainer2 } from "../Styles/Styles.js"
import Embla1 from "../assets/embla7-1.jpg"
import Embla2 from "../assets/embla7-2.jpg"
import Embla3 from "../assets/embla7-3.jpg"
import Embla4 from "../assets/embla7-4.jpg"
import Embla5 from "../assets/embla7-5.jpg"
import Embla6 from "../assets/embla7-6.jpg"
import Embla7 from "../assets/embla7-7.jpg"
import Embla8 from "../assets/embla7-8.jpg"
import Embla9 from "../assets/embla7-9.jpg"
import Embla10 from "../assets/embla7-10.jpg"

export const slides = [
  {
    image: Embla1,
    heading: "PALATE PLEASING PLATES",
    caption: "EMPIRE SUPPER CLUB",
    Embla1Super: "SM",
    Embla1Copywright: "®",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: "Delve into decadence at Empire Supper Club",
    Embla1text2: " — a new Central Park",
    Embla1text3: " restaurant that’s putting on the ritz with a taste of old New York right onboard. Indulge in an evening of extravagance with an eight-course menu of premium American cuisine, carefully curated with expertly prepared plates from caviar to wagyu. Each dish is exquisitely paired with a beverage that will elevate your experience to next-level nouveau. And every detail is carefully crafted to provide you with an unforgettable night of lavish luxury that begins with thoughtful touches before you even take your seat. All while a swanky three-piece band accompanies each course with upscale — and unexpected — renditions of modern favorites to transport you to a bygone era of sophistication and glamour.",
  },
  {
    image: Embla2,
    heading: "VIP YOUR DINNER PARTY",
    caption: "CELEBRATION TABLE",
    Embla2Super: "SM",
    Embla2IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla2text: "Special occasions get the VIP treatment at Celebration Table — an all-new exclusive dining experience for you and 11 of your closest crew in AquaDome",
    Embla2text2: ". Get the festivities started in your own personal lounge before sitting down for your meal. With sweeping ocean views, every seat is a window seat. Choose from American, Italian, Asian and seafood prix fixe menus — all served family-style along with a signature cocktail. And put your own personal spin on the evening with your choice of ambient touches and menu upgrades. Whether you’re commemorating a major milestone or just want to treat your family to something unique, your celebration is customized to your taste.",
  },
  {
    image: Embla3,
    heading: "THE MAIN EVENT",
    caption: "DINING ROOM",
    Embla3Super: "SM",
    Embla3Copywright: "®",
    Embla3IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla3text: "Share your favorite moments of the day over your favorite meal of the day in the Dining Room. Each new night onboard brings a delectably different three-course theme to taste your way around the world together — with rotating flavors from Jamaica to Jaipur and signature Royal Caribbean",
    Embla3text2: " recipes loved by all. Expand your palate with dishes like buttery escargot or fill up on familiar faves like spaghetti Bolognese. And any evening can be dressed up with the option to order Maine lobster tail and filet mignon.",
  },
  {
    image: Embla4,
    heading: "FAMILY FEASTS BETWEEN FEATS",
    caption: "SURFSIDE EATERY",
    Embla4Copywright: "®",
    Embla4Super: "SM",
    Embla4IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla4text: "Whatever your little ones are into right now, the Surfside Eatery",
    Embla4text2: " has it — steps away from all the action. During the day, satisfy your breakfast and lunch cravings with a buffet of options from pancakes with chocolate chips and fruit toppings to colorful, fun-shaped pasta with marinara and cheese sauces. In the evening, bond over bites without ever having to leave your favorite part of the ship. And grownups can delight in delectable with elevated options that put a contemporary twist on all the kid’s classics — so you can share memories without having to share plates.",
  },
  {
    image: Embla5,
    heading: "BEACHSIDE BITES, BRUNCH AND BEYOND",
    caption: "PIER 7",
    Embla5Super: "SM",
    Embla5IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla5text: "Pop on over to Pier 7",
    Embla5text2: " any time of day for beachside bites with a laid-back vibe. You'll find casual California cuisine to hook everyone in your crew. From surf and turf tacos to crispy, crunchy mango lime shrimp tostadas piled high, and even sharable platters. Plus, get your brunch on all day every day with indulgent dishes like smoked salmon benedict, or a fluffy buttermilk pancake platter. Pier 7 packs all the flavors you crave and keeps you coming back for more.",
  },
  {
    image: Embla6,
    heading: "GRUB-AND-GO",
    caption: "SURFSIDE BITES",
    Embla6Super: "SM",
    Embla6IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla6text: "With tasty twists to pique new interests, Surfside BitesSM is your quick stop for sweet and salty noshes to refuel on the run. Snack on popcorn chicken and hot dogs before even drying off from Splashaway Bay",
    Embla6text2: ". Power up after PlayscapeSM fun with a burger and a side of mac and cheese. Treat the top scorer from the Arcade to chocolate chip cookies and cinnamon-sugar donut holes. And round out your time on the carousel with the neighborhood’s very own Sprinkles putting its twist on vanilla, chocolate and strawberry soft serve.",
  },
  {
    image: Embla7,
    heading: "GO ON A GLOBAL TASTE TOUR",
    caption: "AQUADOME MARKET",
    Embla7Super: "SM",
    Embla7IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla7text: "AquaDome Market, the first-ever food hall in the fleet, premiers onboard the all-new",
    Embla7text2: ". Five unique food stands serve up a smorgasbord with a side of awe-inspiring views. Mix up fresh pitas and bowls at Feta Mediterranean. Mac’s remixes cheesy goodness with toppings like slow-roasted pulled pork, smoked gouda and BBQ sauce. For a feel-good fix, head to Toast and Garden for sandwiches and salads. Plus Asian faves like Korean Beef with Broccoli at GNGR. And say yes to the press at Crème de la Crepe with sweet and savory crepes. Top it all off with a selection of wines and beers from the bar.",
  },
  {
    image: Embla8,
    heading: "ROLLS WHILE YOU STROLL",
    caption: "IZUMI IN THE PARK",
    Embla8Copywright: "®",
    Embla8Super: "SM",
    Embla8IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla8text: "Picture this: you’re strolling through the open-air of Central Park",
    Embla8text2: ", craving a savory snack. There’s Izumi in the Park",
    Embla8text3: " — an all-day window for sushi and snap-worthy street foods inspired by Japan. Sample a selection of fresh nigiri, sashimi, seaweed salad and more, packed up in a portable box. You’re already planning your return trip for the most photogenic ice cream onboard — a Taiyaki vanilla ice cream with strawberry drizzle and rainbow sprinkles served in an airy bubble cone. Whether it’s a pre-dinner sweet treat or a mid-day sushi snack, this is your destination for fresh eats in the fresh air.",
  },
  {
    image: Embla9,
    heading: "YOUR HOME BASE TO REFUEL",
    caption: "BASECAMP",
    Embla9Super: "SM",
    Embla9Copywright: "®",
    Embla9IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla9text: "Right in the middle of all the Thrill Island action, Basecamp",
    Embla9text2: " is your family’s headquarters to refuel between adventures. Choose from a variety of complimentary snacks like soft pretzel bites with cheese sauce — or splurge on next-level noshes like crispy shrimp bao buns. Tee up a round of drinks before putting around the mini-golf course. And with so many ways to fuel up between waterpark splashdowns, consider this your home base for bites you won’t want to share.",
  },
  {
    image: Embla10,
    heading: "A SPHERE FOR THE SENSES",
    caption: "PEARL CAFE",
    Embla10Super: "SM",
    Embla10IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla10text: "Nestled between the largest kinetic sculpture in the world — The Pearl — and an expansive window with sweeping ocean views is The Pearl Café",
    Embla10text2: ". Stop by for a quick bite any time of day or night and settle into the scenery. You'll find a selection of freshly pressed panini, ready-made salads, sweet treats and more to nosh on. Plus, cozy nooks where you can thumb through your latest page-turner.",
  },
]

const EmblaCarousel8 = (props) => {
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
                      <h5 className="text-3xl text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">ICONIC DINING</li></ul></h5>
                      <h1 className="mb-16 text-black text-6xl font-semibold">{slide.heading}</h1>

                      {/* Slide 1 */}
                      <h3 className="text-3xl xs:text-3xl leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla1text}
                        <span className='sup'>{slide.Embla1Super}</span>
                        {slide.Embla1text2}
                        <span className='sup'>{slide.Embla1Copywright}</span>
                        {slide.Embla1text3}
                      </h3>

                      {/* Slide 2 */}
                      <h3 className="mb-5 text-black text-3xl xs:text-3xl leading-10 mt-2">
                        {slide.Embla2text}
                        <span className='sup'>{slide.Embla2Super}</span>
                        {slide.Embla2text2}
                      </h3>

                      {/* Slide 3 */}
                      <h3 className="text-3xl xs:text-3xl leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla3text}
                        <span className='sup'>{slide.Embla3Copywright}</span>
                        {slide.Embla3text2}
                      </h3>

                      {/* Slide 4 */}
                      <h3 className="text-3xl xs:text-3xl leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla4text}
                        <span className='sup'>{slide.Embla4Super}</span>
                        {slide.Embla4text2}
                      </h3>


                      {/* Slide 5 */}
                      <h3 className="text-3xl xs:text-3xl leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla5text}
                        <span className='sup'>{slide.Embla5Super}</span>
                        {slide.Embla5text2}
                      </h3>

                      {/* Slide 6 */}
                      <h3 className="text-3xl xs:text-3xl leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla6text}
                        <span className='sup'>{slide.Embla6Super}</span>
                        {slide.Embla6text2}
                      </h3>

                      {/* Slide 7 */}
                      <h3 className="text-3xl xs:text-3xl leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla7text}
                        <span className='sup'>{slide.Embla7Super}</span>
                        {slide.Embla7text2}
                      </h3>

                      {/* Slide 8 */}
                      <h3 className="text-3xl xs:text-3xl leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla8text}
                        <span className='sup'>{slide.Embla8Copywright}</span>
                        {slide.Embla8text2}
                        <span className='sup'>{slide.Embla8Super}</span>
                        {slide.Embla8text3}
                      </h3>

                      {/* Slide 9 */}
                      <h3 className="text-3xl xs:text-3xl leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla9text}
                        <span className='sup'>{slide.Embla9Copywright}</span>
                        {slide.Embla9text2}
                      </h3>

                      {/* Slide 10 */}
                      <h3 className="text-3xl xs:text-3xl leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla10text}
                        <span className='sup'>{slide.Embla10Super}</span>
                        {slide.Embla10text2}
                      </h3>

                    </div>
                  </InnerContainer1>
                  <InnerContainer2>
                    <h2><ul className="ml-5 list-disc list-inside"><li>{slide.caption}</li></ul></h2>
                    <img
                      className="embla__slide__img"
                      src={slide.image}
                      alt={`IMG${index + 1}`}
                    />
                    <div className="embla__buttons pb-2 mt-10 flex absolute">
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

export default EmblaCarousel8







