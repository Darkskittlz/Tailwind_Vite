import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { Caption9Container, EmblaGridContainer, IMG3Container, IMGContainer, InnerContainer1, InnerContainer2, InnerContainer5, InnerIMG2Container, Margin3Container, MarginContainer } from "../Styles/Styles.js"
import Embla1 from "../assets/PoppingUpDifferently/Marketplace1.jpg"
import Embla2 from "../assets/PoppingUpDifferently/Marketplace2.jpg"
import Embla3 from "../assets/PoppingUpDifferently/Swarovski.jpg"
import Embla4 from "../assets/PoppingUpDifferently/Pandora.jpg"
import Embla5 from "../assets/PoppingUpDifferently/Pavilions1.png"
import Embla6 from "../assets/PoppingUpDifferently/Pavilions2.png"
import Embla7 from "../assets/PoppingUpDifferently/Pavilions6.png"


const timelessEleganceIframe = (
  <iframe
    src="https://giphy.com/embed/eYOrzs9VdJWfWzkU7x"
    width="480"
    height="270"
    className="giphy-embed"
    allowFullScreen
  ></iframe>
);



export const slides = [
  {
    Emblaimage1: Embla1,
    Emblaimage2: Embla2,
    heading: "ICON MARKETPLACE",
    caption1: "Icon Marketplace, Icon II & III",
    Embla1SubHeader: "REVOLUTION",
    Embla1Br: <br />,
    Embla1text: "Introducing Icon Marketplace, inspired by modern pop-ups found in our travels domestically and abroad. We've taken a chance on a new open concept shopping destination that will provide an elevated visual environment that draws its design from the architecture surrounding it. ",
    ButtonText: "REVOLUTION"
  },
  {
    Embla2image1: Embla3,
    Embla2image2: Embla4,
    heading: "PAVILIONS ON 5",
    caption2: "Pavilions on 5, Icon II & III",
    Embla2SubHeader: "REVOLUTION",
    Embla2Br: <br />,
    Embla2text: "The Pavilions are more than a shopping area, it's a visual display that will invoke a sense of surprise and delight. Nestled within Deck 5 is this curated destination, home to two of the industry's most recognizable fashion jewelry brands, Swarovski and Pandora.",
    Embla2text2: "Pavilions on 5 ensures that guests will not miss a chance to treat themselves or a loved one to a fabulous piece of fashion jewelry.",
    ButtonText: "REVOLUTION"
  },
  {
    Embla3image1: Embla5,
    Embla3image2: Embla6,
    heading: "PAVILIONS ON 6",
    caption3: "Starboard Side, Pavilions on 6, when open",
    Embla3SubHeader: "REVOLUTION",
    Embla3Br: <br />,
    Embla3text: "Pavilions on 6 will revolutionize the way our guests shop. We’re re-imagining the functionality of the starboard wall bays to transform during opening hours to feature our guest’s beloved pop-up experiences.  A rotational space for fashion handbags and jewelry, sunglasses and giftables.  When closed, digital glass fronts feature artwork.",
    Embla3text2: "Pavilions on 6 will create an inviting atmosphere for guests to enjoy both day and night.",
    ButtonText: "REVOLUTION"
  },
  {
    Embla4image: Embla7,
    heading: "PAVILIONS ON 6: CITIZEN AND BULOVA",
    Embla4SubHeader: "REVOLUTION",
    Embla4Br: <br />,
    Embla4text: "The Port side of Pavilions on 6 will feature the latest styles from perennial guest favorite, Citizen and their line of watches from Bulova.",
    Embla4text2: "Fun Fact:  Like Royal Caribbean, Citizen brands are committed to sustainability with a specific focus on keeping waste out of landfills.  Citizen pioneered the world’s first light-powered watch.  Eco-Drive watches are powered by any light source, eliminating the need to replace batteries and preventing millions of watch batteries from entering landfills.",
    Embla4text3: "Innovative and sustainable, a winning combination.",
  },
]


