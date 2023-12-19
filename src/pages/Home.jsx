import React, { useEffect, useRef, forwardRef, useState } from 'react'
import styled from "styled-components"
import LoyalLogo from "../assets/LoyalPNG.png"
import PropTypes from 'prop-types';
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
import Hero31 from '../components/Hero31';
import Hero32 from '../components/Hero32';
import Hero33 from '../components/Hero33';
import Hero34 from '../components/Hero34';
import Hero35 from '../components/Hero35';
import Hero36 from '../components/Hero36';
// import Hero38 from '../components/Hero38';
// import Hero39 from '../components/Hero39';
import Hero40 from '../components/Hero40';
// import Hero42 from '../components/Hero42';
import Hero43 from '../components/Hero43';
// import Hero44 from '../components/Hero44';
// import Hero45 from '../components/Hero45';
import Hero46 from '../components/Hero46';
// import Hero47 from '../components/Hero47';
// import Hero48 from '../components/Hero48';
import Hero49 from '../components/Hero49';
// import Hero50 from '../components/Hero50';
// import Hero51 from '../components/Hero51';
import Hero52 from '../components/Hero52';
// import Hero53 from '../components/Hero53';
// import Hero54 from '../components/Hero54';
import Hero55 from '../components/Hero55';
// import Hero56 from '../components/Hero56';
// import Hero57 from '../components/Hero57';
import Hero58 from '../components/Hero58';
// import Hero59 from '../components/Hero59';
// import Hero60 from '../components/Hero60';
import Hero61 from '../components/Hero61';
// import Hero62 from '../components/Hero62';
// import Hero63 from '../components/Hero63';
import Hero64 from '../components/Hero64';
import Hero6A from '../components/Hero6A';
import Hero6B from '../components/Hero6B';
import Hero6C from '../components/Hero6C';
import Hero6D from '../components/Hero6D';
import Hero6E from '../components/Hero6E';
import Hero6F from '../components/Hero6F';
import Hero6G from '../components/Hero6G';
import Hero6H from '../components/Hero6H';
import Hero6I from '../components/Hero6I';
import Hero6J from '../components/Hero6J';
import Hero6K from '../components/Hero6K';
import Hero6L from '../components/Hero6L';
import Hero10A from '../components/Hero10A';
import Hero10B from '../components/Hero10B';
import Hero10C from '../components/Hero10C';
import Hero15A from '../components/Hero15A';
import Hero15B from '../components/Hero15B';
import Hero18A from '../components/Hero18A';
import Hero18B from '../components/Hero18B';
import Hero12A from '../components/Hero12A';
import Hero22A from '../components/Hero22A';
import Hero25A from '../components/Hero25A';
import Hero55A from '../components/Hero55A';
import Hero58A from '../components/Hero58A';
import Hero58B from '../components/Hero58B';

const useMountEffect = (fun) => useEffect(fun, []);

const GridContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const Home = forwardRef((_, ref) => {
  const section1Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section7Ref = useRef(null);
  const section10Ref = useRef(null);
  const section15Ref = useRef(null);
  const section18Ref = useRef(null);
  const section18BRef = useRef(null);
  const section40Ref = useRef(null);
  const section43Ref = useRef(null);
  const section46Ref = useRef(null);
  const section49Ref = useRef(null);
  const section52Ref = useRef(null);
  const section55Ref = useRef(null);
  const section58Ref = useRef(null);
  const section61Ref = useRef(null);
  const section64Ref = useRef(null);



  const executeScrollToSection = (section) => {
    const sectionRef = getSectionRef(section);
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const getSectionRef = (section) => {
    switch (section) {
      case 'nav':
        return section1Ref;
      case 'section1':
        return section1Ref;
      case 'section3':
        return section3Ref;
      case 'section4':
        return section4Ref;
      case 'section7':
        return section7Ref;
      case 'section10':
        return section10Ref;
      case 'section15':
        return section15Ref;
      case 'section18':
        return section18Ref;
      case 'section18B':
        return section18BRef;
      case 'section40':
        return section40Ref;
      case 'section43':
        return section43Ref;
      case 'section46':
        return section46Ref;
      case 'section49':
        return section49Ref;
      case 'section52':
        return section52Ref;
      case 'section55':
        return section55Ref;
      case 'section58':
        return section58Ref;
      case 'section61':
        return section61Ref;
      case 'section64':
        return section64Ref;
      default:
        return null;
    }
  }

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
    <GridContainer ref={ref}>
      <Navbar section="nav" ref={section1Ref} scrollToSection={executeScrollToSection} />
      <article className="scroller">
        <Hero1 section="section1" ref={section1Ref} scrollToSection={executeScrollToSection} />
        <Hero2 />
        <Hero3 section="section3" ref={section3Ref} scrollToSection={executeScrollToSection} />
        <Hero4 section="section4" ref={section4Ref} scrollToSection={executeScrollToSection} />
        <Hero5 />
        <Hero7 section="section7" ref={section7Ref} scrollToSection={executeScrollToSection} />
        <Hero6A />
        <Hero6B />
        <Hero6C />
        <Hero6D />
        <Hero6E />
        <Hero6F />
        <Hero6G />
        <Hero6H />
        <Hero6I />
        <Hero6J />
        <Hero6K />
        <Hero6L />
        <Hero10 section="section10" ref={section10Ref} scrollToSection={executeScrollToSection} />
        <Hero10A />
        <Hero10B />
        <Hero10C />
        <Hero15 section="section15" ref={section15Ref} scrollToSection={executeScrollToSection} />
        <Hero15A />
        <Hero15B />
        <Hero18 section="section18" ref={section18Ref} scrollToSection={executeScrollToSection} />
        <Hero18A />
        <Hero18B section="section18B" ref={section18BRef} scrollToSection={executeScrollToSection} />
        <Hero12 />
        <Hero12A />
        <Hero22 />
        <Hero22A />
        <Hero25 />
        <Hero25A />

        {/* Leading With Luxury */}
        <Hero40 section="section40" ref={section40Ref} scrollToSection={executeScrollToSection} />
        <Hero8 />
        <Hero9 />

        {/* Bling It On */}
        <Hero43 section="section43" ref={section43Ref} scrollToSection={executeScrollToSection} />
        <Hero11 />
        <Hero17 />

        {/* Handbag Haven */}
        <Hero46 section="section46" ref={section46Ref} scrollToSection={executeScrollToSection} />
        <Hero13 />
        <Hero14 />

        {/* Beach to Bar */}
        <Hero49 section="section49" ref={section49Ref} scrollToSection={executeScrollToSection} />
        <Hero16 />
        <Hero20 />

        {/* Popping Up Differently */}
        <Hero52 section="section52" ref={section52Ref} scrollToSection={executeScrollToSection} />
        <Hero19 />
        <Hero6 />

        {/* Mirror, Mirror on the Wall */}
        <Hero55 section="section55" ref={section55Ref} scrollToSection={executeScrollToSection} />
        <Hero23 />
        <Hero55A />

        {/* A Toast to an Icon */}
        <Hero58 section="section58" ref={section58Ref} scrollToSection={executeScrollToSection} />
        <Hero58A />
        <Hero58B />

        {/* Headline */}
        <Hero61 section="section61" ref={section61Ref} scrollToSection={executeScrollToSection} />

        {/* Adventure Awaits */}
        <Hero64 section="section64" ref={section64Ref} scrollToSection={executeScrollToSection} />
        {/* <Hero21 /> */}
        {/* <Hero24 /> */}
        {/* <Hero26 /> */}
        {/* <Hero27 /> */}
        {/* <Hero28 /> */}
        {/* <Hero29 /> */}
        {/* <Hero30 /> */}
        {/* <Hero31 /> */}
        {/* <Hero32 /> */}
        {/* <Hero33 /> */}
        {/* <Hero34 /> */}
        {/* <Hero35 /> */}
        {/* <Hero36 /> */}
        {/* <Hero38 /> */}
        {/* <Hero39 /> */}
      </article>
    </GridContainer>
  )
});


Home.displayName = 'Home';


export default Home
