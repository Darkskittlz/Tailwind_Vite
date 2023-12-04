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
  --slide-height: 19rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const IMGContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1530px) {
    flex-direction: column-reverse;
  }
`

export const InnerContainer1 = styled.div`
  padding-left: 50px;
  width: 40%;

  @media screen and (max-width: 1530px) {
    width: 100%;
  }
`

export const InnerContainer2 = styled.div`
  width: 40%;
  padding-bottom: 50px;

  h2 {
    width: 100%;
    position: fixed;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 30px;
  }
 
  @media screen and (max-width: 1530px) {
    width: 100%;
  }
`

