import React from 'react'
import styled from "styled-components"
import CountdownTimer from "./CountdownTimer"


const GridContainer = styled.div`
  grid-template-columns: 1fr 1fr 2fr 150px;
  width: 100%;
  height: 100px;
  margin-top: -10px;
  display: grid;
  top: 0;
  left: 0;
  position: fixed;
  grid-gap: 20px;
  padding: 0px 5px 0px 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(255,11,159);
  background: linear-gradient(25deg, rgba(255,11,159,1) 0%, rgba(251,142,1,1) 85%, rgba(251,142,1,1) 88%);

  h1 {
    font-size: 18px;
    font-weight: 700;
    text-align: left;
  }

  h3 {
    font-size: 15px;
    text-align: left;

    @media screen and (max-width: 960px) {
      display: none;
    }
  }

  button {
    background-color: white;
    border-radius: 15px;
    padding-left: 10px;
    font-weight: 700;
    font-size: 10px;
    color: #000052;
    height: 34px;
    width: 100px;
    right: 0;

    @media screen and (max-width: 960px) {
      display: none;
    }
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
}
`

const Navbar = () => {
  const DAYS_IN_MS = 24 * 60 * 60 * 1000; // milliseconds in a day
  const HOURS_IN_MS = 60 * 60 * 1000; // milliseconds in an hour
  const MINUTES_IN_MS = 60 * 1000; // milliseconds in a minute
  const totalMilliseconds = 68 * DAYS_IN_MS + 1 * HOURS_IN_MS + 1 * MINUTES_IN_MS;
  const NOW_IN_MS = new Date().getTime();
  const dateTime = NOW_IN_MS + totalMilliseconds;

  return (
    <GridContainer>
      <h1>ICON OF THE SEAS SETS SAIL IN</h1>
      <CountdownTimer targetDate={dateTime} />
      <h3>We can't wait for Icon of the Seas, the very first ship in a revolutionary, all-new class - debuting in January 2024!</h3>
      <button>Learn More</button>
    </GridContainer>
  )
}

export default Navbar

