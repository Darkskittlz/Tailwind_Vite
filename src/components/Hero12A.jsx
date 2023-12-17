import React from 'react'
import { BlueBulletContainer, InnerContainer2, Margin3Container } from '../Styles/Styles'

const Hero12A = () => {
  return (
    <section>
      <Margin3Container>
        <div className="xs:m-10 flex justify-between">
          <BlueBulletContainer>
            <div className="reveal lg:flex-row-reverse xs:flex-col w-full flex align-top">
              <div className="md:mt-0 md:flex-wrap md:align-baseline justify-center flex md:w-full md:pr-0 xs:w-full xs:pr-10 xs:mt-10">
                <h1><ul className="ml-5 fixed list-disc list-inside"><li>MockShop</li></ul></h1>
                <iframe src="https://giphy.com/embed/eopBhAIEOU2hx577Su" width="480" height="270" className="giphy-embed" allowFullScreen>
                </iframe>
              </div>
              <div className="w-5/6 xl:pl-12 lg:pl-0 md:ml-0 xs:ml-2 md:pl-0 md:pr-32 xs:mb-20 xs:w-full reveal">
                {/* <h5 className="text-2xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">REFERENCES</li></ul></h5> */}
                <h2 className="mb-10 xl:text-5xl lg:text-4xl md:font-semibold xs:text-4xl xs:mt-12 md:mt-0 text-black">REVOLUTIONIZING INSTORE MERCHANDISING</h2>
                <h3 className="text-2xl xl:text-4xl lg:text-3xl xs:text-4xl text-black">
                  Embarking on a new era of retail excellence, we are thrilled to introduce MockShop—a customized solution crafted to transform our approach to store planning and visual merchandising. With MockShop, we can effortlessly bring our unique visual concepts to life in a virtual environment, allowing for real-time store planning, cost-efficient prototyping, and seamless collaboration among team members. This innovative tool enables us to adapt our retail strategies, enhance the customer experience, and make data-driven decisions to stay ahead of trends—all within a risk-free virtual environment. Streamlining implementation with detailed plans and visualizations, MockShop ensures a smooth transition from concept to reality, elevating the retail experience for our guests and maximizing operational efficiency. Welcome to the future of retail planning with MockShop—an indispensable tool designed exclusively for our own stores.
                </h3>
              </div>
            </div>
          </BlueBulletContainer>
        </div>
      </Margin3Container>
    </section>
  )
}

export default Hero12A
