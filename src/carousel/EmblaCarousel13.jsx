import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { Caption2Container, Caption3Container, Caption4Container, CaptionContainer, EmblaGridContainer, IMG3Container, IMGContainer, InnerContainer1, InnerContainer2, InnerContainer3, InnerIMG2Container, InnerIMGContainer, ModalContainer, ModalContainer2, ModalContainer3 } from "../Styles/Styles.js"
import Embla2 from "../assets/productGIF.mp4"
import Embla3 from "../assets/PopUp.png"
import Embla4A from "../assets/Cartier.png"
import Embla4B from "../assets/Bvlgari.png"
import Embla4C from "../assets/Hublot.png"
import Embla4D from "../assets/Tiffany.png"
import Embla4E from "../assets/Engrace.png"
import Embla4F from "../assets/Cuervo y Sobrinos.png"
import Embla4G from "../assets/Copy of Supergoop.svg"
import Embla4H from "../assets/Kiehl's.png"
import Embla4I from "../assets/Kylie.jpg"
import Embla4J from "../assets/Loewe.png"
import Embla4K from "../assets/Olaplex.png"
import Embla4L from "../assets/Sephora Collection.jpg"
import Embla4M from "../assets/Coach.png"
import Embla4N from "../assets/Kate Spade.png"
import Embla4O from "../assets/Stella McCartney.png"
import Embla4P from "../assets/WGACA.png"
import Embla5 from "../assets/pre_owned_luxury.png"
import Embla6 from "../assets/TeamPhoto.jpg"
import Embla7 from "../assets/Technology.png"
import Embla8A from "../assets/Skinsight.png"
import Embla8B from "../assets/virtual_makeup.jpg"
import Embla8C from "../assets/AR_tryOn.jpg"
import Embla8D from "../assets/Personalization.png"
import Embla8E from "../assets/the_vault.png"
import Embla9 from "../assets/Logistics.png"
import Embla10 from "../assets/Infrastructure.png"
import Embla11 from "../assets/TeamPhoto.jpg"
import Embla12 from "../assets/Anchor_Standards.png"
import Embla13A from "../assets/Azamara.png"
import Embla13B from "../assets/Crystal.png"
import Embla13C from "../assets/Holland.png"
import Embla13D from "../assets/Virgin.jpg"
import Embla13E from "../assets/Resorts World.jpg"
import Embla13F from "../assets/Scenic.png"
import Embla13G from "../assets/Silversea.png"
import Embla13H from "../assets/Ritz Carlton.png"
import Embla13I from "../assets/Carnival.png"
import Embla13J from "../assets/Celebrity.png"
import Embla13K from "../assets/Costa.webp"
import Embla13L from "../assets/Norwegian.png"
import { ArrowRightRounded } from '@mui/icons-material'

