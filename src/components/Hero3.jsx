import React, { forwardRef } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import EmblaCarousel5 from '../carousel/EmblaCarousel5'
import EmblaCarousel6 from '../carousel/EmblaCarousel6'
import EmblaCarousel8 from '../carousel/EmblaCarousel8'
import '../Styles/base.css'
import '../Styles/embla.css'
import { ModalContainer } from '../Styles/Styles';

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

const Hero3 = forwardRef(({ scrollToSection }, ref) => {
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
      <div className="Hero3Container rounded-xl pt-20 md:ml-20 md:mr-20 lg:mx-96 xs:mx-14 xs:mt-24">
        <div className="reveal flex items-center flex-col pb-24 justify-center">
          <h1 className="md:text-7xl xs:text-6xl font-semibold font-sans text-center text-white px-40">ICON OF THE SEAS MARKETING TOOLS</h1>
          <h2 className="md:text-3xl text-white mt-6 text-center px-34 font-semibold">Everything you need to market <span className="italic">Icon of the Seas</span></h2>
        </div>
        <hr />
        <div className="reveal flex mt-20 justify-center">
          <nav>
            <div className="flex flex-wrap justify-center pb-12 z-10 text-center">
              <a
                onClick={() => {
                  scrollToSection('section4')
                }}
                className="rounded-full flex items-center relative cursor-pointer p-2 pl-5 pr-3 bg-white m-2 text-black">
                Financial Terms
                <ArrowDownwardIcon style={{ color: "#3663ae" }} />
              </a>
              <a
                onClick={() => {
                  scrollToSection('section7')
                }}
                className="rounded-full flex items-center relative cursor-pointer p-2 pl-5 pr-3 bg-white m-2 text-black">
                Cruise & Travel Business Updates
                <ArrowDownwardIcon style={{ color: "#3663ae" }} />
              </a>
              <a
                onClick={() => {
                  scrollToSection('section10')
                }}
                className="rounded-full flex items-center relative cursor-pointer p-2 pl-5 pr-3 bg-white m-2 text-black">
                Industry Experience
                <ArrowDownwardIcon style={{ color: "#3663ae" }} />
              </a>
              <a
                onClick={() => {
                  scrollToSection('section15')
                }}
                className="rounded-full flex items-center relative cursor-pointer pl-5 pr-3 p-2 bg-white m-2 text-black">
                Positioning
                <ArrowDownwardIcon style={{ color: "#3663ae" }} />
              </a>
              <a
                onClick={() => {
                  scrollToSection('section18')
                }}
                className="rounded-full flex items-center relative cursor-pointer pl-5 pr-3 p-2 bg-white m-2 text-black">
                References
                <ArrowDownwardIcon style={{ color: "#3663ae" }} />
              </a>
            </div>
          </nav>
        </div>
        <hr />
        <div className="reveal flex items-center flex-col pt-24 pb-16 justify-center">
          <div className="items-center justify-center text-center">

            {/* Modal 1 */}
            <a
              className="rounded-full cursor-pointer bg-white m-2 pl-5 pr-2 pt-3 pb-3 text-black"
              onClick={open1Modal}
            >
              MockShop
              <ArrowOutwardIcon className='mb-3 ml-1' style={{ color: "#3663ae" }} />
            </a>
            <Modal
              isOpen={modal1IsOpen}
              onRequestClose={close1Modal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <ModalContainer>
                <main>
                  <EmblaCarousel5 slides={SLIDES} options={OPTIONS} />
                  <a
                    className="top-5 xl:right-4 xs:top-0 xs:right-0 z-50 cursor-pointer absolute text-black"
                    onClick={close1Modal}
                  >x</a>
                </main>
              </ModalContainer>
            </Modal>

            {/* Modal 2 */}
            <a
              className="rounded-full bg-white m-2 cursor-pointer pl-5 pr-2 pt-3 pb-3 text-black"
              onClick={open2Modal}
            >
              First Insight
              <ArrowOutwardIcon className='mb-3 ml-1' style={{ color: "#3663ae" }} />
            </a>
            <Modal
              isOpen={modal2IsOpen}
              onRequestClose={close2Modal}
              style={customStyles2}
              contentLabel="Example Modal"
            >
              <main>
                <EmblaCarousel6 slides={SLIDES} options={OPTIONS} />
                <a
                  className="rounded-full flex items-center relative cursor-pointer p-2 pl-5 pr-3 bg-white m-2 text-black"
                  onClick={close2Modal}
                >x</a>
              </main>
            </Modal>

            {/* Modal 3 */}
            <a
              className="rounded-full bg-white m-2 pl-5 pr-2 pt-3 pb-3 text-black"
              onClick={open3Modal}
            >
              Autonomous Shopping
              <ArrowOutwardIcon className='mb-3 ml-1' style={{ color: "#3663ae" }} />
            </a>
            <Modal
              isOpen={modal3IsOpen}
              onRequestClose={close3Modal}
              style={customStyles3}
              contentLabel="Example Modal"
            >
              <main>
                <EmblaCarousel8 slides={SLIDES} options={OPTIONS} />
                <a
                  className="top-5 xl:right-4 xs:top-0 xs:right-0 z-50 cursor-pointer absolute text-3xl text-black"
                  onClick={close3Modal}
                >x</a>
              </main>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  )
})

Hero3.propTypes = {
  section: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

Hero3.displayName = 'Hero3';

Modal.setAppElement('#root');

export default Hero3
