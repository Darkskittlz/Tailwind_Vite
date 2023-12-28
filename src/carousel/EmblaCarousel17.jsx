import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { CaptionContainer, EmblaGridContainer, IMGContainer, InnerContainer1, InnerContainer2, InnerContainer7, InnerContainer8, InnerIMG5Container, InnerIMGContainer, Margin2Container, Margin4Container } from "../Styles/Styles.js"
import Emblaimage1 from "../assets/ItsIconic/Personalizing_Retail.png"
import Emblaimage3 from "../assets/ItsIconic/The_Lounge_Capsule.png"
import Emblaimage4 from "../assets/ItsIconic/The_Polo_Capsule.png"
import Emblaimage5 from "../assets/ItsIconic/The_Linen_Capsule.png"
import Emblaimage6 from "../assets/ItsIconic/Soft_Apparel_Growth.png"

export const slides = [
  {
    Emblaimage1: Emblaimage1,
    heading: "PERSONALIZING RETAIL",
    SubHeader: "REVOLUTION",
    caption1: "Peronalization Station",
    Embla1Br: <br />,
    Embla1text: "A new take on cruise swag!",
    Embla1text2: "This is not your Grandma’s embroidery or your Scout troop patch of yesteryear.",
    Embla1text3: "We’ve got the tools to personalize hats, rash guards, beach bags, plush and more to create memorable moments for all.",
    Embla1text4: "Loyal cruisers can create venue merch or pick up patches of favorite cruise ports.  Monograms and initials are easily added to pop-up beach bags. Parents can help kids add their names to cruise keepsakes. Just like Port Merchants, our Smart software will ensure compliance with placement, size, and use of pre-approved brand logos. ",
    Embla1text5: "More ways to capture unforgettable memories!",
    ButtonText: "EVOLUTION"
  },
  {
    heading: "FLAGSHIP LOGO ASSORTMENT",
    SubHeader: "EVOLUTION",
    Embla2Br: <br />,
    Embla2text: "With our eye on quality and fabrication, we are combining the sophistication you love with a contemporary twist, expanding our assortment to include Lounge, Polo shirts and Linen. We're partnering with new and existing manufacturers to create a Flagship Royal Caribbean assortment. This resort-like capsule will marry timeless classic with discreet logos, ensuring an elevated aesthetic that guests will want to wear on board and at home.",
    ButtonText: "EVOLUTION"
  },
  {
    Emblaimage3: Emblaimage3,
    heading: "DISCOVER OUR PERFECT LOUNGEWEAR TO VACATION IN STYLE",
    SubHeader: "EVOLUTION",
    Embla3Br: <br />,
    ButtonText: "EVOLUTION"
  },
  {
    Emblaimage4: Emblaimage4,
    heading: "EMBRACE CLASSIC, CASUAL STYLES WITH OUR NEW POLOS",
    SubHeader: "EVOLUTION",
    Embla3Br: <br />,
    ButtonText: "EVOLUTION"
  },
  {
    Emblaimage5: Emblaimage5,
    heading: "COOL, CRISP LINEN. ALWAYS POLISHED. ALWAYS STYLISH",
    SubHeader: "EVOLUTION",
    Embla3Br: <br />,
    ButtonText: "TRIED & TRUE"
  },
  {
    Emblaimage6: Emblaimage6,
    heading: "AN ICONIC BRAND",
    SubHeader: "TRIED & TRUE",
    Embla6Br: <br />,
    Embla6text: "We've heard your feedback and we're committed to building an Iconic brand together.",
    Embla6text2: "As a result of our strong in-house capabilities and a product designer focused on elevating the brand, our soft apparel logo business has increased by $4M, a new and impressive record! P.S – That's with 2 less ships in the fleet.",
    Embla6text3: "Current tally: $10M in 2023 YTD sales vs. $6M for full year sales in 2019, our peak volume year. That’s +67% increase and growing!",
    Embla6text4: "Unit sales increased to 381,000 units YTD 2023 vs. 253,000 for full year 2019 our previous peak volume year, an increase of +51%.",
  },
]


