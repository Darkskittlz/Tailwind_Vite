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
import { IMGContainer, Margin4Container, ModalContainer, ModalContainer2 } from '../Styles/Styles';
import EmblaCarousel13 from '../carousel/EmblaCarousel13';

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
    zIndex: '20',
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
  const [modal4IsOpen, set4IsOpen] = React.useState(false);
  const [modal5IsOpen, set5IsOpen] = React.useState(false);

  function open1Modal() {
    set1IsOpen(true);
  }

  function open2Modal() {
    set2IsOpen(true);
  }

  function open3Modal() {
    set3IsOpen(true);
  }

  function open4Modal() {
    set3IsOpen(true);
  }

  function open5Modal() {
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

  function close4Modal() {
    set4IsOpen(false);
  }

  function close5Modal() {
    set5IsOpen(false);
  }


  return (
    <section>
      <Margin4Container>
        <div className="Hero3Container rounded-xl pt-20 md:ml-20 md:mr-20 lg:mx-96 xs:mx-14 xs:mt-24">
          <div className="flex items-center flex-col pb-24 justify-center">
            <h1 className="md:text-7xl md:mb-7 xs:text-6xl font-semibold font-sans text-center text-white z-0 px-40">ICON II & III REINVENTION UNVEILED</h1>
            <h2 className="md:text-3xl text-white mt-6 text-center px-34 font-semibold">Discover our responses to your RFP questions by navigating through the buttons below</h2>
          </div>
          <hr />
          <div className="flex mt-20 justify-center">
            <nav>
              <div className="flex flex-wrap justify-center pb-12 z-10 text-center">

                {/* Modal 1 */}
                <a
                  onClick={open1Modal}
                  className="rounded-full flex items-center relative cursor-pointer p-2 px-5 bg-white m-2 text-black"
                >
                  Show Me The Money
                  <ArrowOutwardIcon style={{ color: '#3663ae' }} className="p-0 ml-3" />
                </a>
                <Modal
                  isOpen={modal1IsOpen}
                  onRequestClose={close1Modal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <ModalContainer>
                    <main>
                      <IMGContainer>
                        <ModalContainer2>
                          <div className="md:mt-0 xs:w-full xs:pr-10 xs:mt-20">
                            <h5 className="text-3xl text-left font-semibold"><ul className="list-disc list-inside"><li className="listItem">Financial Terms</li></ul></h5>
                            <h2 className="xs:text-3xl lg:w-full md:w-full text-black">
                              Financial terms have been sent under separate copy to: Irena Meyer and Cynthia Pintado in a password protected file.
                            </h2>
                          </div>
                        </ModalContainer2>
                      </IMGContainer>
                      <a
                        className="top-5 xl:right-4 xs:top-0 xs:right-0 z-50 cursor-pointer absolute text-black"
                        onClick={close1Modal}
                      >x</a>
                    </main>
                  </ModalContainer>
                </Modal>

                {/* Modal2 */}
                <a
                  onClick={open2Modal}
                  className="rounded-full flex items-center relative cursor-pointer p-2 px-5 bg-white m-2 text-black"
                >
                  Cruise & Travel Business Updates
                  <ArrowOutwardIcon style={{ color: '#3663ae' }} className="p-0 ml-3" />
                </a>
                <Modal
                  isOpen={modal2IsOpen}
                  onRequestClose={close2Modal}
                  style={customStyles2}
                  contentLabel="Example Modal"
                >
                  <main>
                    <a
                      className="rounded-full flex items-center absolute right-5 z-30 cursor-pointer pr-5 bg-white text-black"
                      onClick={close2Modal}
                    >x</a>
                    <EmblaCarousel13 slides={SLIDES} options={OPTIONS} />
                  </main>
                </Modal>

                {/* Modal 3 */}
                <a
                  onClick={open3Modal}
                  className="rounded-full flex items-center relative cursor-pointer p-2 px-5 bg-white m-2 text-black"
                >
                  Industry Experience
                  <ArrowOutwardIcon style={{ color: '#3663ae' }} className="p-0 ml-3" />
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
                      className="top-5 xl:right-4 xs:top-0 xs:right-0 z-max cursor-pointer relative cursor-pointer text-3xl text-black"
                      onClick={close3Modal}
                    >x</a>
                  </main>
                </Modal>

                {/* Modal 4 */}
                <a
                  onClick={open4Modal}
                  className="rounded-full flex items-center relative cursor-pointer px-5 p-2 bg-white m-2 text-black"
                >
                  Positioning
                  <ArrowOutwardIcon style={{ color: '#3663ae' }} className="p-0 ml-3" />
                </a>
                <Modal
                  isOpen={modal4IsOpen}
                  onRequestClose={close4Modal}
                  style={customStyles3}
                  contentLabel="Example Modal"
                >
                  <main>
                    <EmblaCarousel8 slides={SLIDES} options={OPTIONS} />
                    <a
                      className="top-5 xl:right-4 xs:top-0 xs:right-0 z-50 cursor-pointer absolute text-3xl text-black"
                      onClick={close4Modal}
                    >x</a>
                  </main>
                </Modal>

                {/* Modal 5 */}
                <a
                  onClick={open5Modal}
                  className="rounded-full flex items-center relative cursor-pointer px-5 p-2 bg-white m-2 text-black"
                >
                  References
                  <ArrowOutwardIcon style={{ color: '#3663ae' }} className="p-0 ml-3" />
                </a>
                <Modal
                  isOpen={modal5IsOpen}
                  onRequestClose={close5Modal}
                  style={customStyles3}
                  contentLabel="Example Modal"
                >
                  <main>
                    <EmblaCarousel8 slides={SLIDES} options={OPTIONS} />
                    <a
                      className="top-5 xl:right-4 xs:top-0 xs:right-0 z-50 cursor-pointer absolute text-3xl text-black"
                      onClick={close5Modal}
                    >x</a>
                  </main>
                </Modal>

              </div>
            </nav>
          </div>
        </div>
      </Margin4Container >
    </section >
  )
})

Hero3.displayName = 'Hero3';

Modal.setAppElement('#root');

export default Hero3
