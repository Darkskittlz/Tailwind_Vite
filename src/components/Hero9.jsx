import React from 'react'
import EmblaCarousel2 from '../carousel/EmblaCarousel2'
import '../Styles/base.css'
import '../Styles/embla.css'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Hero9 = () => (
  <main className="sandbox">
    <section className="sandbox__carousel">
      <div className='lg:mt-40'>
        <EmblaCarousel2 slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  </main>
)

export default Hero9;

