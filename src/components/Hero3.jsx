import React from 'react'
import styled from 'styled-components'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const FlexContainer = styled.div`
  /* display: grid; */
  /* grid-template-rows: 25% 0.1rem 50% 0.1rem 25%; */
  display: flex;
  flex: flex-wrap;
  flex-direction: column;
  grid-gap: 0.1rem;
  background: linear-gradient(90deg, rgb(255, 13, 178) 0%, rgb(255, 165, 0) 100%);
  transform: translateZ(0px);
  align-content: center;
  border-radius: 20px;
  margin: 5vh;


  hr {
    height: 0.1rem;
    width: 100%;
    background: white;
    z-index: 10;
  }

  @media screen and (max-width: 750px) {
    height: 100%;
    margin: 0;
    margin-right: 30px;
    margin-left: 30px;
    grid-template-rows: 15% 0.1rem 65% 0.1rem 15%;
  }
  
`

const Hero3 = () => {
  return (
    <section>
      <FlexContainer>
        <div className="reveal flex items-center flex-col justify-center p-10">
          <h1 className="text-5xl tracking-tight font-sans text-center font-semibold">ICON OF THE SEAS MARKETING TOOLS</h1>
          <h2 className="text-2xl mt-6 text-center font-normal">Everything you need to market <span className="italic">Icon of the Seas</span></h2>
        </div>
        <hr />
        <div className="reveal InnerContainer flex items-center flex-col p-10 justify-center">
          <div className="items-center justify-center text-center">
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Trade Flyer
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Consumer Flyer
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Customizable Consumer Email
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Web Banners
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Accomadations Brochure
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Infinite Accomadations
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Categorization Grid
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              2024-2025 Deployment
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              2025-2026 Deployment
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Ship Infographic
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Thrills Infographic
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Chills Infographic
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Ship Cutaway
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              FAQs
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Consumer Flyer
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Customizable Car Magnet
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Countdown Social Media Banners
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Which Cruiser Are You?
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-center flex-col justify-center p-10">
          <h1 className="text-2xl text-center">Start planning your clients' vacation with a personalized website</h1>
          <div className="items-center pt-5 justify-center text-center">
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Create Now
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              How To
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-3 bg-white m-2 text-black">
              Customizable Email
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
          </div>
        </div>
      </FlexContainer>
    </section>
  )
}

export default Hero3
