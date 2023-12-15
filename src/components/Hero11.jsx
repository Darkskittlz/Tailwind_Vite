import React from 'react'
import { MarginContainer } from '../Styles/Styles'

const Hero11 = () => {
  return (
    <section>
      <MarginContainer>
        <div className="xl:h-full lg:flex-row md:flex-col xs:mt-32 xs:mx-10 xs:flex-col justify-between flex">
          <div className="reveal w-full flex justify-center align-top">
            <h2><ul className="ml-4 absolute mt-5 font-semibold list-disc text-white list-inside"><li>Absolute Zero<span className="sup">SM</span></li></ul></h2>
            <img className="rounded-3xl object-cover xl:h-full xl:w-full lg:h-full md:h-full sm:h-full" src="https://images.ctfassets.net/1euybtmvarct/yWATVINSawiIKVdQmXkve/55c095c46ff97c44ecc21678ec9031f8/RCI_IC_Absolute_Zero_CGI26_RET__1_.jpg?w=3200&h=3689&q=50&fm=webp" alt="cruiseimg" />
          </div>
          <div className="xl:w-full xl:pl-12 xl:m-36 lg:pl-0 md:w-full md:m-10 md:pr-6 md:pl-0 md:pb-32 md:mt-0 xs:mt-10 reveal">
            <h2 className="mb-10 xl:text-5xl lg:text-4xl md:text-4xl leading-10 md:font-semibold md:mt-20 xs:text-4xl text-black">Technology and artistry merge on the new <span className="italic">Icon of the Seas<span className="sup">SM</span></span>, and awe is inspired on a grand new scale. has a pool for every mood.</h2>
            <h3 className="text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-black">Starting with the shimmering AquaDome<span className='sup'>SM</span>. Perched at the crown of the ship, this first-of-its-kind space opens up a world of new possibilities. From performances that push the bounds of bravery beneath a mesmerizing, morphing, towering waterfall to gourmet grazing and mixology magic against a background of wraparound ocean views. And see bold feats unleashed at Absolute ZeroSM, our biggest ice arena ever, where high-resolution digital projection from ceiling to rink instantly transforms everything around you from one moment to the next.</h3>
          </div>
        </div>
      </MarginContainer>
    </section>
  )
}

export default Hero11
