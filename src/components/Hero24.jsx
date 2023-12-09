import React from 'react'
import EmblaCarousel8 from '../carousel/EmblaCarousel8'
import { Margin2Container } from '../Styles/Styles'
import '../Styles/base.css'
import '../Styles/embla.css'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Hero24 = () => {
  return (
    <main className="sandbox">
      <section className="sandbox__carousel">
        <Margin2Container>
          <EmblaCarousel8 slides={SLIDES} options={OPTIONS} />
        </Margin2Container>
      </section>
    </main>
  )
}

export default Hero24
