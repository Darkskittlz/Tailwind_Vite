import React, { forwardRef } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import Modal from 'react-modal';
import '../Styles/base.css'
import '../Styles/embla.css'
import { IMGContainer, Margin4Container, ModalContainer } from '../Styles/Styles';
import FirstInsight from "../assets/firstInsight.png"
// import Transformation from "../assets/MockShop.MOV"
import Trunk from "../assets/Trunk.png"



const customStyles = {
  content: {
    top: '46%',
    width: '70%',
    height: '50%',
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
    height: '60%',
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
    height: '50%',
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
            <h1 className="md:text-7xl xs:text-6xl font-semibold z-0 text-center font-oswald uppercase text-white px-40">Big Ideas</h1>
            <h2 className="font-semibold lg:text-4xl md:text-3xl mt-5 uppercase font-oswald text-white">Lorem Ipsum</h2>
          </div>
          <hr />
          <div className="flex pt-24 justify-center">
            <nav>
              <div className="flex flex-wrap justify-center pb-24 z-10 text-center">

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
                      <IMGContainer>
                        <div className="flex">
                          <div className="md:mt-0 h-md w-full xs:pr-10 xs:mt-20">
                            <h5 className="lg:text-3xl xs:hidden text-left font-semibold text-SB_Blue"><ul className="list-disc list-inside"><li className="listItem">REVOLUTIONIZING CUSTOMER INSIGHT</li></ul></h5>
                            <h1 className="lg:text-6xl lg:mb-0 xs:mb-10 xs:text-3xl xs:-mt-10 lg:mt-10 md:mb-7 text-black xs:text-6xl text-left font-semibold font-sans z-0">VOICE OF THE CUSTOMER</h1>
                            <h3 className="xs:text-3xl lg:w-full md:w-full text-black">
                              With First Insight, Starboard will take guest engagement to the next level.
                              <br />
                              <br />
                              The voice of the customer is key to guest satisfaction and revenue growth.  If only we could tap into consumer preferences during the design or selection phase of future collections.  Well, that day has arrived.
                              <br />
                              <br />
                              With First Insight we can invite feedback in-shop via a QR code or interactive screen.  More broadly, we can crowdsource ideas and preferences from like-demographics.
                              <br />
                              <br />
                              We’re ready to listen, learn, and refine.
                            </h3>
                          </div>
                          <h5 className="text-1xl absolute right-0 mr-thirty_nine mt-9 font-semibold text-SB_Blue"><ul className="list-disc list-inside"><li className="listItem">First Insight Platform</li></ul></h5>
                          <img src={FirstInsight} className='mt-14 w-2/4 xs:hidden lg:flex' alt="First Insight Platform" />
                        </div>
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
                  Merchandising Transformation
                  <ArrowOutwardIcon style={{ color: '#3663ae' }} className="p-0 ml-3" />
                </a>
                <Modal
                  isOpen={modal2IsOpen}
                  onRequestClose={close2Modal}
                  style={customStyles2}
                  contentLabel="Example Modal"
                >
                  <ModalContainer>
                    <main>
                      <IMGContainer>
                        <div className="flex">
                          <div className="md:mt-0 h-md w-full xs:pr-10 xs:mt-20">
                            <h5 className="lg:text-3xl xs:hidden text-left font-semibold text-SB_Blue"><ul className="list-disc list-inside"><li className="listItem">REVOLUTIONIZING INSTORE MERCHANDISING</li></ul></h5>
                            <h1 className="lg:text-6xl lg:mb-0 xs:mb-10 xs:text-modalHeader xs:-mt-10 lg:mt-10 md:mb-7 text-black xs:text-6xl text-left font-semibold font-sans z-0">MERCHANDISING TRANSFORMATION</h1>
                            <h3 className="xs:text-3xl lg:w-full md:w-full text-black">
                              Once again Starboard brings the tech with Mockshop.
                              <br />
                              <br />
                              We’ll have the power to optimize each shop’s floor plan and design by dragging and dropping assortments into virtual, 3D replicas of our shops.
                              <br />
                              <br />
                              MockShop's automated planogram feature makes it faster than ever to create beautiful, easy to follow visual merchandising guidelines for our shipboard teams.
                              <br />
                              <br />
                              The tech syncs up with sales data and produces heat maps so we can analyze performance at product, fixture and store zone levels.
                              <br />
                              <br />
                              Icing on the cake?  Continuous learning to drive improved sell through, revenue growth, and guest satisfaction.
                            </h3>
                          </div>
                          <h5 className="text-1xl absolute right-0 mr-thirty_nine mt-9 font-semibold text-SB_Blue"><ul className="list-disc list-inside"><li className="listItem">MockShop</li></ul></h5>
                        </div>
                      </IMGContainer>
                      <a
                        className="top-5 xl:right-4 xs:top-0 xs:right-0 z-50 cursor-pointer absolute text-black"
                        onClick={close1Modal}
                      >x</a>
                    </main>
                  </ModalContainer>
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
                  <ModalContainer>
                    <main>
                      <IMGContainer>
                        <div className="flex">
                          <div className="md:mt-0 h-md w-full xs:pr-10 xs:mt-20">
                            <h5 className="lg:text-3xl xs:hidden text-left font-semibold text-SB_Blue"><ul className="list-disc list-inside"><li className="listItem">SUITE SPOT</li></ul></h5>
                            <h1 className="lg:text-6xl lg:mb-0 xs:mb-10 xs:text-modalHeader xs:-mt-10 lg:mt-10 md:mb-7 text-black xs:text-6xl text-left font-semibold font-sans z-0">LUXURY PERSONAL STYLIST</h1>
                            <h3 className="xs:text-3xl lg:w-full md:w-full text-black">
                              Imagine having a world-class personal shopper available in your suite and at your convenience.
                              <br />
                              <br />
                              Star class guests can request the services of our Luxury Personal Stylist through their Royal Genie. Our stylist will meet with each client to understand their interests, preferences, and unique style. Whether they’re looking to elevate their wardrobe, accessorize with timeless pieces, or invest in luxury goods, our stylist will curate selections for a private showing in their suite.
                              <br />
                              <br />
                              Expert advice and exceptional service to enhance the Royal Suite Class guest experience.
                            </h3>
                          </div>
                          <img src={Trunk} className='mt-14 w-2/4 lg:flex xs:hidden' alt="SUITE SPOT" />
                        </div>
                      </IMGContainer>
                      <a
                        className="top-5 xl:right-4 xs:top-0 xs:right-0 z-50 cursor-pointer absolute text-black"
                        onClick={close1Modal}
                      >x</a>
                    </main>
                  </ModalContainer>
                </Modal>
              </div>
            </nav>
          </div>
        </div>
      </Margin4Container >
    </section >
  )
})

Hero3B.displayName = 'Hero3B';

Modal.setAppElement('#root');

export default Hero3B

