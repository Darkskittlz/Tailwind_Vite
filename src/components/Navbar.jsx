import React, { useState, useEffect, forwardRef } from 'react'
import styled from "styled-components"
import CountdownTimer from "./CountdownTimer"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoyalLogo from "../assets/LoyalEternallyLogo.png"
import AnchorLogo from "../assets/AnchorIMG.png"
import PropTypes from 'prop-types';

const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  position: relative;
  padding: 0px 5px 0px 5px;
  align-items: center;
  background: rgb(255,11,159);
  background: linear-gradient(25deg, rgba(255,11,159,1) 0%, rgba(251,142,1,1) 85%, rgba(251,142,1,1) 88%);

  h1 {
    font-size: 18px;
    margin-left: 2%;
    font-weight: 700;
    text-align: left;

    @media screen and (max-width: 437px) {
      width: 200px;
    }
  }

  h3 {
    font-size: clamp(1.8rem, 1.8rem + 0vw, 1.8rem);
    font-weight: 600;
    width: 600px;
    text-align: left;
    margin-left: 2%;
    margin-right: 2%;

    @media screen and (max-width: 1033px) {
      display: none;
    }
  }

  button {
    width: 15%;
    margin-right: 2%;

    @media screen and (max-width: 1033px) {
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

const Navbar = forwardRef(({ scrollToSection }) => {
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
      <NavContainer >
        <GridContainer>
          <h1 className="text-white font-oswald cursor-pointer">COUNTDOWN TO DECISION DAY</h1>
          <CountdownTimer targetDate={dateTime} />
          <h3 className='text-white font-oswald'>We can't wait to show you our game changing Retail vision!</h3>
          <button
            className="rounded-full text-2xl p-5 right-0 bg-white text-black xl:inline"
            onClick={() => {
              scrollToSection('section2')
            }}
          >
            Why Starboard
            <ArrowForwardIcon style={{ marginLeft: "10px", marginTop: "-2px" }} />
          </button>
        </GridContainer >
        {showAnchor ? (
          <div className="flex LoyalNav justify-between pl-3 items-center">
            <img
              onClick={() => {
                scrollToSection('section1')
              }}
              src={LoyalLogo}
              className="h-16 m-10 cursor-pointer"
              alt="https://loading.io/license/#by-license"
            />
          </div>
        ) : (
          <div className="flex cursor-pointer LoyalNav justify-between pl-3 items-center">
            <img
              onClick={() => {
                scrollToSection('section1')
              }}
              src={AnchorLogo} className="h-16 m-10"
              alt="https://loading.io/license/#by-license"
            />
          </div>
        )}
      </NavContainer>
    </>
  )
});

Navbar.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

Navbar.displayName = 'Navbar';


export default Navbar

