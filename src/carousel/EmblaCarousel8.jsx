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
    heading: "",
    caption: "",
    Embla1Super: "SM",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: " ",
    Embla1text2: "",
    Embla1text3: "",
    Embla1text4: "",
    Embla1text5: "",
    Embla1text6: ""
  },
  {
    image: Embla2,
    heading: "",
    caption: "",
    Embla1Super: "SM",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: " ",
    Embla1text2: "",
    Embla1text3: "",
    Embla1text4: "",
    Embla1text5: "",
    Embla1text6: ""
  },
  {
    image: Embla3,
    heading: "",
    caption: "",
    Embla1Super: "SM",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: " ",
    Embla1text2: "",
    Embla1text3: "",
    Embla1text4: "",
    Embla1text5: "",
    Embla1text6: ""
  },
  {
    image: Embla4,
    heading: "",
    caption: "",
    Embla1Super: "SM",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: " ",
    Embla1text2: "",
    Embla1text3: "",
    Embla1text4: "",
    Embla1text5: "",
    Embla1text6: ""
  },
  {
    image: Embla5,
    heading: "",
    caption: "",
    Embla1Super: "SM",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: " ",
    Embla1text2: "",
    Embla1text3: "",
    Embla1text4: "",
    Embla1text5: "",
    Embla1text6: ""
  },
  {
    image: Embla6,
    heading: "",
    caption: "",
    Embla1Super: "SM",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: " ",
    Embla1text2: "",
    Embla1text3: "",
    Embla1text4: "",
    Embla1text5: "",
    Embla1text6: ""
  },
  {
    image: Embla7,
    heading: "",
    caption: "",
    Embla1Super: "SM",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: " ",
    Embla1text2: "",
    Embla1text3: "",
    Embla1text4: "",
    Embla1text5: "",
    Embla1text6: ""
  },
  {
    image: Embla8,
    heading: "",
    caption: "",
    Embla1Super: "SM",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: " ",
    Embla1text2: "",
    Embla1text3: "",
    Embla1text4: "",
    Embla1text5: "",
    Embla1text6: ""
  },
  {
    image: Embla9,
    heading: "",
    caption: "",
    Embla1Super: "SM",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: " ",
    Embla1text2: "",
    Embla1text3: "",
    Embla1text4: "",
    Embla1text5: "",
    Embla1text6: ""
  },
  {
    image: Embla10,
    heading: "",
    caption: "",
    Embla1Super: "SM",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text: " ",
    Embla1text2: "",
    Embla1text3: "",
    Embla1text4: "",
    Embla1text5: "",
    Embla1text6: ""
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
                      <h1 className="mb-5 text-black text-3xl mt-2">{slide.heading}</h1>

                      {/* Slide 1 */}
                      <h3 className="text-1xl text-base/6 lg:w-full md:w-full text-black">
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
                      <h2 className="mb-5 text-black text-2xl font-semibold text-base/6 mt-2">
                        {slide.Embla2headertext}
                        <span className='sup'>{slide.Embla2Super}</span>
                        {slide.Embla2headertext2}
                      </h2>
                      <h3 className="text-1xl text-base/6 lg:w-full md:w-full text-black">
                        {slide.Embla2text}
                        <span className='sup'>{slide.Embla2Super}</span>
                        {slide.Embla2text2}
                        <span className='sup'>{slide.copywright}</span>
                        {slide.Embla2text3}
                      </h3>

                      {/* Slide 3 */}
                      <h3 className="text-1xl text-base/6 lg:w-full md:w-full text-black">
                        {slide.Embla3text}
                        <span className='tracking-tighter'>{slide.Embla3IOTS}</span>
                        {slide.Embla3text2}
                      </h3>

                      {/* Slide 4 */}
                      <h3 className="text-1xl text-base/6 lg:w-full md:w-full text-black">
                        {slide.Embla4text}
                        <span className='tracking-tighter'>{slide.Embla3IOTS}</span>
                        {slide.Embla4text2}
                        <span className='sup'>{slide.Embla4Copywright}</span>
                        {slide.Embla4text3}
                      </h3>


                      {/* Slide 5 */}
                      <h3 className="text-1xl text-base/6 lg:w-full md:w-full text-black">
                        {slide.Embla5text}
                        <span className='sup'>{slide.Embla5Super}</span>
                        {slide.Embla5text2}
                        <span className='tracking-tighter'>{slide.Embla5IOTS}</span>
                        {slide.Embla5text3}
                      </h3>

                      {/* Slide 6 */}
                      <h3 className="text-1xl text-base/6 lg:w-full md:w-full text-black">
                        {slide.Embla6text}
                        <span className='tracking-tighter'>{slide.Embla6IOTS}</span>
                        {slide.Embla6text2}
                        <span className='sup'>{slide.Embla6Super}</span>
                        {slide.Embla6text3}
                      </h3>

                      {/* Slide 7 */}
                      <h3 className="text-1xl text-base/6 lg:w-full md:w-full text-black">
                        {slide.Embla7text}
                        <span className='tracking-tighter'>{slide.Embla7IOTS}</span>
                        {slide.Embla7text2}
                        <span className='sup'>{slide.Embla7Super}</span>
                        {slide.Embla7text3}
                      </h3>

                      {/* Slide 8 */}
                      <h3 className="text-1xl text-base/6 lg:w-full md:w-full text-black">
                        {slide.Embla8text}
                        <span className='tracking-tighter'>{slide.Embla8IOTS}</span>
                        {slide.Embla8text2}
                        <span className='sup'>{slide.Embla8Copywright}</span>
                        {slide.Embla8text3}
                      </h3>

                    </div>
                  </InnerContainer1>
                  <InnerContainer2>
                    <h2><ul className="list-disc list-inside"><li>{slide.caption}<span className='sup'>{slide.Embla2Super}</span></li></ul></h2>
                    <h2><ul className="list-disc list-inside"><li>{slide.caption}<span className='sup'>{slide.Embla4Super}</span></li></ul></h2>
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







