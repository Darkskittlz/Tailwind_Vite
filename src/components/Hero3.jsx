import React from 'react'
import styled from 'styled-components'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const FlexContainer = styled.div`
  display: flex;
  flex: flex-wrap;
  flex-direction: column;
  grid-gap: 0.1rem;
  background: linear-gradient(90deg, rgb(255, 13, 178) 0%, rgb(255, 165, 0) 100%);
  transform: translateZ(0px);
  align-content: center;
  border-radius: 20px;
  margin: 5vh;
  padding-top: 110px;
  padding-bottom: 120px;


  h1 {
    font-family: "Bebas Neue", sans-serif;
  }


  hr {
    height: 0.1rem;
    width: 100%;
    background-color: #808080;
    z-index: 10;
  }

  button {
    padding: 8px 10px 8px 10px;
    font-weight: 500;

    @media screen and (max-width: 960px) {
      /* padding: 8px 20px 8px 20px; */
      /* padding: 0px; */
      overflow: hidden;
      width: 250px;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 750px) {
    height: 100%;
    margin: 0;
    margin-bottom: 120px;
    margin-top: 120px;
    margin-right: 30px;
    margin-left: 30px;
    /* grid-template-rows: 15% 0.1rem 65% 0.1rem 15%; */
  }
  
`

const Hero3 = () => {
  return (
    <section>
      <FlexContainer>
        <div className="reveal flex items-center flex-col justify-center UpperContainer">
          <h1 className="text-6xl font-sans text-center px-40 font-light">ICON OF THE SEAS MARKETING TOOLS</h1>
          <h2 className="text-2xl mt-6 text-center px-34 font-semibold">Everything you need to market <span className="italic">Icon of the Seas</span></h2>
        </div>
        <hr />
        <div className="reveal InnerContainer flex items-center flex-col  justify-center">
          <div className="items-center justify-center text-center">
            <button
              className="rounded-full text-2xl bg-white m-2 text-black">
              Trade Flyer
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full m-2 text-2xl bg-white text-black">
              Consumer Flyer
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white m-2 text-2xl text-black">
              Customizable Consumer Email
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              Web Banners
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              Accomadations Brochure
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              Infinite Accomadations
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              Categorization Grid
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              2024-2025 Deployment
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              2025-2026 Deployment
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              Ship Infographic
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              Thrills Infographic
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              Chills Infographic
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              Ship Cutaway
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              FAQs
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              Consumer Flyer
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              Customizable Car Magnet
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              Countdown Social Media Banners
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-2xl m-2 text-black">
              Which Cruiser Are You?
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-center flex-col justify-center LowerContainer">
          <h2 className="text-2xl font-sans font-semibold text-center">Start planning your clients' vacation with a personalized website</h2>
          <div className="items-center pt-5 justify-center text-center">
            <button
              className="rounded-full text-2xl bg-white m-2 text-black">
              Create Now
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full text-2xl bg-white m-2 text-black">
              How To
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full text-2xl bg-white m-2 text-black">
              Customizable Email
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
          </div>
        </div>
      </FlexContainer>
    </section>
  )
}

export default Hero3
