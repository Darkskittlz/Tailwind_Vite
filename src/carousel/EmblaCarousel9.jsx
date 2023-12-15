import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../Styles/App.css"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { EmblaGridContainer, IMGContainer, InnerContainer1, InnerContainer2 } from "../Styles/Styles.js"
import Embla1 from "../assets/embla8-1.jpg"
import Embla2 from "../assets/embla8-2.jpg"
import Embla3 from "../assets/embla8-3.jpg"
import Embla4 from "../assets/embla8-4.jpg"
import Embla5 from "../assets/embla8-5.jpg"

export const slides = [
  {
    image: Embla1,
    heading: "RATED E FOR EVERYONE",
    caption: "AQUADOME",
    Embla1Super: "SM",
    Embla1Copywright: "®",
    Embla1IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla1text2: " sets the stage for performances so over-the-top, every ooh and ahh that came before feels like rehearsal. Follow the yellow brick road to a magical musical. Catch a supercharged ice-skating spectacular that takes science for a spin. Enter a world where high divers plunge in sync with a shimmering, shape-shifting waterfall. And turn up the wow factor with live music every night. With a playbill full of unexpected possibilities, there are shows for every member of your cast to enjoy.",
  },
  {
    image: Embla2,
    heading: "YOUR CLIENTS ARE NOT IN KANSAS ANYMORE",
    caption: "THE WIZARD OF OZ",
    Embla2Super: "SM",
    Embla2Copywright: "®",
    Embla2IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla2OZ: "𝘛𝘩𝘦 𝘞𝘪𝘻𝘢𝘳𝘥 𝘰𝘧 𝘖𝘻",
    Embla2text: "Follow the yellow brick road to our biggest cast and orchestra ever in the Broadway hit musical, ",
    Embla2text2: ". Sing along as Dorothy leads the Scarecrow, the Tin Man, the Cowardly Lion and Toto somewhere over the rainbow on the most famous journey of all time. Just click your heels together three times, and you’ll be transported to the Emerald City with our most advanced production ever — only on the new ",
    Embla2text3: "."
  },
  {
    image: Embla3,
    heading: "LIGHTS...CAMERA...AQUA ACTION!",
    caption: "AQUA ACTION!",
    Embla3Super: "SM",
    Embla3Copywright: "®",
    Embla3IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla3text: "Futuristic technology and extreme athletic skills come together to blur the line between live action movie and live theater. Welcome to Aqua Action! — only onboard the new ",
    Embla3text2: ". Take your seats as our biggest cast of daredevils performs superhuman stunts and feats of cinematic proportions beneath a towering, shapeshifting waterfall. It all comes to life before your eyes, and the stakes are higher than ever before.",
  },
  {
    image: Embla4,
    heading: "ATOMIC AXELS & SUPER SPINS",
    caption: "STARBURST: ELEMENTAL BEAUTY",
    Embla4Super: "SM",
    Embla4Copywright: "®",
    Embla4IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla4text: "Starburst: Elemental Beauty fuses celestial science and supernova-sized spins with awe-inspiring artistry at the biggest ice skating arena at sea, Absolute Zero",
    Embla4text2: ". Everything from carbon to life-sustaining oxygen is born from the epic explosion of a bright, shining star. If you find yourself periodically pondering the great mysteries of the universe, this is the show for you — only onboard the new ",
    Embla4text3: ".",
  },
  {
    image: Embla5,
    heading: "BIG SHOWS FOR LITTLE ONES",
    caption: "YOUTH SHOWS",
    Embla5Super: "SM",
    Embla5Copywright: "®",
    Embla5IOTS: "𝘐𝘤𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘚𝘦𝘢𝘴",
    Embla5text: "The all-new ",
    Embla5text2: " will transport you worlds away with more memory maxing matinees than ever before. For the first time, we’ve dreamed up shows just for kids that will have the whole family singing along. Like an AquaTheater spectacle starring high-flying pirates and deep-diving mermaids. Our biggest parade ever through the Royal Promenade. And an ice-skating spectacular that puts a fresh spin on fairytale classics.",
  },
]

const EmblaCarousel9 = (props) => {
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
                    <div className="md:mt-0 xs:w-full xs:pr-10 xs:mt-10">
                      <h5 className="text-3xl text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">ICONIC ENTERTAINMENT</li></ul></h5>
                      <h1 className="mb-16 text-black w-2/3 text-6xl font-semibold">{slide.heading}</h1>

                      {/* Slide 1 */}
                      <h3 className="text-3xl xs:text-3xl xs:leading-0 leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla1IOTS}
                        <span className='sup'>{slide.Embla1Super}</span>
                        {slide.Embla1text2}
                      </h3>

                      {/* Slide 2 */}
                      <h3 className="mb-5 text-black text-3xl xs:text-3xl xs:leading-0 leading-10 mt-2">
                        {slide.Embla2text}
                        {slide.Embla2OZ}
                        {slide.Embla2text2}
                        {slide.Embla2IOTS}
                        <span className='sup'>{slide.Embla2Super}</span>
                        {slide.Embla2text3}
                      </h3>

                      {/* Slide 3 */}
                      <h3 className="text-3xl xs:text-3xl xs:leading-0 leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla3text}
                        {slide.Embla3IOTS}
                        <span className='sup'>{slide.Embla3Super}</span>
                        {slide.Embla3text2}
                      </h3>

                      {/* Slide 4 */}
                      <h3 className="text-3xl xs:text-3xl xs:leading-0 leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla4text}
                        <span className='sup'>{slide.Embla4Super}</span>
                        {slide.Embla4text2}
                        {slide.Embla4IOTS}
                        <span className='sup'>{slide.Embla4Super}</span>
                        {slide.Embla4text3}
                      </h3>


                      {/* Slide 5 */}
                      <h3 className="text-3xl xs:text-3xl xs:leading-0 leading-10 lg:w-full md:w-full text-black">
                        {slide.Embla5text}
                        {slide.Embla5IOTS}
                        <span className='sup'>{slide.Embla5Super}</span>
                        {slide.Embla5text2}
                      </h3>


                    </div>
                  </InnerContainer1>
                  <InnerContainer2>
                    <h2><ul className="md:ml-5 xs:ml-0 list-disc list-inside text-white"><li>{slide.caption}</li></ul></h2>
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

export default EmblaCarousel9








