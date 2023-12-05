import React from 'react'
import EmblaCarousel3 from '../carousel/EmblaCarousel3'
import '../Styles/base.css'
import '../Styles/embla.css'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Hero6 = () => (
  <main className="sandbox">
    <section className="sandbox__carousel">
      <EmblaCarousel3 slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
)

export default Hero6;


