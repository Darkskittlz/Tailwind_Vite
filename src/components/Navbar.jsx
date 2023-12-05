import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import CountdownTimer from "./CountdownTimer"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import LoyalLogo from "../assets/LoyalPNG.png"
import AnchorLogo from "../assets/AnchorIMG.png"

const GridContainer = styled.div`
  grid-template-columns: 1fr 1fr 2fr 150px;
  width: 100%;
  height: 100px;
  display: grid;
  top: 0;
  left: 0;
  position: relative;
  grid-gap: 20px;
  padding: 0px 5px 0px 5px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: rgb(255,11,159);
  background: linear-gradient(25deg, rgba(255,11,159,1) 0%, rgba(251,142,1,1) 85%, rgba(251,142,1,1) 88%);

  h1 {
    font-size: 28px;
    font-weight: 700;
    text-align: left;

    @media screen and (max-width: 1451px) {
      font-size: 35px;
    }

    @media screen and (max-width: 960px) {
      font-size: 15px;
    }
  }

  h3 {
    font-size: 25px;
    text-align: left;

    @media screen and (max-width: 1451px) {
      display: none;
    }
  }

  @media screen and (max-width: 1451px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-gap: 18px;
  }
}
`

const NavContainer = styled.div`
  position: relative;
  top: 0;
`

const Navbar = () => {
  const [showAnchor, setShowAnchor] = useState(true);
  const DAYS_IN_MS = 24 * 60 * 60 * 1000; // milliseconds in a day
  const HOURS_IN_MS = 60 * 60 * 1000; // milliseconds in an hour
  const MINUTES_IN_MS = 60 * 1000; // milliseconds in a minute
  const totalMilliseconds = 45.0315 * DAYS_IN_MS + 1 * HOURS_IN_MS + 1 * MINUTES_IN_MS;
  const NOW_IN_MS = new Date().getTime();
  const dateTime = NOW_IN_MS + totalMilliseconds;

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      setShowAnchor(viewportWidth >= 960);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <NavContainer>
        <GridContainer>
          <h1 className="text-white">ICON OF THE SEAS SETS SAIL IN</h1>
          <CountdownTimer targetDate={dateTime} />
          <h3>We can't wait for Icon of the Seas, the very first ship in a revolutionary, all-new class - debuting in January 2024!</h3>
          <button className="rounded-full p-2 bg-white text-black hidden xl:inline">
            Learn More
            <ArrowForwardIcon />
          </button>
        </GridContainer >
        {showAnchor ? (
          <div className="w-full flex LoyalNav justify-between pl-3 items-center">
            <img src={LoyalLogo} className="h-16 m-10" alt="https://loading.io/license/#by-license" />
          </div>
        ) : (
          <div className="w-full flex LoyalNav justify-between pl-3 items-center">
            <img src={AnchorLogo} className="h-16 m-10" alt="https://loading.io/license/#by-license" />
          </div>
        )}
      </NavContainer>
    </>
  )
}

export default Navbar

