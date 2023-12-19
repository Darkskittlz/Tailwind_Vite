import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { EmblaGridContainer, IMGContainer, InnerCenterContainer, InnerContainer1, InnerContainer2, Margin4Container } from "../Styles/Styles.js"
import Embla1 from "../assets/embla4-1.jpg"
import Embla2 from "../assets/embla4-2.jpg"
import Embla3 from "../assets/embla4-3.jpg"

export const slides = [
  {
    // image: Embla1,
    heading: "ROYAL BLING",
    caption: "Royal Bling Caption",
    SubHeader: "REVOLUTION",
    Embla1Super: "SM",
    Embla1text: "We believe everyone deserves to shine.  Experience the joy of Royal Bling, where the essence of fun, happiness, nostalgia, and self-expression radiate.  Our object of inspiration is the Crown & Anchor in all forms. Royal Bling is a sparkling celebration of connections, and we know the love of shimmering glitz knows no bounds.",
    Embla1text2: "Want a diamond encrusted statement piece worthy of a Mic Drop? Done! Matching gemstones for your Crew? Got it! Colorful freestyle mini-bling for your B-Boy or B-Girl? We specialize in E is for Everyone, that includes kids and furry friends! If nostalgia is your thing, we’ve got a line of Remix Bling that gives mad props to the proud history of the Crown & Anchor!",
    Embla1text3: "You gotta fight",
    Embla1text4: "For your right",
    Embla1text5: "To party!",
    ButtonText: "EVOLUTION",
    Embla1Br: <br />
  },
  {
    // image: Embla2,
    heading: "SUBHEAD",
    caption: "Time Valet",
    SubHeader: "EVOLUTION",
    Embla2Super: "SM",
    Embla2Copywright: "®",
    Embla2text: "Copy: Time valet concept, name jewelry brands in store",
    Embla2text2: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    ButtonText: "TRIED & TRUE"
  },
  {
    // image: Embla3,
    heading: "DIAMONDS BEYOND BORDERS",
    caption: "DI?",
    SubHeader: "TRIED & TRUE",
    Embla3Br: <br />,
    Embla3text: "At Starboard, our jewelry strategy gleams with brilliance, and at its heart is the renowned brand Diamonds International. This globally recognized name forms the cornerstone of our jewelry offering.  DI is a long standiing DeBeers siteholder , trusted and respected in the diamond industry and among consumers.  Most importantly they are a successful retail business that delivers on both globally recognized brand names and private label jewelry capturing the latest in diamond jewelry trends.",
    Embla3text2: "Our recipe of proven success is combining the RC onboard Retail expertise of Starboard with DI's unique results driven formula inspiring guests to commemorate their vacation memories with the sale of a special piece of fine jewelry or important diamond, beyond their wildest dreams.",
    Embla3text3: "Through strong traffic driving activations and complemented by Global Brands Messika, Gucci, Steven Lagos and Shy Creations, we offer the best of both jewelry retail worlds.... a strong Diamond retailer AND Brands that offer a wide variety of designs and pricepoints.",
    Embla3text4: "Our dedication to ethical sourcing is crystal clear – we adhere to conflict-free and sanction-free standards for diamonds, ensuring that each radiant gem tells a story not just of elegance but of integrity."
  }
]

const EmblaCarousel5 = (props) => {
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
                      <div className="md:mt-0 xs:w-full xs:pr-10 xs:mt-20">
                        <h5 className="text-3xl text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">{slide.SubHeader}</li></ul></h5>
                        <h1 className="mb-0 text-5xl font-semibold text-black mt-0">{slide.heading}</h1>
                        <h2 className="xs:text-3xl lg:w-full md:w-full text-black">

                          {slide.Embla1text}
                          {slide.Embla1Br}
                          {slide.Embla1Br}
                          {slide.Embla1text2}
                          {slide.Embla1Br}
                          {slide.Embla1Br}
                          {slide.Embla1text3}
                          {slide.Embla1Br}
                          {slide.Embla1text4}
                          {slide.Embla1Br}
                          {slide.Embla1text5}

                          {slide.Embla2text}

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

                        </h2>
                      </div>
                    </InnerContainer1>
                    <InnerContainer2>
                      <h2><ul className="ml-5 list-disc list-inside text-white"><li>{slide.caption}</li></ul></h2>
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
      </Margin4Container>
    </section >
  )
}

export default EmblaCarousel5





