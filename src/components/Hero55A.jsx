import React from 'react'
import EmblaCarousel from '../carousel/EmblaCarousel'
import '../Styles/base.css'
import '../Styles/embla.css'
import EmblaCarousel11 from '../carousel/EmblaCarousel11'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Hero55A = () => (
  <main className="reveal sandbox">
    <section className="sandbox__carousel">
      <EmblaCarousel11 slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
)

export default Hero55A;

