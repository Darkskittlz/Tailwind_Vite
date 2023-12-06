import React, { useState } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import Modal from 'react-modal';
import EmblaCarousel5 from '../carousel/EmblaCarousel5'
import '../Styles/base.css'
import '../Styles/embla.css'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const customStyles = {
  content: {
    top: '46%',
    width: '70%',
    height: '74%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    zIndex: '999',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const Hero3 = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

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
              className="rounded-full text-3xl bg-white m-2 pl-5 pr-2 pt-3 pb-3 text-black"
              onClick={openModal}
            >
              Evergreen
              <ArrowOutwardIcon className='mb-3 ml-1' style={{ color: "#3663ae" }} />
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <main>
                <EmblaCarousel5 slides={SLIDES} options={OPTIONS} />
                <button
                  className="rounded-full mr-2 justify-center border border-black m-10 py-2 px-10 items-center text-3xl bg-white text-black"
                  onClick={closeModal}
                >close</button>
              </main>
            </Modal>
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
    </section >
  )
}

Modal.setAppElement('#root');

export default Hero3
