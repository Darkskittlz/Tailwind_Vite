import React, { forwardRef } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import Modal from 'react-modal';
import EmblaCarousel5 from '../carousel/EmblaCarousel5'
import EmblaCarousel6 from '../carousel/EmblaCarousel6'
import EmblaCarousel8 from '../carousel/EmblaCarousel8'
import '../Styles/base.css'
import '../Styles/embla.css'
import { Margin4Container, ModalContainer } from '../Styles/Styles';

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

const Hero3B = forwardRef(({ scrollToSection }, ref) => {
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


  return (
    <section>
      <Margin4Container>
        <div className="Hero3Container rounded-xl pt-20 md:ml-20 md:mr-20 lg:mx-96 xs:mx-14 xs:mt-24">
          <div className="flex items-center flex-col pb-24 justify-center">
            <h1 className="md:text-7xl xs:text-6xl font-semibold font-sans text-center text-white px-40">Big Ideas</h1>
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
                  Voice of the Customer
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
                      <EmblaCarousel5 slides={SLIDES} options={OPTIONS} />
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
                  Merchandising Transformation
                  <ArrowOutwardIcon style={{ color: '#3663ae' }} className="p-0 ml-3" />
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
                  onClick={open3Modal}
                  className="rounded-full flex items-center relative cursor-pointer p-2 px-5 bg-white m-2 text-black"
                >
                  Suite Spot
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
                      className="top-5 xl:right-4 xs:top-0 xs:right-0 z-50 cursor-pointer absolute text-3xl text-black"
                      onClick={close3Modal}
                    >x</a>
                  </main>
                </Modal>
              </div>
            </nav>
          </div>
        </div>
      </Margin4Container>
    </section>
  )
})

Hero3B.displayName = 'Hero3B';

Modal.setAppElement('#root');

export default Hero3B

