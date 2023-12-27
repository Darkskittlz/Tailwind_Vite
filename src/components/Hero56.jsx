
import React from 'react'
import EmblaCarousel from '../carousel/EmblaCarousel'
import '../Styles/base.css'
import '../Styles/embla.css'
import EmblaCarousel12 from '../carousel/EmblaCarousel12'
import EmblaCarousel18 from '../carousel/EmblaCarousel12'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Hero56 = () => (
  <main className="sandbox">
    <section className="sandbox__carousel">
      <EmblaCarousel18 slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
)

export default Hero56;

