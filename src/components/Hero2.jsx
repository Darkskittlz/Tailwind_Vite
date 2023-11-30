import React from 'react'
import styled from 'styled-components'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import "../Styles/App.css"

const FlexContainer = styled.div`
  display: flex;
  margin-top: 45px;

  @media screen and (max-width: 960px) {
    h2 {
      padding-right: 0px;
    }

    h3 {
      padding-right: 0px;
    }
  }


  @media screen and (max-width: 1536px) {
    flex-direction: column-reverse;
    display: flex;
    margin: 20px;
    justify-content: flex-start;

   
    @media screen and (min-width: 2036px) {
      img {
        width: 200px;
      }
    }
  }
`

const Hero2 = () => {
  return (
    <section>
      <FlexContainer>
        <div className="w-5/6 reveal HeroTextContainer Hero2">
          <h1 className="text-6xl mb-5 text-black mt-2">THE ICON OF VACATIONS</h1>
          <h2 className="text-4xl mb-5 text-black">This is more than a vacation upgrade. It’s the best family vacation in the world. Introducing the new <span className="italic">Icon of the Seas<span className="sup">SM</span></span> — a first-of-its-kind Royal Caribbean® adventure where your clients will have the time of their life, multiple times a day.</h2>
          <h3 className="text-2xl text-black">It’s thrills they never dared to imagine and next-level chill nobody ever dreamed possible. Your clients’ adrenaline will surge at the largest waterpark at sea, or as they conquer an all-out test of courage dangling high above the ocean. Pick from seven unique pools to satisfy any mood — this is an all-you-can-swim buffet. Fuel bolder bonding with tons to do for everyone in the crew at SurfsideSM, the ultimate stay-all-day family neighborhood right onboard. And discover dishes to delight every appetite with 40 ways to dine and drink. This is the Icon of VacationsSM — arriving January 2024.</h3>
          <button
            className="rounded-full HeroButton w-56 px-3  bg-white mt-4 text-2xl font-semibold text-black">
            Book Now
            <ArrowOutwardIcon style={{ color: "#3663ae", marginLeft: "10px", marginTop: "-5px", fontWeight: "600" }} />
          </button>
        </div>
        <div className="reveal w-full flex justify-center align-top Hero2">
          <img className="rounded-3xl sm:h-full md:h-5/6 lg:h-5/6 xl:h-5/6" src="https://images.ctfassets.net/1euybtmvarct/6SXd9vKjvFEKHhLRzSl4bR/cb6b2d5dd3bb5ecbe0b1f02128c10ed4/ship.jpg?w=1720&h=1983&q=50&fm=webp" alt="cruiseimg" />
        </div>
      </FlexContainer>
    </section>
  )
}

export default Hero2
