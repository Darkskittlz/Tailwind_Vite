import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { CaptionContainer, EmblaGridContainer, IMGContainer, InnerContainer1, InnerContainer2, InnerIMG5Container, InnerIMGContainer, Margin2Container, Margin4Container } from "../Styles/Styles.js"
import EmblaVid from "../assets/MirrorMirror/sephoraVid.mp4"
import Brand1 from "../assets/MirrorMirror/Kylie.jpg"
import Brand2 from "../assets/MirrorMirror/Olaplex.png"
import Brand3 from "../assets/MirrorMirror/Supergoop.svg"
import Brand4 from "../assets/MirrorMirror/Iconic.png"
import Brand5 from "../assets/MirrorMirror/Drunk Elephant.png"
import Brand6 from "../assets/MirrorMirror/Dior.png"
import Brand7 from "../assets/MirrorMirror/Chanel.jpg"
import Brand8 from "../assets/MirrorMirror/YSL.jpg"
import Brand9 from "../assets/MirrorMirror/Lancome.png"
import Brand10 from "../assets/MirrorMirror/Clinique.svg"

export const slides = [
  {
    EmblaVid: EmblaVid,
    heading: "TECH-INFUSED BEAUTY",
    SubHeader: "REVOLUTION",
    Embla1Br: <br />,
    Embla1text: "Step into the world of beauty with our new innovative offerings.",
    Embla1text2: "Embrace the future of makeup exploration in Solera with our virtual Make-up Try-On, an AR mirror that allows customers to experiment with various products without the need to continuously remove make-up.  All virtual products will be in-stock and ready for purchase.",
    Embla1text3: "Elevating skincare analysis, our augmented reality experience, Skinsight, scans a customer's skin, pinpointing potential concerns and offering tailored suggestions of in-stock and effective skincare solutions.",
    Embla1text4: "It's not just beauty; it's a personalized, tech-enhanced journey to help you look and feel your best.",
    ButtonText: "EVOLUTION"
  },
  {
    Brands: {
      1: Brand1,
      2: Brand2,
      3: Brand3,
      4: Brand4,
      5: Brand5
    },
    heading: "TRENDSETTING BREAUTY BRANDS",
    SubHeader: "EVOLUTION",
    Embla2Br: <br />,
    Embla2text: "We pride ourselves on being at the forefront of the fashion and beauty industry. With recent additions like Kylie Cosmetics, Olaplex, Supergoop and Iconic London we have solidified our position as a trendsetter. We are dedicated to staying ahead of the curve by continuously introducing new and exciting brands, like Drunk Elephant, making our beauty shop a destination for both mom and daughter alike.",
    ButtonText: "TRIED & TRUE"
  },
  {
    Brands2: {
      1: Brand6,
      2: Brand7,
      3: Brand8,
      4: Brand9,
      5: Brand10
    },
    heading: "TIMELESS BEAUTY AND FRAGRANCE BRANDS",
    SubHeader: "TRIED & TRUE",
    Embla3Br: <br />,
    Embla3text: "Guests will indulge their senses with our collection of best-in-class fragrance and beauty brands, including all time favorites Chanel, Dior, YSL, Lancôme and Clinique.",
    Embla3text2: "Not only are we committed to offering these coveted beauty brands, but we're also dedicated to ensuring that they are always in stock. Whether it’s Chanel No.5 or Dior show mascara, guests will never have to wait until they get home to stock up on their favorites.",
  },
]


const EmblaCarousel11 = (props) => {
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

                      {slide.EmblaVid && (
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
                              </h3>
                            </div>
                          </InnerContainer1>
                          <div className="h-tall flex justify-end mr-10 relative">
                            <video
                              className="w-5/6 right-0 rounded"
                              src={slide.EmblaVid}
                              autoPlay
                              muted
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
                          <InnerContainer2>
                            <div className='ml-8'>
                              <h3 className="lg:text-3xl xs:text-3xl mb-5 text-black">
                                {slide.Embla2text}
                              </h3>
                            </div>
                          </InnerContainer2>
                          <InnerIMG5Container>
                            <img src={slide.Brands['1']} key={`image-${index}-1`} />
                            <img src={slide.Brands['2']} key={`image-${index}-2`} />
                            <img src={slide.Brands['3']} key={`image-${index}-3`} />
                            <img src={slide.Brands['4']} key={`image-${index}-4`} />
                            <img src={slide.Brands['5']} key={`image-${index}-5`} />
                          </InnerIMG5Container>
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
                      {slide.Embla3text && (
                        <div className='w-full mx-5 justify-between flex flex-col'>
                          <InnerContainer2>
                            <div className='ml-8'>
                              <h3 className="lg:text-3xl xs:text-3xl mb-5 text-black">
                                {slide.Embla3text}
                                {slide.Embla3Br}
                                {slide.Embla3Br}
                                {slide.Embla3text2}
                              </h3>
                            </div>
                          </InnerContainer2>
                          <InnerIMG5Container>
                            <img src={slide.Brands2['1']} id="Dior" key={`image-${index}-6`} />
                            <img src={slide.Brands2['2']} id="Chanel" key={`image-${index}-7`} />
                            <img src={slide.Brands2['3']} key={`image-${index}-8`} />
                            <img src={slide.Brands2['4']} id="Lancome" key={`image-${index}-9`} />
                            <img src={slide.Brands2['5']} key={`image-${index}-10`} />
                          </InnerIMG5Container>
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

export default EmblaCarousel11
