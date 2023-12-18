import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { CaptionContainer, EmblaGridContainer, IMG2Container, IMGContainer, InnerCenterContainer, InnerContainer2, InnerContainer3, MarginContainer } from "../Styles/Styles.js"
import Embla1 from "../assets/the_vault.png"
import Embla2 from "../assets/little_treasures.png"
import Embla3 from "../assets/the_collection.png"

export const slides = [
  {
    image: Embla1,
    heading: "THE VAULT",
    caption: "The Vault",
    SubHeader: "REVOLUTION",
    Embla1Br: <br />,
    Embla1text: "On Icon II & III we will introduce The Vault, a virtual shopping experience that unlocks access to an extended range of handbags and accessories that are onboard yet not on display in The Collection.",
    Embla1text2: "Browse our full assortment of pristine, pre-loved styles from Chanel, Christian Dior, Fendi, Gucci, Louis Vuitton, and Hermes.  View new collections from Marc Jacobs, Kurt Geiger and more. See detailed handbag descriptions and request a personal shopping appointment – we'll have your favorite pieces ready with a complimentary glass of bubbles.  Convenience and personalized service means our guests will never miss out on their dream handbag.",
    // bullet1: '• Infinite Ocean View Balcony',
    // bullet2: '• Family Infinite Ocean View Balcony',
    // bullet3: '• Infinite Central Park View Balcony',
    // bullet4: '• Ocean View Large Balcony',
    // bullet5: '• Connecting Ocean View Balcony',
    // bullet6: '• Ocean View Balcony',
    // bullet7: '• Central Park View Balcony',
    // bullet8: '• Surfside Family View Balcony',
    ButtonText: "EVOLUTION"
  },
  {
    image: Embla2,
    heading: "THE COLLECTION WELCOMES LITTLE TREASURES",
    caption: "Little Treasures",
    SubHeader: "EVOLUTION",
    Embla2Br: <br />,
    Embla2text: "Find the perfect balance of style and affordability with Little Treasures, our carefully curated bridge jewelry collection.",
    Embla2text2: "Guests can express their personal style through fashionable pieces that range from classic to trending to statement designs.  Stunning baubles, priced within reach.  A perfect Little Treasure to remember your cruise vacation and compliment your handbag find.",
    ButtonText: "TRIED & TRUE"
  },
  {
    image: Embla3,
    heading: "THE COLLECTION",
    caption: "The Collection, Allure of the Seas",
    SubHeader: "TRIED & TRUE",
    Embla3Br: <br />,
    Embla3text: "This highly successful strategy, seamlessly incorporates our proven 'good, better, best' merchandising approach.  The Collection is a stylish and expansive boutique offering styles and brands that deliver a wide range of price points. Guests will find fashion jewelry, trending sunglasses, accessories, and handbags from trendy to artisanal, and contemporary to pre-loved vintage. This winning shopping experience is a Royal Caribbean 'fashion fan favorite'.",
    Brands: "Swarovski, Kendra Scott, Uno, Coeur de Lion, Guess, Mary Francis, Coach, Kate Spade, Karl Lagerfeld, and WGACA"
  },
]

const EmblaCarousel3 = (props) => {
  const [hideBullets, setHideBullets] = useState(true);
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      setHideBullets(viewportWidth <= 1530);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <MarginContainer>
        <EmblaGridContainer>
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                    <span>{index + 1}</span>
                  </div>
                  <IMGContainer>
                    <InnerContainer3>
                      <div className="md:mt-0 md:w-full xs:w-full xs:pr-10 xs:mt-10">
                        <h5 className="text-3xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">{slide.SubHeader}</li></ul></h5>
                        <h1 className="mb-10 text-7xl font-bold text-black mt-2">{slide.heading}</h1>
                        <h3 className="lg:text-3xl xs:text-1xl mb-5 text-black">

                          {/* Slide 1 */}
                          {slide.Embla1text}
                          {slide.Embla1Br}
                          {slide.Embla1Br}
                          {slide.Embla1text2}

                          {/* Slide 2 */}
                          {slide.Embla2text}
                          {slide.Embla2Br}
                          {slide.Embla2Br}
                          {slide.Embla2text2}

                          {/* Slide 3 */}
                          {slide.Embla3text}
                          {slide.Embla3Br}
                          {slide.Embla3Br}
                          {slide.Brands}


                        </h3>

                        {/* {hideBullets ? ( */}
                        {/*   <div></div> */}
                        {/* ) : ( */}
                        {/*   <div className='grid-cols-3 grid lg:w-full md:w-full mt-2 mb-2'> */}
                        {/*     <ul className="list-inside"> */}
                        {/*       <li className="listItem mb-2 text-black">{slide.bullet1}</li> */}
                        {/*       <li className="listItem mb-2 text-black">{slide.bullet2}</li> */}
                        {/*       <li className="listItem mb-2 text-black">{slide.bullet3}</li> */}
                        {/*     </ul> */}
                        {/*     <ul> */}
                        {/*       <li className="listItem mb-2 text-black">{slide.bullet4}</li> */}
                        {/*       <li className="listItem mb-2 text-black">{slide.bullet3alt}</li> */}
                        {/*       <li className="listItem mb-2 text-black">{slide.bullet4alt}</li> */}
                        {/*       <li className="listItem mb-2 text-black">{slide.bullet5}</li> */}
                        {/*     </ul> */}
                        {/*     <ul className="list-inside"> */}
                        {/*       <li className="listItem mb-2 text-black">{slide.bullet6}</li> */}
                        {/*       <li className="listItem mb-2 text-black">{slide.bullet7}</li> */}
                        {/*       <li className="listItem mb-2 text-black">{slide.bullet8}</li> */}
                        {/*     </ul> */}
                        {/*   </div> */}
                        {/* )} */}

                        {/* <button className='rounded-full font-semibold border-black text-2xl bg-white md:mt-0 p-7 text-black'>{slide.button} */}
                        {/*   <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} /> */}
                        {/* </button> */}
                      </div>
                    </InnerContainer3>
                    <InnerContainer2>
                      <CaptionContainer>
                        <h2><ul className="ml-5 list-disc list-inside"><li>{slide.caption}</li></ul></h2>
                      </CaptionContainer>
                      <img
                        className="embla__slide__img"
                        src={slide.image}
                        alt={`IMG${index + 1}`}
                      />
                      <div className="embla__buttons pb-20 flex absolute">
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
                    </InnerContainer2>
                  </IMGContainer>
                </div>
              ))}
            </div>
          </div>
        </EmblaGridContainer>
      </MarginContainer>
    </section >
  )
}

export default EmblaCarousel3




