import React, { useState } from 'react';
import Flag from 'react-flagkit';
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import './sass/style.scss';
import Header from './components/header';
import Footer from './components/footer';
import map from './assets/map.svg';
import wastage from './assets/wastage.svg'
import gobleIcon from './assets/globe-icon.svg'
import CountrySelect from 'react-bootstrap-country-select';
import bags from './assets/bags.svg'
import arrowTop from './assets/arrow-top.svg'



function App() {

  const [value, setValue] = useState(null);
  const [showStepOne, setshowStepOne] = useState(true);
  const [showStepTwo, setshowStepTwo] = useState(false);
  const [showStepThree, setshowStepThree] = useState(false);
  const [showStepFinal, setshowStepFinal] = useState(false);

  const showFirst = () => {
    setshowStepOne(true);
    setshowStepTwo(false);
    setshowStepThree(false);
    setshowStepFinal(false);
  }

  const showSecond = () => {
    setshowStepOne(false);
    setshowStepTwo(true);
  }

  const showThird = () => {
    setshowStepOne(false);
    setshowStepTwo(false);
    setshowStepThree(true);
  }

  const showFinal = () => {
    setshowStepOne(false);
    setshowStepTwo(false);
    setshowStepThree(false);
    setshowStepFinal(true);
  }

  return (
    <div className="App">
      <Header />
      <div className='container mx-auto content-wrapper'>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
            <img src={map} alt="map" className='mw-full' />
          </div>
          <div className="lg:w-1/2 p-3 lg:p-6">
            <form className='form-steps'>
              <div className="form-wrapper">
                <div className={`step-1 ${showStepOne ? 'block' : 'hidden'}`}>
                  <div className="flex flex-col lg:flex-row form-heading items-center">
                    <div className="flex text-xl items-center font-semibold">
                      <span className='px-4 py-2 rounded bg-gray'>1</span>
                      <span className="pl-4">Let's start with you country</span>
                    </div>
                    <div className="ml-auto hidden lg:flex">
                      <div className='btn ml-auto mr-4' onClick={showSecond}>Next</div>
                    </div>
                  </div>
                  <div className="flex align-baseline pb-7 mt-5">
                    <div className="globe-icon self-end">
                      <img src={gobleIcon} alt="gobleIcon" />
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor="country" className='block country-label'>select your country from the dropdown</label>
                      <div className="country-select">
                        <CountrySelect
                          value={value}
                          onChange={setValue}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center block lg:hidden">
                    <div className='btn block w-full mx-auto' onClick={showSecond}>Next</div>
                  </div>

                  <div className="flex form-heading items-center py-7">
                    <div className="text-xl flex items-center font-semibold text-gray-400">
                      <span className='px-4 py-2 rounded'>2</span>
                      <span className="pl-4">Did you know?</span>
                    </div>
                  </div>

                  <div className="flex form-heading items-center py-7">
                    <div className="text-xl flex items-center font-semibold text-gray-400">
                      <span className='px-4 py-2 rounded'>3</span>
                      <span className="pl-4">You'll know more about us</span>
                    </div>
                  </div>
                </div>

                <div className={`step-2 ${showStepTwo ? 'block' : 'hidden'}`}>
                  <div className="flex flex-col lg:flex-row form-heading lg:items-center pb-7">
                    <div className="flex text-xl w-full lg:w-auto lg:items-center font-semibold ">
                      <span className='px-4 py-2 rounded bg-gray'>1</span>
                      <span className="pl-4">You belong to</span>
                    </div>
                    <div className="mt-3 lg:ml-auto lg:mt-0">
                      <div className="flex items-stretch">
                        <span className="flag p-2 rounded mr-4">
                          <Flag country="US" size={46} className="block" />
                        </span>
                        <span className="country bg-gray py-2 text-center rounded font-bold truncate" title='United States'>United States</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex form-heading items-center py-4">
                    <div className="text-xl items-center font-semibold">
                      <span className='px-4 py-2 rounded bg-gray'>2</span>
                      <span className="pl-4">Did you know?</span>
                    </div>
                  </div>


                  <div className="country-info flex flex-col lg:flex-row justify-center py-4 items-center">
                    <div className="mr-6 text-center order-2 lg:order-1 mt-4 lg:mt-0">
                      <span className="text-lg text-gray font-semibold block mb-2">United States generates</span>
                      <span className="text-4xl text-gray-900 block font-semibold mb-2">5,839,685.00</span>
                      <span className="text-lg text-gray font-semibold block">Plastic waste generated/annum(T)</span>
                    </div>
                    <img src={bags} alt="bags" className='max-w-full order-1 lg:order-2' />
                  </div>

                  <div className="action-btn flex items-center p-3 mt-4 mb-4">
                    <span className='text-white font-semibold text-leading'>We have the solution to Solve your MLP problems</span>
                    <div onClick={showThird} className="btn btn-white ml-auto">How?</div>
                  </div>

                  <div className="flex form-heading items-center pt-6">
                    <div className="text-xl items-center font-semibold text-gray-400">
                      <span className='px-4 py-2 rounded bg-gray'>3</span>
                      <span className="pl-4">How?</span>
                    </div>
                  </div>
                </div>

                <div className={`step-3 ${showStepThree ? 'block' : 'hidden'}`}>
                  <div className="flex flex-col lg:flex-row form-heading lg:items-center pb-7">
                    <div className="flex text-xl w-full lg:w-auto lg:items-center font-semibold ">
                      <span className='px-4 py-2 rounded bg-gray'>1</span>
                      <span className="pl-4">You belong to</span>
                    </div>
                    <div className="mt-3 lg:ml-auto lg:mt-0">
                      <div className="flex items-stretch">
                        <span className="flag p-2 rounded mr-4">
                          <Flag country="US" size={46} className="block" />
                        </span>
                        <span className="country bg-gray py-2 text-center rounded font-bold truncate" title='United States'>United States</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row form-heading lg:items-center pb-10">
                    <div className="text-xl flex items-center font-semibold flex">
                      <span className='px-4 py-2 rounded bg-gray'>2</span>
                      <span className="pl-4">Plastic waste generated
                        <br className='hidden lg:block' />
                        <span className='text-gray text-sm lg:text-lg pl-2 lg:pl-0'>/annum(T)</span>
                      </span>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-auto">
                      <span className="text-3xl text-gray-900 block font-semibold mb-2 truncate" title='5,839,685.00'>5,839,685.00</span>
                    </div>
                  </div>

                  <div className="flex form-heading items-center pb-4 pt-2">
                    <div className="text-xl flex items-center font-semibold ">
                      <span className='px-4 py-2 rounded bg-gray'>3</span>
                      <span className="pl-4">You are almost there, let us know your</span>
                    </div>
                  </div>

                  <div className="form-group flex flex-col lg:flex-row pt-3">
                    <div className="w-full lg:w-1/2 lg:pr-3 mb-4 lg:mb-0">
                      <label htmlFor="orgName" className='mb-2 text-sm font-semibold'>Organization name <sup className='text-red-500'>*</sup></label>
                      <input type="text" className='block w-100' placeholder='Organization name' />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-3 mb-3 lg:mb-0">
                      <label htmlFor="orgName" className='mb-2 text-sm font-semibold'>Your role <sup className='text-red-500'>*</sup></label>
                      <input type="text" className='block w-100' placeholder='Your role' />
                    </div>
                  </div>

                  <div className="text-center w-full pt-4">
                    <div onClick={showFinal} className='btn lg:w-1/2'>Submit your response</div>
                  </div>

                </div>

                <div className={`step-final ${showStepFinal ? 'block' : 'hidden'} `}>
                  <div className="flex form-heading items-center pb-10">
                    <div className="lg:text-xl items-center font-semibold ">
                      <span className="lg:pl-4">The Actual</span>
                    </div>
                    <div className="ml-auto">
                      <div className="flex items-stretch">
                        <span className="flag p-2 rounded mr-4">
                          <Flag country="US" size={46} className="block" />
                        </span>
                        <span className="country bg-gray py-2 text-center rounded font-bold truncate" title='United States'>United States</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center pb-10 pt-2">
                    <span className="text-3xl text-gray-900 block font-semibold mb-2 truncate" title='5,839,685.00'>5,839,685.00</span>
                    <span className="text-xl text-gray font-semibold">Plastic waste generated (T/Yr)</span>
                  </div>

                  <div className="text-center pb-10 pt-2">
                    <span className="text-3xl text-gray-900 block font-semibold mb-2 truncate" title='5,839,685.00'>5,839,685.00</span>
                    <span className="text-xl text-gray font-semibold">Plastic waste Mismanaged (T/Yr)</span>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center lg:items-start pt-2 lg:pt-4">
                    <div className="w-full lg:w-1/3 text-center mb-4 lg:mb-0">
                      <div className="text-2xl font-bold mb-1">$1.578</div>
                      <div className="text-sm font-semibold text-gray">GDP(abbrev.)</div>
                      <div className="text-xs text-gray">Billions</div>
                    </div>
                    <div className="w-full lg:w-1/3 text-center mb-4 lg:mb-0">
                      <div className="text-2xl font-bold mb-1">N/A</div>
                      <div className="text-sm font-semibold text-gray">Land Area(2020)</div>
                      <div className="text-xs text-gray">Sq Km</div>
                    </div>
                    <div className="w-full lg:w-1/3 text-center">
                      <div className="text-2xl font-bold mb-1">145,530,082</div>
                      <div className="text-sm font-semibold text-gray">Population(2017)</div>
                    </div>
                  </div>

                </div>
              </div>
              <img src={wastage} alt="wastage" className='wastage' />
            </form>

            <div className={`mt-6 ${showStepOne ? 'hidden' : 'block'}`}>
              <span onClick={showFirst} className="text-center block italic underline text-gray-900 cursor-pointer">Back to country selection</span>
            </div>
          </div>
        </div>

        <div className={`pt-8 ${showStepFinal ? 'block' : 'hidden'} `}>
          <div className="mx-auto w-10/12">
            <h2 className='mb-3 pb-1 font-semibold leading-relaxed'>VASPAR's Blockchain Solution Promotes Sustainable Practices for a Circular Economy</h2>
            <p className='leading-8	text-lg mb-0'>To tackle the global problem of plastic waste, VASPAR has implemented a blockchain solution that tracks plastic from production to recycling, while leveraging Extended Producer Responsibility (EPR) policies. By promoting responsible production and consumption practices, VASPAR facilitates a sustainable ecosystem that aims to reduce the plastic waste crisis. The company uses blockchain technology to ensure transparency and traceability throughout the supply chain. Additionally, VASPAR is committed to a circular economy by using waste plastic to build homes, demonstrating that plastic can have a valuable second life and reduce environmental impact.</p>
          </div>

          <div className="mx-auto w-full lg:w-3/4">
            <div className="text-center py-5">
              <h2 className='uppercase font-semibold text-4xl mb-2'>Plastic Age Action Plan</h2>
              <div className="text-2xl font-light">Let's stop burning, burying & floating plastic</div>
            </div>

            <div className="contact-form">
              <div className="text-center">
                <h3 className='font-semibold'>Now that you know why, how & what we do</h3>
                <p>Let's get to know each other, please share us your contact information (ps: if you are interested to invest on us)</p>
                <h3 className='text-2xl font-semibold mb-5'>"Contribute to your country"</h3>
              </div>
              <form>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-10 items-end">
                  <div className="form-group">
                    <label htmlFor="name" className='block mb-2'>Your Name <sup className='text-red-500'>*</sup></label>
                    <input type="text" id="name" placeholder='Your Name' className='block w-full' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className='block mb-2'>Email ID <sup className='text-red-500'>*</sup></label>
                    <input type="email" id="email" placeholder='Your Email ID' className='block w-full' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tel" className='block mb-2'>Phone Number <sup className='text-red-500'>*</sup></label>
                    <input type="tel" id="tel" placeholder='Your Phone Number' className='block w-full' />
                  </div>
                  <div className="form-group mt-3 lg:mt-0">
                    <button className='btn w-full'>Submit your response</button>
                  </div>
                </div>
              </form>
              <p className="text-center mt-5 font-semibold text-xl footer-text">
                <span>
                  Let's solve the plastic problem in Russia!
                  <img src={arrowTop} alt="arrowTop" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer className={`${showStepFinal ? 'block' : 'hidden'} `} />
    </div>
  );
}

export default App;
