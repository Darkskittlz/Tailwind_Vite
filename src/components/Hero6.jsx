import React, { useState } from 'react'
import styled from 'styled-components'
import "../Styles/App.css"
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import Cruise1 from "/Cruise1.jpg";
import Cruise2 from "/Cruise2.jpg";
import Cruise3 from "/Cruise3.jpg";


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
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideEnd = (active, direction) => {
    console.log(`Slide transition ended. Active slide: ${active}, Direction: ${direction}`);
    setActiveSlide(active);
  };

  const slides = [
    {
      image: Cruise1,
      heading: "TAKE ADVENTURE BY STORM",
      caption: "CATEGORY 6 WATERPARK",
      text: "The storm of the century is brewing — and your clients are in its path. Brace for Category 6, the largest waterpark at sea, with six record-breaking slides. Roaring thunder means the Frightening Bolt is close, and this drop waterslide is the tallest at sea. Once their stomach lurches, it’s too late. They’ll be caught in the Pressure DropSM, the first open free-fall slide at sea. And if your clients are still determined to charge in headfirst, they can grab a friend and take on the first mat racing duo ever to sail, Storm ChasersSM. Or gather the whole crew — and their courage — for Hurricane HunterSM and Storm SurgeSM, doubling up the firsts with not one but two new raft slides the whole family can ride."
    },
    {
      image: Cruise2,
      heading: "Claim the Crown",
      caption: "CROWN'S EDGE",
      text: "Do your clients dare step to the edge of bravery? Only on Icon of the Seas will they encounter the Crown’s EdgeSM — a fear-inducing challenge that’s part skywalk, part ropes course, part thrill ride and an all-out test of courage. Strap in and step onto the walkway. Dare to look down at the crashing waves below — but keep moving. Because when they least expect it, the floor beneath your clients’ feet could collapse and leave them dangling high over the ocean. When the moment of truth comes, only the courageous will conquer."
    },
    {
      image: Cruise3,
      heading: "GO AHEAD AND PLAY FAVORITES",
      caption: "RETURNING FLEET FAVORITES",
      text: "The new Icon of the Seas wouldn’t be complete without all the fleet favorites that make Royal Caribbean® the best family vacation on the planet. And now, 50 years’ worth of memory-maxing experiences are becoming their boldest versions yet. Your clients can perfect their pop-up on the FlowRider® surf simulator. Race to the summit of Adrenaline PeakSM — the ultimate rock-climbing expedition. Get in on a pick-up game at the Sports Court. And pair up for putts at a totally reimagined mini-golf course — where firing up friendly competition is par for the course. Bolder bonding is back by popular demand."
    }
  ];
  return (
    <section>
      <FlexContainer>
        <div className="reveal w-full Hero6TextContainer">
          <h2>Iconic Thrills</h2>
          <CCarousel
            controls
            indicators
            interval={false}
            activeIndex={activeSlide}
            onSlid={handleSlideEnd}
          >
            {slides.map((slide, index) => (
              <CCarouselItem key={index}>
                <CImage className="d-block w-100 h-40 rounded-2xl" src={slide.image} alt={`IMG${index + 1}`} />
                <CCarouselCaption className="d-none h-100 initial d-md-block">
                  <h5 className="text-3xl text-left font-semibold captionText">{slide.caption}</h5>
                </CCarouselCaption>
                <div className="text-container">
                  <h1 className="mb-5 text-black mt-2">{slide.heading}</h1>
                  <h3 className="text-2xl text-black">{slide.text}</h3>
                </div>
              </CCarouselItem>
            ))}
          </CCarousel>
        </div>
      </FlexContainer>
    </section >
  )
}

export default Hero6
