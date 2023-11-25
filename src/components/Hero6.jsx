import React from 'react'
import styled from 'styled-components'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const FlexContainer = styled.div`
  display: flex;
  margin-top: 100px;

  h1 {
    font-size: 3rem;
    letter-spacing: -3px;
    line-height: 1.4;
    font-weight: 600;
    padding-right: 50px;
  }

  h2 {
    color: #4c73b6;
    letter-spacing: 5px;
    font-size: 2rem;
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
    flex-direction: column-reverse;
    display: flex;
    margin: 50px;
    justify-content: flex-start;


    h2 {
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

const Hero6 = () => {
  return (
    <section>
      <FlexContainer>
        <div className="reveal w-full Hero6TextContainer">
          <h2>Iconic Thrills</h2>
          <h1 className="mb-5 text-black mt-2">TAKE ADVENTURE BY
            STORM</h1>
          <h3 className="text-2xl text-black">The storm of the century is brewing — and your clients are in its path. Brace for Category 6, the largest waterpark at sea, with six record-breaking slides. Roaring thunder means the Frightening Bolt is close, and this drop waterslide is the tallest at sea. Once their stomach lurches, it’s too late. They’ll be caught in the Pressure DropSM, the first open free-fall slide at sea. And if your clients are still determined to charge in headfirst, they can grab a friend and take on the first mat racing duo ever to sail, Storm ChasersSM. Or gather the whole crew — and their courage — for Hurricane HunterSM and Storm SurgeSM, doubling up the firsts with not one but two new raft slides the whole family can ride.</h3>
        </div>
        <div className="w-full reveal flex justify-center align-top">
          <img
            className="rounded-3xl sm:h-full md:h-5/6 lg:h-5/6 xl:h-5/6"
            src="https://images.ctfassets.net/1euybtmvarct/6C4L8HAY7Aylh819frxDSG/4e7aa454b2c13ae53ae31312394b2ed2/RCI_IC_Thrill_Island_Aerial_CGI37_Crop_RET__1_.jpg?w=1800&h=2075&q=50&fm=webp"
            alt="cruiseimg" />
        </div>
      </FlexContainer>
    </section>
  )
}

export default Hero6
