
import React from 'react'
import EmblaCarousel from '../carousel/EmblaCarousel'
import '../Styles/base.css'
import '../Styles/embla.css'
import EmblaCarousel19 from '../carousel/EmblaCarousel19'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Hero58B = () => (
  <main className="reveal sandbox">
    <section className="sandbox__carousel">
      <EmblaCarousel19 slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
)

export default Hero58B;

