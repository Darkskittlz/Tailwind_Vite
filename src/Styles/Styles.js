import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;

  @media screen and (max-width: 1536px) {
    flex-direction: column-reverse;
    display: flex;
    margin: 50px;
    justify-content: flex-start;
  }

  @media screen and (min-width: 2036px) {
    img {
      width: 200px;
    }
  }
`

export const EmblaGridContainer = styled.div`
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-height: 22rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const EmblaGridContainer2 = styled.div`
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-height: 22rem;
  display: flex;
  /* height: 100vh; */
  justify-content: space-between;
  flex-direction: column;
  background-color: #4ae3f6;
  padding-top: 150px; 
  padding-bottom: 150px;
`

export const MarginContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;

  h5 {
    color: white;
  }
  
`

export const Margin3Container = styled.div`
  margin-top: 25vh;
  margin-bottom: 25vh;

  h5 {
    color: white;
  }
  
`


export const Hero1Header = styled.div`
  display: flex;
  align-items: center;
  top: 0.2%;
  position: relative;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 214px;
  }

  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 95px;
  }

  @media only screen and (min-width: 1450px) and (max-width: 1536px) {
    top: 0%;

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 204px;
    }

    h2 {
      text-align: center;
      font-weight: 700;
      font-size: 95px;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1449px) {
    top: -0.5%;

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 154px;
    }

    h2 {
      text-align: center;
      font-weight: 700;
      font-size: 55px;
    }

  }

  /* Media query for tablets (landscape) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    top: 0%;

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 94px;
    }

    h2 {
      text-align: center;
      font-weight: 700;
      font-size: 45px;
    }
  }

  /* Media query for mobile devices */
  @media only screen and (max-width: 767px) {
    top: 0%;

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 64px;
    }

    h2 {
      text-align: center;
      font-weight: 700;
      font-size: 35px;
    }
  }
`

export const Margin2Container = styled.div`
  margin-top: 100px;
`

export const IMGContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1530px) {
    flex-direction: column-reverse;
  }
`

export const ModalContainer = styled.div`
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    .content {
      width: 80%;
    }
  }

  /* Media query for tablets (landscape) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .content {
      width: 60%;
    }
  }

  /* Media query for mobile devices */
  @media only screen and (max-width: 600px) {
    .content {
      top: 20%;
      width: 90%;
      height: auto; /* Adjust height as needed for mobile */
    }
  }
`

export const InnerContainer1 = styled.div`
  padding-left: 20px;
  width: 45%;

  h4 {
    font-style: italic;
  }

  h5 {
    color: #3663ae;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1530px) {
    width: 100%;

    h1 {
      margin-bottom: 20px;
    }

    h5 {
      margin-bottom: 15px;
    }
  }
`

export const InnerContainer3 = styled.div`
  padding-left: 20px;
  width: 54%;

  h4 {
    font-style: italic;
  }

  h3 {
    width: 100%;
  }

  p {
    width: 140%;
  }

  h5 {
    color: #3663ae;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  

  @media screen and (max-width: 1530px) {
    width: 100%;

    h5 {
      margin-bottom: 15px;
    }

    h3 {
      width: 100%;
    }

    p {
      width: 100%;
    }
  }
`


export const CarouselContainer = styled.div`
  h2 {
    position: fixed;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 10px;
    color: #536fb2;
  }
 
  @media screen and (max-width: 1530px) {
    width: 100%;

    h2 {
      margin-left: 30px;
    }
  }
`

export const InnerContainer2 = styled.div`

  h2 {
    position: fixed;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 10px;
  }
 
  @media screen and (max-width: 1530px) {
    width: 100%;

    h2 {
      margin-left: 30px;
    }
  }
`

export const MockShopContainer = styled.div`
  width: 40%;
  padding-bottom: 50px;
  margin-right: 50px;

  h2 {
    position: fixed;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 30px;
  }
`

export const BlueBulletContainer = styled.div`
  padding-left: 20px;

  h4 {
    font-style: italic;
  }

  h3 {
    width: 100%;
  }

  p {
    width: 140%;
  }

  h1 {
    color: #3663ae;
    margin-top: 68px;
  }

  h5 {
    color: #3663ae;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1530px) {
    width: 100%;

    h5 {
      margin-bottom: 15px;
    }

    h3 {
      width: 100%;
    }

    p {
      width: 100%;
    }
  }
`

