import React, { useState } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import Modal from 'react-modal';
import EmblaCarousel5 from '../carousel/EmblaCarousel5'
import EmblaCarousel6 from '../carousel/EmblaCarousel6'
import EmblaCarousel8 from '../carousel/EmblaCarousel8'
import '../Styles/base.css'
import '../Styles/embla.css'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const customStyles = {
  content: {
    top: '46%',
    width: '70%',
    height: '70%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    zIndex: '999',
    transform: 'translate(-50%, -50%)',
  },
};

const customStyles2 = {
  content: {
    top: '46%',
    width: '70%',
    height: '70%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    zIndex: '999',
    transform: 'translate(-50%, -50%)',
  },
};

const customStyles3 = {
  content: {
    top: '46%',
    width: '70%',
    height: '85%',
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
  const [modal1IsOpen, set1IsOpen] = React.useState(false);
  const [modal2IsOpen, set2IsOpen] = React.useState(false);
  const [modal3IsOpen, set3IsOpen] = React.useState(false);

  function open1Modal() {
    set1IsOpen(true);
  }

  function open2Modal() {
    set2IsOpen(true);
  }

  function open3Modal() {
    set3IsOpen(true);
  }

  function close1Modal() {
    set1IsOpen(false);
  }

  function close2Modal() {
    set2IsOpen(false);
  }

  function close3Modal() {
    set3IsOpen(false);
  }


  return (
    <section>
      <div className="Hero3Container rounded-xl py-44 md:ml-20 md:mr-20 lg:mx-96 xs:mx-14">
        <div className="reveal flex items-center flex-col pb-24 justify-center">
          <h1 className="md:text-7xl xs:text-6xl font-semibold font-sans text-center text-white px-40">ICON OF THE SEAS MARKETING TOOLS</h1>
          <h2 className="md:text-3xl mt-6 text-center px-34 font-semibold">Everything you need to market <span className="italic">Icon of the Seas</span></h2>
        </div>
        <hr />
        <div className="reveal flex items-center flex-col py-20 justify-center">
          <div className="items-center justify-center text-center">

            {/* Modal 1 */}
            <button
              className="rounded-full text-3xl bg-white m-2 pl-5 pr-2 pt-3 pb-3 text-black"
              onClick={open1Modal}
            >
              Evergreen
              <ArrowOutwardIcon className='mb-3 ml-1' style={{ color: "#3663ae" }} />
            </button>
            <Modal
              isOpen={modal1IsOpen}
              onRequestClose={close1Modal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <main>
                <EmblaCarousel5 slides={SLIDES} options={OPTIONS} />
                <button
                  className="top-5 xl:right-4 xs:top-0 xs:right-0 z-50 cursor-pointer absolute text-3xl text-black"
                  onClick={close1Modal}
                >x</button>
              </main>
            </Modal>

            {/* Modal 2 */}
            <button
              className="rounded-full text-3xl bg-white m-2 pl-5 pr-2 pt-3 pb-3 text-black"
              onClick={open2Modal}
            >
              Evolution
              <ArrowOutwardIcon className='mb-3 ml-1' style={{ color: "#3663ae" }} />
            </button>
            <Modal
              isOpen={modal2IsOpen}
              onRequestClose={close2Modal}
              style={customStyles2}
              contentLabel="Example Modal"
            >
              <main>
                <EmblaCarousel6 slides={SLIDES} options={OPTIONS} />
                <button
                  className="top-5 xl:right-4 xs:top-0 xs:right-0 z-50 cursor-pointer absolute text-3xl text-black"
                  onClick={close2Modal}
                >x</button>
              </main>
            </Modal>

            {/* Modal 3 */}
            <button
              className="rounded-full text-3xl bg-white m-2 pl-5 pr-2 pt-3 pb-3 text-black"
              onClick={open3Modal}
            >
              Revolution
              <ArrowOutwardIcon className='mb-3 ml-1' style={{ color: "#3663ae" }} />
            </button>
            <Modal
              isOpen={modal3IsOpen}
              onRequestClose={close3Modal}
              style={customStyles3}
              contentLabel="Example Modal"
            >
              <main>
                <EmblaCarousel8 slides={SLIDES} options={OPTIONS} />
                <button
                  className="top-5 xl:right-4 xs:top-0 xs:right-0 z-50 cursor-pointer absolute text-3xl text-black"
                  onClick={close3Modal}
                >x</button>
              </main>
            </Modal>

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
