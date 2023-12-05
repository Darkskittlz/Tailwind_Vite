import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'


const Hero3 = () => {
  return (
    <section>
      <div className="Hero3Container rounded-xl py-44 md:ml-20 md:mr-20 lg:mx-96 xs:mx-14">
        <div className="reveal flex items-center flex-col pb-24 justify-center">
          <h1 className="md:text-7xl xs:text-6xl font-semibold font-sans text-center text-white px-40 font-light">ICON OF THE SEAS MARKETING TOOLS</h1>
          <h2 className="md:text-3xl mt-6 text-center px-34 font-semibold">Everything you need to market <span className="italic">Icon of the Seas</span></h2>
        </div>
        <hr />
        <div className="reveal flex items-center flex-col py-20 justify-center">
          <div className="items-center justify-center text-center">
            <button
              className="rounded-full text-3xl bg-white m-2 pl-5 pr-2 pt-3 pb-3 text-black">
              Evergreen
              <ArrowOutwardIcon className='mb-3 ml-1' style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full mr-2 justify-center tracking-tight items-center text-3xl bg-white pl-4 pr-2 pt-3 pb-2 text-black">
              Evolution
              <ArrowOutwardIcon className="mb-3 ml-1" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full bg-white text-3xl pl-4 pr-2 pt-3 pb-2 text-black">
              Revolution
              <ArrowOutwardIcon className="mb-3 ml-1" style={{ color: "#3663ae" }} />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex items-center flex-col justify-center pt-28">
          <h2 className="text-2xl font-sans font-semibold text-center">Start planning your clients' vacation with a personalized website</h2>
          <div className="items-center pt-5 justify-center text-center">
            <button
              className="rounded-full text-3xl bg-white pl-5 pr-2 pt-3 pb-3 mr-2 text-black">
              Create Now
              <ArrowOutwardIcon className='mb-3 ml-1' style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full text-3xl bg-white pl-5 pr-2 pt-3 pb-3 mr-2 text-black">
              How To
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full text-3xl bg-white pl-5 pr-2 pt-3 pb-3 text-black">
              Customizable Email
              <ArrowOutwardIcon className="mb-2 ml-2" style={{ color: "#3663ae" }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero3