const EmblaCarousel17 = (props) => {
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
      <Margin4Container>
        <Margin2Container>
          <EmblaGridContainer>
            <div className="mb-20 embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {slides.map((slide, index) => (
                  <div className="embla__slide" key={index}>
                    <div className="embla__slide__number">
                      <span>{index + 1}</span>
                    </div>
                    <div className="xs:w-full xs:pr-10 xs:mt-20 md:mt-0 xs:mb-20">
                      <h5 className="text-3xl text-white ml-12 mb-10 text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">{slide.SubHeader}</li></ul></h5>
                      <h1 className="font-bold leading-10 w-5/6 ml-10 text-black">{slide.heading}</h1>

                      {slide.Embla1text && (
                        <IMGContainer>
                          <InnerContainer1>
                            <div className="xs:w-full xs:pr-10 xs:mt-20 md:mt-0 xs:mb-20">

                              {/* Slide 1 */}
                              <h3 className="lg:text-3xl xs:text-3xl mb-5 text-black">
                                {slide.Embla1text}
                                {slide.Embla1Br}
                                {slide.Embla1Br}
                                {slide.Embla1text2}
                                {slide.Embla1Br}
                                {slide.Embla1Br}
                                {slide.Embla1text3}
                                {slide.Embla1Br}
                                {slide.Embla1Br}
                                {slide.Embla1text4}
                                {slide.Embla1Br}
                                {slide.Embla1Br}
                                {slide.Embla1text5}
                              </h3>
                            </div>
                          </InnerContainer1>
                          <div className="flex justify-end mr-twenty_two relative">
                            <img
                              className="w-full h-xtra_tall right-0 rounded-img"
                              src={slide.Emblaimage1}
                            />
                          </div>
                          <div className="embla__buttons bottom-0 flex absolute">
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                            <button
                              className='forwardButton'
                              onClick={onNextButtonClick}
                              disabled={nextBtnDisabled}
                            >
                              {slide.ButtonText}
                              <NextButton
                                className="pr-8 py-5 ml-3 items-center flex"
                              />
                            </button>
                          </div>
                        </IMGContainer>
                      )}

                      {/* Slide 2 */}
                      {slide.Embla2text && (
                        <div className='w-full mx-5 justify-between flex flex-col'>
                          <InnerContainer8>
                            <div className='ml-8'>
                              <h3 className="lg:text-3xl xs:text-3xl mb-5 text-black">
                                {slide.Embla2text}
                              </h3>
                            </div>
                          </InnerContainer8>
                          <div className="embla__buttons bottom-0 flex absolute">
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                            <button
                              className='forwardButton'
                              onClick={onNextButtonClick}
                              disabled={nextBtnDisabled}
                            >
                              {slide.ButtonText}
                              <NextButton
                                className="pr-8 py-5 ml-3 items-center flex"
                              />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Slide 3 */}
                      {slide.Emblaimage3 && (
                        <div className='w-full mx-5 justify-between flex flex-col'>
                          <div className="h-tall_plus flex -mt-18 justify-center relative">
                            <img
                              className="w-2/4 rounded-img2 object-fit"
                              src={slide.Emblaimage3}
                            />
                          </div>
                          <div className="embla__buttons mt-22 -bottom-5 flex absolute">
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                            <button
                              className='forwardButton'
                              onClick={onNextButtonClick}
                              disabled={nextBtnDisabled}
                            >
                              {slide.ButtonText}
                              <NextButton
                                className="pr-8 py-5 ml-3 items-center flex"
                              />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Slide 4 */}
                      {slide.Emblaimage4 && (
                        <div className='w-full mx-5 justify-between flex flex-col'>
                          <div className="h-md_plus mt-11 flex justify-center relative">
                            <img
                              className="w-2/4 rounded-img2 object-fit"
                              src={slide.Emblaimage4}
                            />
                          </div>
                          <div className="embla__buttons bottom-0 flex absolute">
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                            <button
                              className='forwardButton'
                              onClick={onNextButtonClick}
                              disabled={nextBtnDisabled}
                            >
                              {slide.ButtonText}
                              <NextButton
                                className="pr-8 py-5 ml-3 items-center flex"
                              />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Slide 5 */}
                      {slide.Emblaimage5 && (
                        <div className='w-full mx-5 justify-between flex flex-col'>
                          <div className="h-md_plus flex justify-center relative">
                            <img
                              className="w-2/4 h-xtra_tall rounded-img3 object-fit"
                              src={slide.Emblaimage5}
                            />
                          </div>
                          <div className="embla__buttons bottom-0 flex absolute">
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                            <button
                              className='forwardButton'
                              onClick={onNextButtonClick}
                              disabled={nextBtnDisabled}
                            >
                              {slide.ButtonText}
                              <NextButton
                                className="pr-8 py-5 ml-3 items-center flex"
                              />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Slide 6 */}
                      {slide.Emblaimage6 && (
                        <IMGContainer>
                          <InnerContainer1>
                            <div className="xs:w-full xs:pr-10 xs:mt-20 md:mt-0 xs:mb-20">
                              <h3 className="lg:text-3xl xs:text-3xl mb-5 text-black">
                                {slide.Embla6text}
                                {slide.Embla6Br}
                                {slide.Embla6Br}
                                {slide.Embla6text2}
                                {slide.Embla6Br}
                                {slide.Embla6Br}
                                {slide.Embla6text3}
                                {slide.Embla6Br}
                                {slide.Embla6Br}
                                {slide.Embla6text4}
                              </h3>
                            </div>
                          </InnerContainer1>
                          <div className="h-xtra_tall flex justify-end mr-thirty relative">
                            <img
                              className="w-full right-0 rounded-img"
                              src={slide.Emblaimage6}
                            />
                          </div>
                          <div className="embla__buttons bottom-0 flex absolute">
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                            <button
                              className='forwardButton'
                              onClick={onNextButtonClick}
                              disabled={nextBtnDisabled}
                            >
                              {slide.ButtonText}
                              <NextButton
                                className="pr-8 py-5 ml-3 items-center flex"
                              />
                            </button>
                          </div>
                        </IMGContainer>
                      )}

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </EmblaGridContainer>
        </Margin2Container>
      </Margin4Container>
    </section >
  )
}

export default EmblaCarousel17
