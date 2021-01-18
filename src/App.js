import React, { useState } from 'react'

import deskimg1 from './images/desktop-image-hero-1.jpg'
import deskimg2 from './images/desktop-image-hero-2.jpg'
import deskimg3 from './images/desktop-image-hero-3.jpg'

import moboimg1 from './images/mobile-image-hero-1.jpg'
import moboimg2 from './images/mobile-image-hero-2.jpg'
import moboimg3 from './images/mobile-image-hero-3.jpg'

import bottomimg1 from './images/image-about-dark.jpg'
import bottomimg2 from './images/image-about-light.jpg'
import arrow from './images/icon-arrow.svg'
import leftarr from './images/icon-angle-left.svg'
import rightarr from './images/icon-angle-right.svg'
import logo from './images/logo.svg'
import bars from './images/icon-hamburger.svg'
import closeIcon from './images/icon-close.svg'

import './style.css'

function App() {

  const [count, setCount] = useState(0);
  const left = () => {
    setCount(pre => pre - 1)
  }
  const right = () => {
    setCount(pre => pre + 1)
  }
  if (count < 0) {
    setCount(2);
  } else if (count === 3) {
    setCount(0);
  }
  const [menuFunction, setmenuFunction] = useState(false);

  const open = () => {
    setmenuFunction(true);
  }
  const close = () => {
    setmenuFunction(false)
  }

  const deskimg = [deskimg1, deskimg2, deskimg3];
  const moboimg = [moboimg1, moboimg2, moboimg3];

  const heading = [
    'Discover innovative ways to decorate',
    'We are available all across the globe',
    'Manufactured with the best materials'
  ]
  const content = [
    `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life.Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
    `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
    `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
  ]
  var img = deskimg;
  if (window.innerWidth < 502) {
    img = moboimg
  } else {
    img = deskimg
  }
  return (
    <div>
      <div style={{ width: '100vw' }}>
        <div onClick={open} className="d-lg-none d-flex position-absolute px-5 pt-5" style={menuFunction ? { display: 'none' } : { display: 'flex', width: '100%' }}>
          <span style={{ display: 'flex' }}>
            <img src={bars} alt="bars" />
          </span>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}><img className="img-fluid" src={logo} alt="logo" /></div>
        </div>
        {/* //mobile */}
        <div style={menuFunction ? { display: 'block', background:'transparent' } : { display: 'none' }}>
          
          <div className="d-lg-none bg-light d-flex position-absolute p-5" style={{ display: 'none', width: '100%' }}>
            <span onClick={close}><img src={closeIcon} alt="close" /></span>
            <div className="pl-5" style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
              <b className="hover_effect_white pointer">home</b>
              <b className="hover_effect_white pointer">shop</b>
              <b className="hover_effect_white pointer">about</b>
              <b className="hover_effect_white pointer">contact</b>
            </div>
          </div>
          
        </div>


        <div style={{ position: 'absolute', width: '30%' }} className="m-5">
          <div className="row d-flex justigy-content-center">
            <span className="col-lg-4 col-6 d-none d-lg-block">
              <img className="img-fluid" src={logo} alt="logo" />
            </span>
            <span className="col-lg-8 d-flex justify-content-around text-light d-none d-lg-flex">
              <span className="hover_effect pointer" style={{ fontSize: '18px' }}>home</span>
              <span className="hover_effect pointer" style={{ fontSize: '18px' }}>shop</span>
              <span className="hover_effect pointer" style={{ fontSize: '18px' }}>about</span>
              <span className="hover_effect pointer" style={{ fontSize: '18px' }}>contact</span>
            </span>
          </div>
        </div>
      </div>

      <div className="row" style={{ widht: '100%' }}>
        
        <div className="row col-lg-6 col-12" style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
          <img className="img-fluid" src={img[count]} alt="error" style={{ padding: 0, margin: 0 }} />
          <span style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'sticky',
            bottom: '3.5rem',
          }}>
            <span className="bg-dark d-flex d-lg-none" style={{ width: '110px', display: 'flex', justifyContent: 'space-around' }}>
              <span onClick={left} className="pointer arrow px-2 py-3 d-flex justify-content-center"><img src={leftarr} alt="left" /></span>
              <span onClick={right} className="pointer arrow px-2 py-3 d-flex justify-content-center"><img src={rightarr} alt="right" /></span>
            </span>
          </span>
        </div>
        <div className="col-lg-6 col-12 p-0 m-0" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="main_content ">

            <h1 className="main_content_header">
              {
                heading[count]
              }
            </h1>
            <br />
            <div className="paragraph">
              {
                content[count]
              }
            </div>
            <br />
            <span className="button">
              Shop now
              <img src={arrow} alt="arrow" />
            </span>
          </div>
          <div className="bg-dark d-none d-lg-flex" style={{ width: '180px', display: 'flex', justifyContent: 'space-around' }}>
            <span onClick={left} className="pointer arrow px-4 py-4 d-flex justify-content-center"><img src={leftarr} alt="left" /></span>
            <span onClick={right} className="pointer arrow px-4 py-4 d-flex justify-content-center"><img src={rightarr} alt="right" /></span>
          </div>
        </div>
        {/* upper half */}
        <div className="row" style={{ padding: 0, margin: 0 }}>
          <div className="col-lg-3 d-flex justify-content-center">
            <img className="img-fluid d-flex" src={bottomimg1} alt="bottom img" />
          </div>
          <div className="col-lg-6 p-5 ">
            <h3 className="about">About our furniture</h3>
            <span className="paragraph">
              Our multifunctional collection blends design and function to suit your individual taste.
              Make each room unique, or pick a cohesive theme that best express your interests and what
              inspires you. Find the furniture pieces you need, from traditional to contemporary styles
              or anything in between. Product specialists are available to help you create your dream space.
             </span>
          </div>
          <div className="col-lg-3 d-flex justify-content-center">
            <img className="img-fluid" src={bottomimg2} alt="bottom img" />
          </div>
        </div>
        {/* lower half */}
      </div>
    </div>
  )
}

export default App
