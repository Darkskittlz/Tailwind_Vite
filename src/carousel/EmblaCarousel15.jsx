
import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { Caption10Container, Caption2Container, Caption3Container, Caption4Container, Caption6Container, Caption7Container, Caption8Container, Caption9Container, CaptionContainer, EmblaGridContainer, IMG3Container, IMGContainer, InnerContainer1, InnerContainer2, InnerContainer3, InnerContainer4, InnerContainer5, InnerIMG2Container, InnerIMG3Container, InnerIMGContainer, ModalContainer, ModalContainer2, ModalContainer3 } from "../Styles/Styles.js"
import Embla2 from "../assets/Top10.png"



export const slides = [
  {
    Embla1SubHeader: "POSITIONING",
    heading: "RFP RESPONSES TO POSITIONING",
    Embla1Br: <br />,
    Embla1text: "How does your company differ from the companies with whom you usually compete?",
    Embla1text2: "How would winning this bid factor into your company’s forward-looking strategy?",
  },
  {
    Embla2image: Embla2,
    Embla2SubHeader: "POSITIONING",
    heading: "TOP TEN REASONS WE'RE DIFFERENT (AND BETTER) THAN ANY OTHER CRUISE RETAILER",
    Embla2Br: <br />,
  },
  {
    Embla3SubHeader: "POSITIONING",
    heading: "STRATEGIC TRIUMPH: THE IMPACT OF WINNING THIS BID ON STARBOARD’S FORWARD-LOOKING STRATEGY",
    Embla3Br: <br />,
    Embla3text: "We’re thrilled to present our proposal to expand our partnership. Our continued collaboration is not only essential for mutual growth but also a testament to our shared commitment to delivering incredible experiences and retail transformation for our guests. Expanding our relationship will propel our business to new heights. Our shared dedication to dialing up the guest experience on Icon II & III will not only drive revenue growth but also elevate our reputation as a leader in the industry.",
    Embla3text2: "And, we like you…  scratch that, it’s true, we love you and we’re eternally Loyal to Royal!",
    Embla3text3: "Thank you for considering our proposal, we eagerly await the opportunity to discuss our future."
  },

]


const EmblaCarousel15 = (props) => {
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
                <IMG3Container>
                  <InnerContainer5>
                    <div className="md:mt-0 md:w-full md:p-5 xs:w-full xs:pr-10 xs:mt-10 ">
                      <h5 className="text-3xl text-white text-left font-semibold">
                        <ul className="list-disc list-inside">
                          <li className="listItem">
                            {slide.Embla1SubHeader}
                            {slide.Embla2SubHeader}
                            {slide.Embla3SubHeader}
                          </li>
                        </ul>
                      </h5>
                      <h1 className="mb-10 text-3xl font-bold text-black mt-2">{slide.heading}</h1>
                      <h3 className="xs:text-1xl mb-5 text-black">

                        {/* Slide 1 */}
                        {slide.Embla1text && (
                          <h3 className="xs:text-1xl mb-5 text-black">
                            {slide.Embla1Br}
                            {slide.Embla1text}
                            {slide.Embla1Br}
                            {slide.Embla1Br}
                            {slide.Embla1text2}
                          </h3>
                        )}

                        {/* Slide 2 */}
                        {slide.Embla2image && (
                          <div className='w-full justify-center flex'>
                            <div className='flex gap-3 '>
                              <img src={slide.Embla2image} className="h-md object-cover rounded-img" key={`image-${index}-1`} />
                            </div>
                          </div>
                        )}

                        {/* Slide 3 */}
                        {slide.Embla3text && (
                          <div className='w-full flex -mt-24'>
                            {slide.Embla3Br}
                            {slide.Embla3Br}
                            {slide.Embla3text}
                            {slide.Embla3Br}
                            {slide.Embla3Br}
                            {slide.Embla3text2}
                            {slide.Embla3Br}
                            {slide.Embla3Br}
                            {slide.Embla3text3}
                          </div>
                        )}

                      </h3>
                    </div>
                  </InnerContainer5>

                  <div className="forwardButton embla__buttons bottom-0 flex absolute">
                    <PrevButton className="PrevButton" onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <button
                      onClick={onNextButtonClick}
                      disabled={nextBtnDisabled}
                    >
                      <NextButton
                        className="NextButton pr-8 py-5 ml-3 items-center flex"
                      />
                    </button>
                  </div>

                </IMG3Container>
              </div>
            ))}
          </div>
        </div>
      </EmblaGridContainer>
    </section >
  )
}

export default EmblaCarousel15