export const slides = [
  {
    Embla1SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - RFP RESPONSES",
    Embla1Br: <br />,
    Embla1text: "RFP RESPONSES TO STARBOARD DIFFERENTIATORS",
    Embla1text2: "Our selected categories: ",
    Embla1text3: "a) product",
    Embla1text4: "c) service",
    Embla1text5: "d) Technology",
    Embla1text6: "e) Innovation",
    Embla1text7: "g) Logistics",
    Embla1text8: "h) Infrastructure",
    Embla1text9: "i) Recruitment, Training & Development",
    Embla1text10: "k) Any relevant Business won since 2019",
    Embla1text11: "l) Any relevant restructure/ change within the cruise/travel business of your company"
  },
  {
    Embla2image: Embla2,
    heading: "CUSTOM BRAND & PRODUCT DEVELOPMENT",
    Embla2SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - PRODUCT",
    Embla2Br: <br />,
    Embla2text: "Our product development and design team is  Best in Class.  With over 100 years combined of  product design, development and production management along with a guest-centric expertise we are positioned well for creating customized and successfully branded assortments for Royal Caribbean.  Starboard's  incredible design skills sets Royal Caribbean apart in the innovation and quality of their branded offerings.",
  },
  {
    Embla3image: Embla3,
    heading: "GUEST FOCUSED PRODUCT CURATION",
    Embla3SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - PRODUCT",
    Embla3Br: <br />,
    Embla3text: `Our passion for revolutionizing product and experience is another reason to pick Starboard. We curated a vibrant world for our guest and re-imagined Marketplace to stand for a discovery-led experience that celebrates trend right curation, personalization and value.  Starboard's  "Pop Up" experiences shift away from single category events and deliver custom designed gifting, destination and family fun assortments to capture memories that will last a lifetime. In addition to our best-selling exclusive Pop-Up offerings of Shae Jewelry, Personalized Inch of Gold offerings, Charms and destination discoveries, the Starboard curation team will continue to bring new and unique personalized gift offerings to our Pop-up Events and in the boutiques, all with that special touch of uniqueness and innovation that Royal Caribbean guests love.`
  },
  {
    Embla4image:
    {
      1: Embla4A,
      2: Embla4B,
      3: Embla4C,
      4: Embla4D,
      5: Embla4E,
      6: Embla4F,
      7: Embla4G,
      8: Embla4H,
      9: Embla4I,
      10: Embla4J,
      11: Embla4K,
      12: Embla4L,
      13: Embla4M,
      14: Embla4N,
      15: Embla4O,
      16: Embla4P,
    },
    heading: `LEADING THE WAY WITH "FIRST AT SEA" LAUNCHES`,
    Embla4SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - PRODUCT",
    Embla4Br: <br />,
    Embla4text: `It’s true, we like to be first.  And we are always ahead of the game, bringing brands to shops at sea for the first time.`
  },
  {
    Embla5image: Embla5,
    heading: "PRE-OWNED LUXURY",
    Embla5caption: "The Collection, Symphony of the Seas",
    Embla5SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - PRODUCT",
    Embla5Br: <br />,
    Embla5text: `We saw this one coming before any other cruise retailer and we’ve built a huge business together, ranging from vintage luxury handbags and accessories to certified pre-owned Rolex watches.`,
    Embla5text2: "Guests love the opportunity to own iconic brand pieces, often at a value price while supporting the circular economy and sustainability."
  },
  {
    Embla6image: Embla6,
    heading: "DEDICATED TEAM: 100% ROYAL 100% OF THE TIME",
    Embla6SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - SERVICE",
    Embla6Br: <br />,
  },
  {
    Embla7image: Embla7,
    heading: "ECOMMERCE? READY TO DEPLOY NOW",
    Embla7caption: "Ecommerce Renderings",
    Embla7SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - TECHNOLOGY",
    Embla7Br: <br />,
    Embla7text: `You all know this is a passion point of ours; we’ve got the capabilities ready to go now.`,
    Embla7text2: "• Pre-Cruise reserve and pick up onboard",
    Embla7text3: "• Onboard 24/7 shopping",
    Embla7text4: "• Post cruise new revenue stream"
  },
  {
    Embla8image: {
      1: Embla8A,
      2: Embla8B,
      3: Embla8C,
      4: Embla8D,
      5: Embla8E,
    },
    Embla8caption1: "Skinsight",
    Embla8caption2: "Virtual Makeup Try-On",
    Embla8caption3: "AR Virtual Try-On",
    Embla8caption4: "Personalization",
    Embla8caption5: "Skinsight",
    heading: "MAKING SHOPPING EVEN MORE FUN",
    Embla8SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - INNOVATION",
    Embla8Br: <br />,
    Embla8text: `We use digital experiences to engage guests and make their shopping experience more engaging while increasing conversion. Keep scrolling for all the details.`
  },
  {
    Embla9image: Embla9,
    Embla9caption1: "Miami Distribution Center",
    Embla9heading: "OPERATIONAL EXCELLENCE: LOGISTICS",
    Embla9SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - LOGISTICS",
    Embla9Br: <br />,
    Embla9text: `From our 220,000 sq foot wholly-owned distribution center to our 360 services including (but not limited to): customs compliance, transportation, and customer service Starboard provides end-to-end support for seamless business operations.`,
    Embla9text2: `If you don’t mind, we’d also like to take a moment to brag about our annual compliance audits.  The LVMH independent risk assessment audit resulted in a Level 5 FRG rating, the highest industry certification for an operational site.  Even more impressive, we consistently achieve this rating year after year.  In 2023, we moved $250M dollars of inventory through this facility.  Meticulous attention to detail and unparalleled expertise are required to keep track of every item and movement.  Our recent physical inventory audit found our on-hand inventory totaled $2,197,616.70 vs. our booked inventory totaling $2,197,619.48.  That’s a difference of $2.78.  That’s operational excellence! `
  },
  {
    Embla10image: Embla10,
    heading: "HEY NEIGHBOR!",
    Embla10SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - INFRASTRUCTURE",
    Embla10Br: <br />,
    Embla10text: `Need a cup of sugar? How about immediate proximity to your dedicated Royal account team as well as our entire merchant organization, marketing and visual merchandising experts, training resources, as well as our video content creation team?`,
    Embla10text2: `Combine this with our on the ground teams in Europe and Asia and we’ve got the Royal business covered all over the world.`
  },
  {
    Embla11image: Embla11,
    Embla11caption1: "Our Million Dollar Harmony of the Seas Retail Team",
    heading: "OUR TEAMS ARE THE SECRET SAUCE",
    Embla11SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - RECRUITMENT, TRAINING & DEVELOPMENT",
    Embla11Br: <br />,
    Embla11text: `Extensive language capabilities? Check.`,
    Embla11text2: `60+ diverse countries? Check.`,
    Embla11text3: `World class training? Check.`,
    Embla11text4: `Here are just a few examples:`,
    Embla11text5: `• Award winning training app covering topics from overcoming sales objections to the latest product training`,
    Embla11text6: `• GIA expert certification for Fine Jewelry specialists`,
    Embla11text7: `• Brand deep dives for our luxury partners, replicating their land-based store service experiences`,
    Embla11text8: `Next up?`,
    Embla11text9: `• Accreditation for our Port Merchants team from the Whiskey Council of America`,
    Embla11text10: `• British Butler Institute Training for Swiss and Luxury brand specialists`,
    Embla11text11: `• No one does it better!`,
  },
  {
    Embla12image: Embla12,
    heading: "ANCHOR STANDARDS, THE FOUNDATION OF OUR OPERATION",
    Embla12SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - RECRUITMENT, TRAINING & DEVELOPMENT",
    Embla12Br: <br />,
    Embla12text: `Starboard leaves nothing to chance when preparing our teams to perform at their absolute best.  Afterall, our teams are the source of our competitive advantage.`,
    Embla12text2: "Beating records is the result of developing and supporting our people.  From onboarding to continuous training, setting crystal clear objectives and motivating each team member to succeed, we establish an environment of belonging and personal growth.",
    Embla12text3: "We aim high and love friendly competition.  Celebrating individual achievement and rallying when we need to do more are part of the fabric of our sales culture.",
    Embla12text4: "We’re Starboard proud and can’t wait to deliver mind-blowing results on Icon II & III."
  },
  {
    EmblaImage13A: Embla13A,
    EmblaImage13B: Embla13B,
    EmblaImage13C: Embla13C,
    EmblaImage13D: Embla13D,
    EmblaImage13E: Embla13E,
    EmblaImage13F: Embla13F,
    EmblaImage13G: Embla13G,
    EmblaImage13H: Embla13H,
    EmblaImage13I: Embla13I,
    EmblaImage13J: Embla13J,
    EmblaImage13K: Embla13K,
    EmblaImage13L: Embla13L,
    heading: "OPERATING 100 SHIPS ACROSS THE GLOBE",
    Embla13SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - RECRUITMENT, TRAINING & DEVELOPMENT",
    Embla13Br: <br />,
    Embla13text: `Since 2019, Starboard has successfully acquired businesses encompassing eight new brands, resulting in a grand total of 29 newly acquired ships and expansions on two current brands.`,
    Embla13text2: "* indicates expansion"
  },
  {
    heading: "OUR NEXT CHAPTER STARTS NOW",
    Embla14SubHeader: "CRUISE & TRAVEL BUSINESS UPDATES - RESTRUCTURE",
    Embla14Br: <br />,
    Embla14text: `With our North Star guiding us towards curating a vibrant world with the best vacation retail experience, Starboard and Onboard Media are part of a new joint venture named Global Travel Retail Holdings.`,
    Embla14text2: "Royal Caribbean wins because: ",
    Embla14text3: "• Starboard is in the strongest financial position ever.  We have zero debt on our books; we have our highest inventory levels ever, and we have a guaranteed line of credit to enable us to continue to invest in the business.",
    Embla14text4: "• Our ecosystem of potential incremental revenue opportunities has exponentially grown – with post cruise expanded product offerings as well as connection to Loyalty programs, to name a few possibilities!",
    Embla14text5: "• We continue with the global access to luxury brands, tech innovation, and global consumer insights with LVMH."
  },
]


