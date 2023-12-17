import React from 'react'
import { BlueBulletContainer, InnerContainer2, Margin3Container } from '../Styles/Styles'

const Hero22A = () => {
  return (
    <section>
      <Margin3Container>
        <div className="xs:m-10 flex justify-between">
          <BlueBulletContainer>
            <div className="reveal lg:flex-row-reverse xs:flex-col w-full flex align-top">
              <div className="md:mt-0 md:flex-wrap md:align-baseline justify-center flex md:w-full md:pr-0 xs:w-full xs:pr-10 xs:mt-10">
                {/* <h1><ul className="ml-5 fixed list-disc list-inside"><li>MockShop</li></ul></h1> */}
                <img className='' alt="Use photo from First Insight Website" />
              </div>
              <div className="w-5/6 xl:pl-12 lg:pl-0 md:ml-0 xs:ml-2 md:pl-0 md:pr-32 xs:mb-20 xs:w-full reveal">
                {/* <h5 className="text-2xl text-white text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">REFERENCES</li></ul></h5> */}
                <h2 className="mb-10 xl:text-5xl lg:text-4xl md:font-semibold xs:text-4xl xs:mt-12 md:mt-0 text-black">Voice of the Customer</h2>
                <h3 className="text-2xl xl:text-4xl lg:text-3xl xs:text-4xl text-black">
                  With this online insights platform, we can recruit consumers that have sailed on Royal and test product designs, price points, messaging and more to bring the voice of the customer early on and inform our mutual decision making.
                </h3>
              </div>
            </div>
          </BlueBulletContainer>
        </div>
      </Margin3Container>
    </section>
  )
}

export default Hero22A
