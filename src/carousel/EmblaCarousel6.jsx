import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { CaptionContainer, EmblaGridContainer, IMG2Container, IMGContainer, InnerContainer1, InnerContainer2, InnerContainer3, Margin3Container, MarginContainer } from "../Styles/Styles.js"
import Embla1 from "../assets/little_treasures.png"
import Embla2 from "../assets/fashion2.png"
import Embla3 from "../assets/fashion1.png"

export const slides = [
  {
    // image: Embla1,
    heading: "Redefining the Onboard Shopping Experience",
    caption: "GIF",
    SubHeader: "REVOLUTION",
    Embla1Br: <br />,
    Embla1text: "By integrating Virtual Try-On with a 'Complete the Look' feature, we aim to streamline decision-making, enhancing purchase satisfaction, and minimizing return rates.",
    Embla1text2: "Retailers adopting this technology gain a competitive edge by providing a more engaging and satisfying shopping experience compared to those relying solely on traditional methods. The feature also adds a modern and tech-savvy aspect to the retail setting, attracting customers who appreciate innovative and interactive shopping experiences.",
    Embla1text3: "Virtual Try – on , complete the look (recommend accs) look for video of try on video, pavilions on 5 is an extension of fashion jewelry story (guests like to shop in an environment out of shop) – 'meet the customer where they are'",
    ButtonText: "REVOLUTION"
  },
  {
    image: Embla2,
    heading: "RESORT REVERIE",
    caption: "Prince + Greene, Allure of the Seas",
    SubHeader: "EVOLUTION",
    Embla2Br: <br />,
    Embla2text: "Embarking on a style odyssey, we aim to deepen our understanding of modern and effortless resort silhouettes, sparked by the grand opening of Prince + Greene on Allure of the Seas. This dynamic momentum propels us forward, as we prepare to weave this newfound inspiration into our expanding portfolio of fashion brands.",
    ButtonText: "TRIED & TRUE"
  },
  {
    image: Embla3,
    heading: "Elevated Resort Wear",
    caption: "Farm Rio",
    SubHeader: "TRIED & TRUE",
    Embla3Br: <br />,
    Embla3text: "Upscale Resort Fashion",
    Embla3text2: "Starboard will continue to enhance a mix of stylish Beach to Bar apparel that enables guests to flawlessly move from one onboard venue to the next.",
    Embla3text3: "Versatile and Fashionable Handbags",
    Embla3text4: "We are improving our existing assortment by offering handbags that strike a balance between contemporary trends and timeless elegance – at an accessible price point. The inclusion of reasonably priced accessory items not only enhances the perceived value for guests but also encourages impulse purchases.",
    Embla3text5: "New notes: 7 Diamonds & Farm Rio are working, Kendra Scott, Larimar , hats, new fashion jewelry, handbags (multi-category approach)"
  },
]

const EmblaCarousel6 = (props) => {
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
                    <InnerContainer1>
                      <div className="md:mt-0 md:w-full xs:w-full xs:pr-10 xs:mt-10">
                        <h5 className="text-3xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">{slide.SubHeader}</li></ul></h5>
                        <h1 className="mb-10 text-7xl font-bold text-black mt-2">{slide.heading}</h1>
                        <h3 className="xs:text-1xl mb-5 text-black">

                          {/* Slide 1 */}
                          {slide.Embla1text}
                          {slide.Embla1Br}
                          {slide.Embla1Br}
                          {slide.Embla1text2}
                          {slide.Embla1Br}
                          {slide.Embla1Br}
                          {slide.Embla1text3}

                          {/* Slide 2 */}
                          {slide.Embla2text}
                          {slide.Embla2Br}
                          {slide.Embla2Br}
                          {slide.Embla2text2}

                          {/* Slide 3 */}
                          {slide.Embla3text}
                          {slide.Embla3Br}
                          {slide.Embla3Br}
                          {slide.Embla3text2}
                          {slide.Embla3Br}
                          {slide.Embla3Br}
                          {slide.Embla3text3}
                          {slide.Embla3Br}
                          {slide.Embla3Br}
                          {slide.Embla3text4}
                          {slide.Embla3Br}
                          {slide.Embla3Br}
                          {slide.Embla3text5}


                        </h3>
                      </div>
                    </InnerContainer1>
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

export default EmblaCarousel6




