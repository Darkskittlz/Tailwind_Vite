import React from 'react'
import "../Styles/App.css"
import { Margin2Container } from '../Styles/Styles'


{/* Head 12.5rem */ }
// subhead: 4.9rem
// 3.5rem h3
const Hero2 = () => {
  return (
    <section>
      <Margin2Container>
        <div className="lg:flex-row xs:flex-col-reverse md:flex-col-reverse justify-between flex">
          <div className="w-5/6 xl:pl-32 lg:pl-0 ml-32 md:pl-0 pr-32 xs:pr-0 xs:ml-10 md:pb-32 reveal">
            <h1 className="
              xl:text-7xl
              lg:text-6xl
              sm:text-8xl
              xs:text-6xl
              text-black
              font-semibold
              pr-10
              lg:mt-0
              md:mt-10
              xs:mt-10
              xs:mb-10
              HeroFontTest"
            >WHY STARBOARD?</h1>
            <h2 className="mb-10 xl:text-5xl lg:text-4xl xs:text-4xl font-semibold text-black">Like you, we’re the leaders in our industry.</h2>
            <h3 className="xl:text-5xl md:text-3xl leading-5 lg:mb-5 xs:mb-5 text-black">No other cruise retailer consistently delivers the best brands, custom & exclusive product, top sales staff, innovative shopping experiences, and global know-how – all with a dedicated account team 100% focused on Royal.

              Read on to get the details on our vision for these game-changing ships.</h3>
            {/* <button */}
            {/*   className="rounded-full p-5 ml-2 w-56 px-3 bg-white mt-4 text-2xl font-semibold text-black"> */}
            {/*   Book Now */}
            {/*   <ArrowOutwardIcon style={{ color: "#3663ae", marginLeft: "10px", marginTop: "-5px", fontWeight: "600" }} /> */}
            {/* </button> */}
          </div>
          <div className="reveal w-full flex justify-center">
            <img className="rounded-3xl sm:h-full md:h-5/6 lg:h-5/6 xl:h-5/6" src="https://images.ctfassets.net/1euybtmvarct/6SXd9vKjvFEKHhLRzSl4bR/cb6b2d5dd3bb5ecbe0b1f02128c10ed4/ship.jpg?w=1720&h=1983&q=50&fm=webp" alt="cruiseimg" />
          </div>
        </div>
      </Margin2Container>
    </section>
  )
}

export default Hero2
