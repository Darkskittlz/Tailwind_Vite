import React from 'react'
import styled from 'styled-components'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const FlexContainer = styled.div`
  display: flex;
  margin-top: 100px;

  h1 {
    font-size: 5rem;
    font-family: GTAmerica;
    font-weight: 700;
    line-height: 0.95;
    padding-right: 50px;
  }

  h2 {
    font-size: 2.2rem;
    font-family: 'PPNeueMontreal';
    font-weight: 500;
    line-height: 1.4;
    font-weight: 400;
    padding-right: 50px;
  }

  h3 {
    font-size: 1.5rem;
    font-family: PPNeueMontreal;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(0, 0, 0);
  }



  @media screen and (max-width: 1536px) {
    flex-direction: column;
    display: flex;
    margin: 50px;
    justify-content: flex-start;


    h2 {
      margin-top: 20px;
      font-size: 2.0rem;
      letter-spacing: -2px;
      font-family: 'Roboto';
      font-weight: 200;
      line-height: 1.4;
      font-weight: 400;
      padding-right: 50px;
    }

    h3 {
      font-size: 1.3rem;
      letter-spacing: -1px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      line-height: 1.5;
      color: rgb(0, 0, 0);
    }

    @media screen and (min-width: 2036px) {
      img {
        width: 200px;
      }
    }
  }
`

const Hero5 = () => {
  return (
    <section>
      <FlexContainer>
        <div className="reveal w-full flex justify-center align-top">
          <img
            className="rounded-3xl sm:h-full md:h-5/6 lg:h-5/6 xl:h-5/6"
            src="https://images.ctfassets.net/1euybtmvarct/6C4L8HAY7Aylh819frxDSG/4e7aa454b2c13ae53ae31312394b2ed2/RCI_IC_Thrill_Island_Aerial_CGI37_Crop_RET__1_.jpg?w=1800&h=2075&q=50&fm=webp"
            alt="cruiseimg" />
        </div>
        <div className="reveal w-full Hero5TextContainer">
          <h2 className="text-4xl mb-5 text-black">Take the best-ever vacation and crank it up — way up. This is a whole new class of adventure. The kind that fills every moment with new thrills and changes the way your clients play for good.</h2>
          <h3 className="text-2xl text-black">Like braving six record-breaking slides at Category 6, the largest waterpark at sea. Or finding the courage to conquer the Crown’s EdgeSM, a test of bravery like nothing they’ve ever dared, dangling high above the ocean. And discovering adventure for the ages — all the ages — at SurfsideSM, a stay-all-day neighborhood that opens the floodgates on family fun. A sprawling aquapark and pool give kids more ways to splash and play, with plenty of bites nearby to fuel up for bolder bonding. This is more than a vacation. It’s the best family vacation in the world — the new Icon of the Seas.</h3>
        </div>
      </FlexContainer>
    </section>
  )
}

export default Hero5
