import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { EmblaGridContainer, IMGContainer, IMGContainer2, InnerCenterContainer, InnerContainer1, InnerContainer2, InnerContainer3, InnerContainer7, Margin4Container } from "../Styles/Styles.js"
import Embla1 from "../assets/BlingItOn/RoyalBling.png"
import Embla2 from "../assets/BlingItOn/DiamondsInternational.jpg"
import Embla3 from "../assets/BlingItOn/VY_Raffle.jpg"

export const slides = [
  {
    Embla1image: Embla1,
    heading: "ROYAL BLING",
    caption1: "Royal Bling Initial Concepts",
    SubHeader: "REVOLUTION",
    Embla1Br: <br />,
    Embla1text: "Everyone deserves to sparkle, even in the most over the top way. Indulge in the joy of Royal Bling, where the essence of fun, happiness, nostalgia, and self-expression radiate. Our object of inspiration is the Crown & Anchor in all forms. Royal Bling is a sparkling celebration of connections, and we know the love of standing out in a crowd knows no bounds.",
    Embla1text2: "Want a diamond encrusted statement piece worthy of a Mic Drop? Done! Matching gemstones for your Crew? Got it! Colorful freestyle mini-bling for your B-Boy or B-Girl? We specialize in E is for Everyone, that includes kids and furry friends! If nostalgia is your thing, we’ve got a line of Remix Bling that will add a touch of swagger to the proud history of the Crown & Anchor!",
    Embla1text3: "You gotta fight",
    Embla1text4: "For your right",
    Embla1text5: "To party!",
    ButtonText: "EVOLUTION",
  },
  {
    Embla2image: Embla2,
    heading: "A BREATHTAKING DIAMOND EXPERIENCE",
    caption2: "Safi Kilima Tanzanite",
    SubHeader: "EVOLUTION",
    Embla2Br: <br />,
    Embla2text: "We will exceed all guest and partnership expectations with an essentially fabulous fine jewelry collection.  A shop that over delivers in guest satisfaction and performance, both in selection and in presentation.",
    Embla2text2: "The foundation of our stunning and cutting-edge assortment is Diamonds International.  Our Partners at DI are the only Tax and Duty-free DeBeers site holder, guaranteeing our diamonds are ethically sourced, sanction free, and independently certified.",
    Embla2text3: "Every design, whether natural or lab grown sparkles with appeal. Guests can choose from classic, modern, unique or one-of-a-kind pieces that will evoke vacation memories.  A purchase that signifies where they have been and where they are going.",
    Embla2text4: "Through strong traffic driving activations, complemented by global brands  Gucci, Steven Lagos (first at sea), and Monica Rich Kosan, the Regalia FJ shop will offer a strong Diamond retailer AND recognizable Global Brands inclusive for all.",
    ButtonText: "TRIED & TRUE"
  },
  {
    Embla3image: Embla3,
    heading: "WHEN IN ROME… VALUE, VALUE, VALUE",
    caption3: "Raffle aboard Voyager of the Seas",
    SubHeader: "TRIED & TRUE",
    Embla3Br: <br />,
    Embla3text: "Let's face it. Good things come in small packages.",
    Embla3text2: "In fine jewelry, we’ve built our reputation by offering a wide range of options that cater to every budget and taste.  Sparkling cases of beautiful gemstones coupled with activations and everyone’s favorite pastime, raffles, has translated into a lively hub of excitement.  Who needs a lottery ticket when you could be the winner of a pair of diamond stud earrings?",
    Embla3text3: "With our good, better, best pricing strategy, we’ve made certain there is something for everyone, without compromising on quality or style.",
    Embla3text4: "Whether guests are looking for a stunning statement piece, a best buy diamond classic, or holding onto their lucky number hoping for a win, our carefully curated collections deliver solid results."
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
                    <InnerContainer7>
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
                          {slide.Embla2Br}
                          {slide.Embla2Br}
                          {slide.Embla2text2}
                          {slide.Embla2Br}
                          {slide.Embla2Br}
                          {slide.Embla2text3}
                          {slide.Embla2Br}
                          {slide.Embla2Br}
                          {slide.Embla2text4}

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
                    </InnerContainer7>
                    <InnerContainer2>

                      {/* Captions */}
                      {slide.caption1 && (
                        <h2><ul className="ml-5 list-disc list-inside text-white"><li>{slide.caption1}</li></ul></h2>
                      )}
                      {slide.caption2 && (
                        <h2><ul className="ml-5 list-disc list-inside text-white"><li>{slide.caption2}</li></ul></h2>
                      )}
                      {slide.caption3 && (
                        <h2><ul className="ml-5 list-disc list-inside text-SB_Blue"><li>{slide.caption3}</li></ul></h2>
                      )}

                      {/* Images */}
                      {slide.Embla1image ? (
                        <div className='mr-44'>
                          <img
                            className="embla__slide__img bg-black"
                            src={slide.Embla1image}
                            alt={`IMG${index + 1}`}
                          />
                        </div>
                      ) : null}
                      {slide.Embla2image ? (
                        <div className='mr-72'>
                          <img
                            className="embla__slide__img"
                            src={slide.Embla2image}
                            alt={`IMG${index + 2}`}
                          />
                        </div>
                      ) : null}
                      {slide.Embla3image ? (
                        <img
                          className="embla__slide__img"
                          src={slide.Embla3image}
                          alt={`IMG${index + 3}`}
                        />
                      ) : null}
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





