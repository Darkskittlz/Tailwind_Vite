import React from 'react'
import EmblaCarousel10 from '../carousel/EmblaCarousel10'
import '../Styles/base.css'
import '../Styles/embla.css'
import { Margin2Container } from '../Styles/Styles'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Hero36 = () => {
  return (
    <main className="sandbox">
      <section className="sandbox__carousel">
        <Margin2Container>
          <EmblaCarousel10 slides={SLIDES} options={OPTIONS} />
        </Margin2Container>
      </section>
    </main>
  )
}

export default Hero36

