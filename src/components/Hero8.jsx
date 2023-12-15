import React from 'react'
import { Margin2Container } from '../Styles/Styles'

const Hero8 = () => {
  return (
    <section>
      <Margin2Container>
        <div className="lg:flex-row md:flex-col xs:mx-10 xs:flex-col justify-between flex">
          <div className="reveal w-full flex justify-center align-top">
            <img className="rounded-3xl xl:h-5/6 lg:h-full md:h-full sm:h-full" src="https://images.ctfassets.net/1euybtmvarct/2YruxOg7chCQ1dD5CUxtw3/f7892d7c745a43a9786abad901c57c11/RCI_IC_Pool_Aerial_CGI06_RET__1_.jpg?w=2000&h=2305&q=50&fm=webp" alt="cruiseimg" />
          </div>
          <div className="w-5/6 xl:pl-12 xl:mt-24 xl:pr-72 lg:pl-0 md:w-full md:m-10 md:pr-6 md:pl-0 md:pb-32 md:mt-0 xs:mt-10 reveal">
            <h2 className="mb-10 xl:text-5xl lg:text-4xl md:text-4xl md:font-bold md:mt-20 xs:text-4xl xs:mb-6 font-bold text-black">From upbeat party scenes to family-friendly hangs and restful retreats — the new <span className="italic">Icon of the Seas</span> has a pool for every mood.</h2>
            <h3 className="text-2xl xl:text-4xl lg:text-2xl md:text-4xl text-black">Live music keeps the vibe going with Caribbean jam bands and resident DJs. Nine pool bars serve up all your favorite tropical drinks across multiple levels. And with seven pools, nine whirlpools and sweeping ocean views all around — you’ll always feel connected to the sea. Plus, every sailing stops at Perfect Day at CocoCay for a sun-drenched escape.</h3>
          </div>
        </div>
      </Margin2Container>
    </section>
  )
}

export default Hero8
