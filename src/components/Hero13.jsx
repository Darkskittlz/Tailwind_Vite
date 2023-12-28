import React from 'react'
import LeatherIMG from "../assets/Leather.jpg"
import { Margin2Container } from '../Styles/Styles'

const Hero13 = () => {
  return (
    <section>
      <Margin2Container>
        <div className="xl:h-full lg:flex-row md:flex-col xs:mt-32 xs:mx-10 xs:flex-col justify-between flex">
          <div className="reveal w-full flex justify-center align-top">
            <img className="rounded-3xl object-cover" src={LeatherIMG} alt="cruiseimg" />
          </div>
          <div className="xl:w-full xl:pl-12 xl:m-36 lg:pl-0 md:w-full md:m-10 md:pr-6 md:pl-0 md:pb-32 md:mt-0 xs:mt-10 reveal">
            <h2 className="mb-10 xl:text-6xl lg:text-4xl md:text-4xl leading-10 md:font-semibold md:mt-20 xs:text-4xl text-black">Improving Our ‘Good, Better, Best’ Strategy</h2>
            <h3 className="xl:text-4xl lg:text-3xl xs:text-3xl text-black">As seasoned retailers with a keen understanding of market dynamics, Starboard is resolute in refining the time-tested 'good, better, best' strategy. This strategic evolution ensures our customers not only enjoy a diverse array of choices but a meticulously curated spectrum of quality and value across all our offerings.</h3>
          </div>
        </div>
      </Margin2Container>
    </section>
  )
}

export default Hero13
