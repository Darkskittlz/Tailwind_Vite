import React from 'react'
import EmblaCarousel8 from '../carousel/EmblaCarousel8'
import '../Styles/base.css'
import '../Styles/embla.css'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Hero24 = () => {
  return (
    <main className="sandbox">
      <section className="sandbox__carousel">
        <div>
          <EmblaCarousel8 slides={SLIDES} options={OPTIONS} />
        </div>
      </section>
    </main>
  )
}

export default Hero24
