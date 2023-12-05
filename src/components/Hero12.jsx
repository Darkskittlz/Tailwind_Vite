import React from 'react'

const Hero12 = () => {
  return (
    <section>
      <div className="reveal flex flex-col justify-around xs:mt-10 z-10">
        <img src="https://images.ctfassets.net/1euybtmvarct/2j5PRMtSmhCbmmAyzVPoLF/db6eea122756eabd41b83885f0595f08/RCI_IC_Ultimate_Family_Townhouse_CGI43_RET__1_.jpg?w=2546&h=1438&q=50&fm=webp" />
        <div className="w-full h-full justify-center items-center absolute flex flex-col">
          <h1 className="tracking-tight text-center text-white font-semibold xs:text-7xl md:text-9xl lg:text-9xl uppercase mb-8">Make Room For <br />Awesome</h1>
          <h2 className="font-semibold lg:text-5xl md:text-4xl uppercase">Iconic Stays</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero12
