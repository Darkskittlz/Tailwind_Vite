import React from 'react'
import Hero5IMG from "../assets/hero5IMG.jpg"

const Hero5 = () => {
  return (
    <section>
      <div className="lg:flex-row xs:flex-col md:flex-col m-10 items-center flex">
        <div className="reveal w-full flex justify-center align-top">
          <img
            className="rounded-3xl sm:h-full md:h-5/6 lg:h-5/6 xl:h-5/6"
            src={Hero5IMG}
            alt="cruiseimg" />
        </div>
        <div className="w-5/6 xl:pl-32 lg:pl-0 lg:ml-32 md:ml-0 xs:ml-0 md:pl-0 md:mt-10 xs:w-full xs:mt-5 pr-32 reveal">
          <h2 className="mb-10 xl:text-5xl lg:text-5xl xs:text-4xl font-semibold text-black">Take the best-ever vacation and crank it up — way up. This is a whole new class of adventure. The kind that fills every moment with new thrills and changes the way your clients play for good.</h2>
          <h3 className="text-2xl xl:text-3xl lg:text-3xl xs:text-3xl text-black">Like braving six record-breaking slides at Category 6, the largest waterpark at sea. Or finding the courage to conquer the Crown’s EdgeSM, a test of bravery like nothing they’ve ever dared, dangling high above the ocean. And discovering adventure for the ages — all the ages — at SurfsideSM, a stay-all-day neighborhood that opens the floodgates on family fun. A sprawling aquapark and pool give kids more ways to splash and play, with plenty of bites nearby to fuel up for bolder bonding. This is more than a vacation. It’s the best family vacation in the world — the new Icon of the Seas.</h3>
        </div>
      </div>
    </section>
  )
}

export default Hero5
