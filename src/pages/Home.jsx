import React from "react"
import styled from "styled-components"
import Hero1 from "../components/Hero1"
import Hero2 from "../components/Hero2"
import Hero3 from "../components/Hero3"
import Hero4 from "../components/Hero4"
import Hero5 from "../components/Hero5"
import Hero6 from "../components/Hero6"
import Hero7 from "../components/Hero7"
import Navbar from "../components/Navbar"


const GridContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const Home = () => {
  return (
    <GridContainer>
      <Navbar />
      <article className="scroller">
        <Hero1 />
        <Hero2 />
        {/* <Hero3 /> */}
        {/* <Hero4 /> */}
        {/* <Hero5 /> */}
        {/* <Hero6 /> */}
        {/* <Hero7 /> */}
      </article>
    </GridContainer>
  )
}
export default Home
