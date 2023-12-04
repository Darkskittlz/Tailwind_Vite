import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import "../Styles/App.css"


const Hero2 = () => {
  return (
    <section>
      <div className="lg:flex-row xs:flex-col-reverse md:flex-col-reverse md:mt-60 lg:mt-30 xl:mt-30 justify-between flex">
        <div className="w-5/6 xl:pl-32 lg:pl-0 ml-32 md:pl-0 pr-32 md:pb-32 reveal">
          <h1 className="
            xl:text-8xl
            lg:text-6xl
            sm:text-8xl
            xs:text-6xl
            text-black
            font-semibold
            pr-10
            lg:mt-0
            md:mt-10
            xs:mt-10
            xs:mb-10"
          >THE ICON OF VACATIONS</h1>
          <h2 className="mb-10 xl:text-5xl lg:text-4xl xs:text-4xl font-semibold text-black">This is more than a vacation upgrade. It’s the best family vacation in the world. Introducing the new <span className="italic">Icon of the Seas<span className="sup">SM</span></span> — a first-of-its-kind Royal Caribbean® adventure where your clients will have the time of their life, multiple times a day.</h2>
          <h3 className="text-2xl xl:text-3xl lg:text-2xl lg:mb-5 xs:mb-5 text-black">It’s thrills they never dared to imagine and next-level chill nobody ever dreamed possible. Your clients’ adrenaline will surge at the largest waterpark at sea, or as they conquer an all-out test of courage dangling high above the ocean. Pick from seven unique pools to satisfy any mood — this is an all-you-can-swim buffet. Fuel bolder bonding with tons to do for everyone in the crew at SurfsideSM, the ultimate stay-all-day family neighborhood right onboard. And discover dishes to delight every appetite with 40 ways to dine and drink. This is the Icon of VacationsSM — arriving January 2024.</h3>
          <button
            className="rounded-full p-5 ml-2 w-56 px-3  bg-white mt-4 text-2xl font-semibold text-black">
            Book Now
            <ArrowOutwardIcon style={{ color: "#3663ae", marginLeft: "10px", marginTop: "-5px", fontWeight: "600" }} />
          </button>
        </div>
        <div className="reveal w-full flex justify-center">
          <img className="rounded-3xl sm:h-full md:h-5/6 lg:h-5/6 xl:h-5/6" src="https://images.ctfassets.net/1euybtmvarct/6SXd9vKjvFEKHhLRzSl4bR/cb6b2d5dd3bb5ecbe0b1f02128c10ed4/ship.jpg?w=1720&h=1983&q=50&fm=webp" alt="cruiseimg" />
        </div>
      </div>
    </section>
  )
}

export default Hero2
