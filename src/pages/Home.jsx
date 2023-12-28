import React, { useEffect, useRef, forwardRef, useState } from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types';
import Navbar from "../components/Navbar"
import Hero1 from "../components/Hero1"
import Hero2 from "../components/Hero2"
import Hero3 from "../components/Hero3"
import Hero6 from "../components/Hero6"
import Hero9 from "../components/Hero9"
import Hero14 from "../components/Hero14"
import Hero17 from "../components/Hero17"
import Hero20 from "../components/Hero20"
import Hero40 from '../components/Hero40';
import Hero43 from '../components/Hero43';
import Hero46 from '../components/Hero46';
import Hero49 from '../components/Hero49';
import Hero52 from '../components/Hero52';
import Hero55 from '../components/Hero55';
import Hero58 from '../components/Hero58';
import Hero61 from '../components/Hero61';
import Hero64 from '../components/Hero64';
import Hero55A from '../components/Hero55A';
import Hero58B from '../components/Hero58B';
import Hero3B from '../components/Hero3B';
import Hero54A from '../components/Hero54';
import Hero56 from '../components/Hero56';
import Letter from '../components/Letter';

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
  const section2Ref = useRef(null);
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
      case 'section2':
        return section2Ref;
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
      <article className="scroller" data-mdb-perfect-scrollbar='true'>
        <Hero1 section="section1" ref={section1Ref} scrollToSection={executeScrollToSection} />
        <Hero2 section="section2" ref={section2Ref} scrollToSection={executeScrollToSection} />
        <Hero3 />

        {/* Leading With Luxury */}
        <Hero40 section="section40" ref={section40Ref} scrollToSection={executeScrollToSection} />
        <Hero9 />
        {/* EmblaCarousel12 */}


        {/* Bling It On */}
        <Hero43 section="section43" ref={section43Ref} scrollToSection={executeScrollToSection} />
        <Hero17 />
        {/* EmblaCarousel5 */}


        {/* Handbag Haven */}
        <Hero46 section="section46" ref={section46Ref} scrollToSection={executeScrollToSection} />
        <Hero14 />
        {/* EmblaCarousel3 */}


        {/* Beach to Bar */}
        <Hero49 section="section49" ref={section49Ref} scrollToSection={executeScrollToSection} />
        <Hero20 />
        {/* EmblaCarousel6 */}


        {/* Popping Up Differently */}
        <Hero52 section="section52" ref={section52Ref} scrollToSection={executeScrollToSection} />
        <Hero6 />
        {/* EmblaCarousel */}


        {/* Mirror, Mirror on the Wall */}
        <Hero55 section="section55" ref={section55Ref} scrollToSection={executeScrollToSection} />
        <Hero55A />
        {/* EmblaCarousel11 */}


        {/* Cheers to an Icon */}
        <Hero58 section="section58" ref={section58Ref} scrollToSection={executeScrollToSection} />
        <Hero58B />
        {/* EmblaCarousel19 */}


        {/* Its Iconic - Logo */}
        <Hero61 section="section61" ref={section61Ref} scrollToSection={executeScrollToSection} />
        <Hero54A />
        {/* EmblaCarousel17 */}


        {/* Adventure Awaits */}
        <Hero64 section="section64" ref={section64Ref} scrollToSection={executeScrollToSection} />
        <Hero56 />
        {/* EmblaCarousel18 */}


        <Hero3B />
        <Letter />
      </article>
    </GridContainer>
  )
});


Home.displayName = 'Home';


export default Home
