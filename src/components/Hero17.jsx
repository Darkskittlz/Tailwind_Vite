import React from 'react'
import EmblaCarousel5 from '../carousel/EmblaCarousel5'
import '../Styles/base.css'
import '../Styles/embla.css'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Hero17 = () => (
  <main className="sandbox">
    <section className="sandbox__carousel">
      <div>
        <EmblaCarousel5 slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  </main>
)

export default Hero17;


