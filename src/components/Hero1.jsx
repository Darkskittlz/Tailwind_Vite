import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const Hero1 = () => {
  return (
    <section>
      <div className="h-full flex flex-col">
        <div className="w-full flex justify-between pt-4">
          <h1 className="ml-5 text-3xl">LOYAL TO YOU ALWAYS</h1>
          <div className="ml-auto mr-5">
            <button
              className="rounded-full p-2 bg-white mr-5 text-black">
              Marketing Tools
              <ArrowDownwardIcon style={{ color: "#3663ae" }} />
            </button>
            <button
              className="rounded-full p-2 bg-white mr-5 text-black">
              Book Now
              <ArrowOutwardIcon style={{ color: "#3663ae" }} />
            </button>
          </div>
        </div>
        <div className="w-full h-3/5 justify-center items-center flex flex-col">
          <h1 className="text-9xl">ICON</h1>
          <h2 className="text-6xl">OF THE SEAS</h2>
        </div>
        <div className="items-end">
          <h1>Test</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero1