const EmblaCarousel = (props) => {
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
      <MarginContainer>
        <EmblaGridContainer>
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container2">
              {slides.map((slide, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                    <span>{index + 1}</span>
                  </div>
                  <IMG3Container>
                    <InnerContainer5>
                      <div className="md:mt-0 md:w-full md:p-5 xs:w-full xs:pr-10 xs:mt-10 ">
                        <h5 className="text-3xl text-white text-left font-semibold">
                          <ul className="list-disc ml-5 list-inside">
                            <li className="listItem">
                              {slide.Embla1SubHeader}
                              {slide.Embla2SubHeader}
                              {slide.Embla3SubHeader}
                              {slide.Embla4SubHeader}
                            </li>
                          </ul>
                        </h5>
                        <h1 className="mb-10 text-3xl ml-5 font-bold text-black mt-2">{slide.heading}</h1>
                        <h3 className="xs:text-1xl mb-5 text-black">

                          {/* Slide 1 */}
                          {slide.Embla1text && (
                            <div className='w-full mx-5 justify-between flex flex-col'>
                              <div className='w-full'>
                                <h3 className="xs:text-1xl mb-9 pr-5 text-black">
                                  {slide.Embla1text}
                                </h3>
                              </div>
                              <div className="flex justify-center gap-3">
                                <div className='absolute text-white mt-6'>
                                  <h2>
                                    <ul className="lg:mr-ninety_nine xs:mr-20 xs:mt-20 list-disc list-inside">
                                      <li className="text-caption">
                                        {slide.caption1}
                                      </li>
                                    </ul>
                                  </h2>
                                </div>
                                <div className='flex xs:justify-center lg:flex-row xs:mt-20 lg:mt-24 xs:flex-col'>
                                  <img src={slide.Emblaimage1} className="lg:h-tall xs:h-md xs:mb-10 lg:mr-10 object-cover rounded-img" key={`image-${index}-18`} />
                                  <img src={slide.Emblaimage2} className="lg:h-tall xs:h-md object-cover rounded-img" key={`image-${index}-19`} />
                                </div>
                              </div>
                              <div className="embla__buttons lg:bottom-0 xs:mt-96 lg:-mb-5 flex absolute">
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

                          {/* Slide 2 */}
                          {slide.Embla2text && (
                            <div className='w-full mx-5 justify-between flex flex-col'>
                              <div className='w-full'>
                                <h3 className="xs:text-1xl mb-5 text-black">
                                  {slide.Embla2text}
                                  {slide.Embla2Br}
                                  {slide.Embla2Br}
                                  {slide.Embla2text2}
                                </h3>
                              </div>
                              <div className="flex justify-center gap-3">
                                <div className='absolute text-white mt-6'>
                                  <h2>
                                    <ul className="lg:mr-one_ten xs:mr-20 xs:mt-20 list-disc list-inside">
                                      <li className="text-caption">
                                        {slide.caption2}
                                      </li>
                                    </ul>
                                  </h2>
                                </div>
                                <div className='flex xs:justify-center lg:flex-row xs:mt-20 xs:flex-col'>
                                  <img src={slide.Embla2image1} className="h-md xs:mb-10 lg:mr-10 object-cover rounded-img" key={`image-${index}-20`} />
                                  <img src={slide.Embla2image2} className="h-md object-cover rounded-img" key={`image-${index}-21`} />
                                </div>
                              </div>
                              <div className="embla__buttons bottom-0 xs:mb-eighty_eight lg:-mb-5 flex absolute">
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
                              <div className='w-full'>
                                <h3 className="xs:text-1xl mb-5 text-black">
                                  {slide.Embla3text}
                                  {slide.Embla3Br}
                                  {slide.Embla3Br}
                                  {slide.Embla3text2}
                                </h3>
                              </div>
                              <div className="flex justify-center gap-3">
                                <div className='absolute text-white mt-6'>
                                  <h2>
                                    <ul className="lg:mr-ninety_nine xs:-mr-4 xs:mt-20 list-disc list-inside">
                                      <li className="text-caption2">
                                        {slide.caption3}
                                      </li>
                                    </ul>
                                  </h2>
                                </div>
                                <div className='flex xs:justify-center lg:flex-row xs:mt-20 xs:flex-col'>
                                  <img src={slide.Embla3image1} className="h-md xs:mb-10 xs:mr-10 lg:mr-10 object-cover rounded-img" key={`image-${index}-22`} />
                                  <img src={slide.Embla3image2} className="h-md object-cover rounded-img" key={`image-${index}-23`} />
                                </div>
                              </div>
                              <div className="embla__buttons bottom-0 xs:mb-eighty_three lg:-mb-5 flex absolute">
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

                          {slide.Embla4text && (
                            <div className='w-full flex xs:flex-col justify-between'>
                              <div className='w-2/4 xs:w-full xs:mb-10 -mt-24'>
                                {slide.Embla4Br}
                                {slide.Embla4Br}
                                {slide.Embla4text}
                                {slide.Embla4Br}
                                {slide.Embla4Br}
                                {slide.Embla4text2}
                                {slide.Embla4Br}
                                {slide.Embla4Br}
                                {slide.Embla4text3}
                              </div>
                              <div className="flex justify-center gap-3">
                                <div >
                                  <img src={slide.Embla4image} className="mr-12 object-cover rounded-img" key={`image-${index}-30`} />
                                </div>
                              </div>
                              <div className="embla__buttons bottom-0 xs:mb-thirty lg:-mb-5 flex absolute">
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
                        </h3>
                      </div>
                    </InnerContainer5>


                  </IMG3Container>
                </div>
              ))}
            </div>
          </div>
        </EmblaGridContainer>
      </MarginContainer>
    </section >
  )
}

export default EmblaCarousel

