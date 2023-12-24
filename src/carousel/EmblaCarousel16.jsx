
import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { Caption10Container, Caption2Container, Caption3Container, Caption4Container, Caption6Container, Caption7Container, Caption8Container, Caption9Container, CaptionContainer, EmblaGridContainer, IMG3Container, IMGContainer, InnerContainer1, InnerContainer2, InnerContainer3, InnerContainer4, InnerContainer5, InnerIMG2Container, InnerIMG3Container, InnerIMGContainer, ModalContainer, ModalContainer2, ModalContainer3 } from "../Styles/Styles.js"

export const slides = [
  {
    Embla1SubHeader: "REFERENCES",
    heading: "RFP RESPONSES TO REFERENCES",
    Embla1Br: <br />,
    Embla1text: "If cited as an example above, please list client reference (name, title, company, address, telephone, and email address).",
  },
  {
    Embla2SubHeader: "REFERENCES",
    Embla2Br: <br />,
    Embla2text: "Celebrity Cruises",
    Embla2text2: "Jeannette Coto Dou",
    Embla2text3: "Vice President, Onboard Revenue",
    Embla2text4: "1050 Caribbean Way, Miami, FL 33132",
    Embla2text5: "786.514.5946",
    Embla2text6: "jcotodou@rccl.com",
    Embla2text7: "Carnival Cruise Lines",
    Embla2text8: "Luis Terife",
    Embla2text9: "Vice President II, Onboard Guest Commerce",
    Embla2text10: "3655 NW 87th Avenue,",
    Embla2text11: "Miami FL 33178",
    Embla2text12: "305-599-2600 x65136",
    Embla2text13: "lterifesarria@carnival.com",
  }
]


const EmblaCarousel16 = (props) => {
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
                    <div className="md:mt-0 md:w-full md:p-5 xs:w-full h-xtra_tall xs:pr-10 xs:mt-10 ">
                      <h5 className="text-3xl text-white text-left font-semibold">
                        <ul className="list-disc list-inside">
                          <li className="listItem">
                            {slide.Embla1SubHeader}
                            {slide.Embla2SubHeader}
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
                          </h3>
                        )}

                        {/* Slide 2 */}
                        {slide.Embla2text && (
                          <div className='w-full grid-cols-2 justify-around flex'>
                            <div>
                              <h3 className="xs:text-1xl mb-5 align-top text-black">
                                {slide.Embla2text}
                                {slide.Embla2Br}
                                {slide.Embla2text2}
                                {slide.Embla2Br}
                                {slide.Embla2text3}
                                {slide.Embla2Br}
                                {slide.Embla2text4}
                                {slide.Embla2Br}
                                {slide.Embla2text5}
                                {slide.Embla2Br}
                                {slide.Embla2text6}
                              </h3>
                            </div>
                            <div>
                              <h3 className="xs:text-1xl mb-5 text-black">
                                {slide.Embla2text7}
                                {slide.Embla2Br}
                                {slide.Embla2text8}
                                {slide.Embla2Br}
                                {slide.Embla2text9}
                                {slide.Embla2Br}
                                {slide.Embla2text10}
                                {slide.Embla2Br}
                                {slide.Embla2text11}
                                {slide.Embla2Br}
                                {slide.Embla2text12}
                                {slide.Embla2Br}
                                {slide.Embla2text13}
                              </h3>
                            </div>
                          </div>
                        )}
                      </h3>
                    </div>
                  </InnerContainer5>

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
              </div>
            ))}
          </div>
        </div>
      </EmblaGridContainer>
    </section >
  )
}

export default EmblaCarousel16




