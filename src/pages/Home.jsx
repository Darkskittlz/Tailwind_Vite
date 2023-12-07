import React from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Hero1 from "../components/Hero1"
import Hero2 from "../components/Hero2"
import Hero3 from "../components/Hero3"
import Hero4 from "../components/Hero4"
import Hero5 from "../components/Hero5"
import Hero6 from "../components/Hero6"
import Hero7 from "../components/Hero7"
import Hero8 from "../components/Hero8"
import Hero9 from "../components/Hero9"
import Hero10 from "../components/Hero10"
import Hero11 from "../components/Hero11"
import Hero12 from "../components/Hero12"
import Hero13 from "../components/Hero13"
import Hero14 from "../components/Hero14"
import Hero15 from "../components/Hero15"
import Hero16 from "../components/Hero16"
import Hero17 from "../components/Hero17"
import Hero18 from "../components/Hero18"
import Hero19 from "../components/Hero19"
import Hero20 from "../components/Hero20"
import Hero21 from "../components/Hero21"
import Hero22 from "../components/Hero22"
import Hero23 from "../components/Hero23"
import Hero24 from "../components/Hero24"
import Hero25 from "../components/Hero25"
import Hero26 from "../components/Hero26"
import Hero27 from "../components/Hero27"
import Hero28 from "../components/Hero28"
import Hero29 from "../components/Hero29"
import Hero30 from "../components/Hero30"


const GridContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const Home = () => {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  // To check the scroll position on page load
  window.addEventListener("scroll", reveal);

  reveal();
  return (
    <GridContainer>
      <Navbar />
      <article className="scroller">
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Hero6 />
        <Hero7 />
        <Hero8 />
        <Hero9 />
        <Hero10 />
        <Hero11 />
        <Hero12 />
        <Hero13 />
        <Hero14 />
        <Hero15 />
        <Hero16 />
        <Hero17 />
        <Hero18 />
        <Hero19 />
        <Hero20 />
        <Hero21 />
        <Hero22 />
        <Hero23 />
        <Hero24 />
        <Hero25 />
        <Hero26 />
        <Hero27 />
        <Hero28 />
        <Hero29 />
        <Hero30 />
      </article>
    </GridContainer>
  )
}
export default Home
