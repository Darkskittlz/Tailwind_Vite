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
  padding-top: 70px;
  padding-bottom: 70px;


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
      <div className="Hero3Container rounded-xl py-44 md:mb-40 md:ml-20 md:mr-20 lg:mx-96 xs:my-60 xs:mx-14">
        <div className="reveal flex items-center flex-col pb-24 justify-center">
          <h1 className="md:text-7xl xs:text-6xl font-semibold font-sans text-center text-white px-40 font-light">ICON OF THE SEAS MARKETING TOOLS</h1>
          <h2 className="md:text-3xl mt-6 text-center px-34 font-semibold">Everything you need to market <span className="italic">Icon of the Seas</span></h2>
        </div>
        <hr />
        <div className="reveal flex items-center flex-col py-20 justify-center">
          <div className="items-center justify-center text-center">
            <button
              className="rounded-full text-2xl bg-white m-2 pl-5 pr-2 pt-3 pb-3 text-black">
              Trade Flyer
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full m-2 text-2xl bg-white pl-4 pr-2 pt-3 pb-2 text-black">
              Consumer Flyer
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white m-2 text-2xl pl-4 pr-2 pt-3 pb-2 text-black">
              Customizable Consumer Email
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-center flex-col justify-center pt-28">
          <h2 className="text-2xl font-sans font-semibold text-center">Start planning your clients' vacation with a personalized website</h2>
          <div className="items-center pt-5 justify-center text-center">
            <button
              className="rounded-full text-2xl bg-white pl-4 pr-2 pt-3 pb-0 m-2 text-black">
              Create Now
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full text-2xl bg-white pl-4 pr-2 pt-3 pb-2 m-2 text-black">
              How To
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full text-2xl bg-white pl-4 pr-2 pt-3 pb-2 m-2 text-black">
              Customizable Email
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero3
