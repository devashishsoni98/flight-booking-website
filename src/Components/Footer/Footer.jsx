import React from 'react'
import logo1 from '../../assets/logo1.png'

import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo1} className='Logo' />
          </div>
          <p>Your mind should be stronger than your feelings, Fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <FaPinterestP className='icon'/>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li><a href="">Home</a></li>
          <li><a href="">Explore</a></li>
          <li><a href="">Flight Status</a></li>
          <li><a href="">Travel</a></li>
          <li><a href="">Check-In</a></li>
          <li><a href="">Manage your booking</a></li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li><a href="">FAQ</a></li>
          <li><a href="">How to</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Baggage</a></li>
          <li><a href="">Route Map</a></li>
          <li><a href="">Our Communities</a></li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li><a href="">Chauffeur</a></li>
          <li><a href="">Our Partners</a></li>
          <li><a href="">Destinations</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Transportation</a></li>
          <li><a href="">Programme Rules</a></li>
        </div>


      </div>

      <div className="copyRightDiv flex">
        <p>Courtesy Design | Developed by <a href="" target='_blank'>Devashish Soni</a></p>
      </div>

    </div>
  )
}

export default Footer