const EmblaCarousel13 = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [showIMG, setShowIMG] = useState(false)

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
          <div className="embla__container2">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <IMG3Container>
                  <InnerContainer3>
                    <div className="md:mt-0 md:w-full xs:w-full xs:pr-10 xs:mt-10">
                      <h5 className="text-3xl text-white text-left font-semibold">
                        <ul className="list-disc list-inside">
                          <li className="listItem">
                            {slide.Embla1SubHeader}
                            {slide.Embla2SubHeader}
                            {slide.Embla3SubHeader}
                            {slide.Embla4SubHeader}
                            {slide.Embla5SubHeader}
                            {slide.Embla6SubHeader}
                            {slide.Embla7SubHeader}
                            {slide.Embla8SubHeader}
                            {slide.Embla9SubHeader}
                            {slide.Embla10SubHeader}
                            {slide.Embla11SubHeader}
                            {slide.Embla12SubHeader}
                            {slide.Embla13SubHeader}
                            {slide.Embla14SubHeader}
                            {slide.Embla15SubHeader}
                          </li>
                        </ul>
                      </h5>
                      <h1 className="mb-10 text-3xl font-bold text-black mt-2">{slide.heading}</h1>
                      <h3 className="xs:text-1xl mb-5 text-black">

                        {/* Slide 1 */}
                        {slide.Embla1text}
                        {slide.Embla1Br}
                        {slide.Embla1Br}
                        {slide.Embla1text2}
                        {slide.Embla1Br}
                        {slide.Embla1text3}
                        {slide.Embla1Br}
                        {slide.Embla1text4}
                        {slide.Embla1Br}
                        {slide.Embla1text5}
                        {slide.Embla1Br}
                        {slide.Embla1text6}
                        {slide.Embla1Br}
                        {slide.Embla1text7}
                        {slide.Embla1Br}
                        {slide.Embla1text8}
                        {slide.Embla1Br}
                        {slide.Embla1text9}
                        {slide.Embla1Br}
                        {slide.Embla1text10}
                        {slide.Embla1Br}
                        {slide.Embla1text11}

                        {/* Slide 2 */}
                        {slide.Embla2text}

                        {/* Slide 3 */}
                        {slide.Embla3text}
                        {slide.Embla3Br}
                        {slide.Embla3Br}
                        {slide.Embla3Br}

                      </h3>
                    </div>
                  </InnerContainer3>

                  {slide.Embla7Caption && (
                    <CaptionContainer>
                      <h2>
                        <ul className="ml-5 list-disc list-inside">
                          <li>
                            {slide.Embla7caption}
                            {slide.Embla8caption1}
                            {slide.Embla8caption2}
                            {slide.Embla8caption3}
                            {slide.Embla8caption4}
                            {slide.Embla8caption5}
                            {slide.Embla9caption1}
                            {slide.Embla11caption1}
                          </li>
                        </ul>
                      </h2>
                    </CaptionContainer>
                  )}

                  {slide.Embla8Caption1 && (
                    <CaptionContainer>
                      <h2>
                        <ul className="ml-5 list-disc list-inside">
                          <li>
                            {slide.Embla8caption1}
                            {slide.Embla8caption2}
                            {slide.Embla8caption3}
                            {slide.Embla8caption4}
                            {slide.Embla8caption5}
                            {slide.Embla11caption1}
                          </li>
                        </ul>
                      </h2>
                    </CaptionContainer>
                  )}


                  {slide.Embla11caption1 && (
                    <CaptionContainer>
                      <h2>
                        <ul className="ml-5 list-disc list-inside">
                          <li>
                            {slide.Embla11caption1}
                          </li>
                        </ul>
                      </h2>
                    </CaptionContainer>
                  )}


                  {slide.Embla2image && (
                    <InnerContainer2>
                      <video
                        autoPlay
                        controls
                        muted
                        key={`image-${index}-1`}
                        className="embla__slide__img"
                        src={slide.Embla2image}
                      />
                    </InnerContainer2>
                  )}

                  {slide.Embla3image && (
                    <InnerContainer2>
                      <img src={slide.Embla3image} className="embla__slide__img2" key={`image-${index}-2`} />
                    </InnerContainer2>
                  )}

                  <div className="embla__buttons bottom-0 flex absolute">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <button
                      className='forwardButton'
                      onClick={onNextButtonClick}
                      disabled={nextBtnDisabled}
                    >
                      <NextButton
                        className="pr-8 py-5 ml-3 items-center flex"
                      />
                    </button>
                  </div>
                </IMG3Container>

                {/* Slide 4 */}
                {slide.Embla4text && (
                  <ModalContainer3>
                    <InnerContainer2>
                      <div className='ml-8'>
                        {slide.Embla4text}
                      </div>
                    </InnerContainer2>
                    <InnerIMGContainer>
                      <img src={slide.Embla4image['1']} className="" key={`image-${index}-3`} />
                      <img src={slide.Embla4image['2']} className="" key={`image-${index}-4`} />
                      <img src={slide.Embla4image['3']} className="" key={`image-${index}-5`} />
                      <img src={slide.Embla4image['4']} className="" key={`image-${index}-6`} />
                      <img src={slide.Embla4image['5']} className="" key={`image-${index}-7`} />
                      <img src={slide.Embla4image['6']} className="" key={`image-${index}-8`} />
                      <img src={slide.Embla4image['7']} className="" key={`image-${index}-9`} />
                      <img src={slide.Embla4image['8']} className="" key={`image-${index}-10`} />
                      <img src={slide.Embla4image['9']} className="" key={`image-${index}-11`} />
                      <img src={slide.Embla4image['10']} className="" key={`image-${index}-12`} />
                      <img src={slide.Embla4image['11']} className="" key={`image-${index}-13`} />
                      <img src={slide.Embla4image['12']} className="" key={`image-${index}-14`} />
                      <img src={slide.Embla4image['13']} id="coach" key={`image-${index}-15`} />
                      <img src={slide.Embla4image['14']} id="kateSpade" key={`image-${index}-16`} />
                      <img src={slide.Embla4image['15']} className="h-18 w-2/5" key={`image-${index}-17`} />
                      <img src={slide.Embla4image['16']} className="w-60" key={`image-${index}-18`} />
                    </InnerIMGContainer>
                  </ModalContainer3>
                )}

                {/* Slide 5 */}
                {slide.Embla5text && (
                  <div className='w-full flex'>
                    <div className='w-2/4 ml-2.5 -mt-24 p-5'>
                      {slide.Embla5Br}
                      {slide.Embla5Br}
                      {slide.Embla5text}
                      {slide.Embla5Br}
                      {slide.Embla5Br}
                      {slide.Embla5text2}
                    </div>
                    <Caption2Container>
                      <h2>
                        <ul className="ml-5 list-disc list-inside">
                          <li>
                            {slide.Embla5caption}
                          </li>
                        </ul>
                      </h2>
                    </Caption2Container>
                    <div>
                      <img src={slide.Embla5image} className="h-tall object-cover rounded-img" key={`image-${index}-19`} />
                    </div>
                  </div>
                )}

                {/* Slide 6 */}
                {slide.Embla6image && (
                  <div className='w-full flex justify-center'>
                    <img src={slide.Embla6image} className="object-cover h-md rounded-img" key={`image-${index}-20`} />
                  </div>
                )}

                {/* Slide 7 */}
                {slide.Embla7text && (
                  <div className='w-full flex'>
                    <div className='w-2/4 ml-2.5 -mt-24 p-5'>
                      {slide.Embla7Br}
                      {slide.Embla7Br}
                      {slide.Embla7text}
                      {slide.Embla7Br}
                      {slide.Embla7Br}
                      {slide.Embla7text2}
                      {slide.Embla7Br}
                      {slide.Embla7text3}
                      {slide.Embla7Br}
                      {slide.Embla7text4}
                    </div>
                    <Caption3Container>
                      <h2>
                        <ul className="ml-5 list-disc list-inside">
                          <li>
                            {slide.Embla7caption}
                          </li>
                        </ul>
                      </h2>
                    </Caption3Container>
                    <div>
                      <img src={slide.Embla7image} className="h-semi_md object-cover rounded-img" key={`image-${index}-21`} />
                    </div>
                  </div>
                )}

                {/* Slide 8 */}
                {slide.Embla8image && (
                  <ModalContainer3>
                    <InnerContainer2>
                      <div className='ml-8'>
                        {slide.Embla8text}
                      </div>
                    </InnerContainer2>
                    <InnerIMG2Container>
                      <Caption4Container>
                        <div className='flex flex-col'>
                          <div><h2><ul className="ml-5 list-disc list-inside"><li>{slide.Embla8caption1}</li></ul></h2></div>
                          <img src={slide.Embla8image['1']} className="h-64  w-52 mx-2" key={`image-${index}-22`} />
                        </div>
                        <div className='flex flex-col'>
                          <div><h2><ul className="ml-5 list-disc list-inside"><li>{slide.Embla8caption2}</li></ul></h2></div>
                          <img src={slide.Embla8image['2']} className="h-64 w-64 items-center ml-5 mx-2" key={`image-${index}-23`} />
                        </div>
                        <div className='flex flex-col'>
                          <div><h2><ul className="ml-5 list-disc list-inside"><li>{slide.Embla8caption3}</li></ul></h2></div>
                          <img src={slide.Embla8image['3']} className="h-64 w-64 mx-2" key={`image-${index}-24`} />
                        </div>
                        <div className='flex flex-col'>
                          <div><h2><ul className="ml-5 list-disc list-inside"><li>{slide.Embla8caption4}</li></ul></h2></div>
                          <img src={slide.Embla8image['4']} className="h-64 mx-2" key={`image-${index}-25`} />
                        </div>
                        <div className='flex flex-col'>
                          <div><h2><ul className="ml-5 list-disc list-inside"><li>{slide.Embla8caption5}</li></ul></h2></div>
                          <img src={slide.Embla8image['5']} className="h-64 w-40 mx-2" key={`image-${index}-26`} />
                        </div>
                      </Caption4Container>
                    </InnerIMG2Container>
                  </ModalContainer3>
                )}


                {/* Slide 9 */}
                {slide.Embla9image && (
                  <ModalContainer3>
                    <h1 className="mb-10 text-3xl font-bold text-black mt-2">{slide.Embla9heading}</h1>
                    <div className='w-full flex justify-center flex-col'>
                      <div>
                        {slide.Embla9text}
                        {slide.Embla9Br}
                        {slide.Embla9Br}
                        {slide.Embla9text2}
                        {slide.Embla9Br}
                        {slide.Embla9Br}
                      </div>
                      <div className='flex items-center flex-col'>
                        <Caption4Container>
                          <h2>
                            <ul className="ml-5 list-disc list-inside">
                              <li>
                                {slide.Embla9caption1}
                              </li>
                            </ul>
                          </h2>
                        </Caption4Container>
                        <img src={slide.Embla9image} className="object-cover h-sm w-2/4 rounded-img" key={`image-${index}-27`} />
                      </div>
                    </div>
                  </ModalContainer3>
                )}





              </div>
            ))}
          </div>
        </div>
      </EmblaGridContainer>
    </section >
  )
}

export default EmblaCarousel13




