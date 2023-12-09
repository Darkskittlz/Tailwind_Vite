import React from 'react'
import EmblaCarousel6 from '../carousel/EmblaCarousel6'
import '../Styles/base.css'
import '../Styles/embla.css'
import { Margin2Container } from '../Styles/Styles'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Hero20 = () => {
  return (
    <main className="sandbox">
      <section className="sandbox__carousel">
        <Margin2Container>
          <EmblaCarousel6 slides={SLIDES} options={OPTIONS} />
        </Margin2Container>
      </section>
    </main>
  )
}

export default Hero20
