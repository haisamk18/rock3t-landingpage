import React from 'react'
import './Footer.css'
import instaimg from '../assets/icons8-instagram-50.png'
import { FaInstagram,FaLinkedin,FaTwitter,FaTelegram,FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>

        <div className="footerconnect">
            <div className="leftline"></div>
            <div className="iconsgrp">
                <div className="icons"><FaLinkedin color='white'/></div>
                <div className="icons"><FaTwitter color='white'/></div>
                <div className="icons"><FaTelegram color='white'/></div>
                <div className="icons"><FaDiscord color='white'/></div>
            </div>
               
            <div className="rightline"></div>
        </div>

        <div className="logoname">rock3t <span>LABS</span></div>

        <div className="logopunchline">Ready to take your project to the moon</div>

        <div className="legalroutes">
            <div className="menus"></div>
            <div className="menus"></div>
            <div className="menus"></div>
            <div className="menus"></div>
        </div>



    </div>
  )
}

export default Footer