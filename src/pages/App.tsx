import React from 'react'

import CustomButton from '../components/CustomButton'
import Layout from '../components/layout'
import Header from '../components/header'

import rectangleHeaders from "../assets/RectangleHeader.svg"
import instagram from "../assets/instagram.svg"
import linkedIn from "../assets/linkedIn.svg"
import whatsApp from "../assets/whatsapp.svg"
import gitHub from "../assets/github.svg"

const App = () => {
  return (
    <Layout>
      <div>
        <Header />
        <img className='' src={rectangleHeaders} alt="rectangleHeadres" width={160} />
        <div className='z-20 -mt-[9rem] font-bold tracking-widest'>
          <div className='pl-44'>
            <div className='space-y-3'>
              <h3 className='text-[20px] text-dark'>Hello ! I'm</h3>
              <h2 className='text-[28px] text-greenLight'>M Agung Cahya D</h2>
              <h1 className='text-[64px] text-dark leading-[4rem] '>
                Frontend <br /> <span className='pl-12 '>Engineer</span>
              </h1>
            </div>
            <div className='mt-10'>
              <img src={linkedIn} width={20} alt="linkedIn.svg" />
              <img src={gitHub} alt="gitHub.svg" />
              <img src={whatsApp} alt="whatsApp.svg" />
              <img src={instagram} alt="instagram.svg" />
            </div>
            <div className='mt-2 bg-gray'>
              <CustomButton
                id='btn-hero'
                label='My Cover Letter'
                size="12/12" />
            </div>

            <div className='bg-greenLight absolute w-4 h-4 top-[19.6em] left-[34em] border-4 border-greenLight rounded-full'> </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
