import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>

       <div className="headeroverlay"></div>

       <div className='navbar'>
           <div className="logo">
               <div className="logoimg">

               </div>
               <div className="logoname">rock3t</div>
           </div>
           <div className="menus">
               <div className="menu"></div>
               <div className="menu"></div>
               <div className="menu"></div>
               <div className="menu"></div>
           </div>

          
       </div>

       <div className="herosection">
               <div className="textfirstline">You Bring the Protocol,</div>
               <div className="textsecondline">We Bring the Audience</div>

               <div className="agencyfunction">The Web3 Native Growth Agency Growing your Favourite Projects</div>

               <div className="btnhero">
                   <a href='https://t.me/haixsam'>Let's Chat</a>
               </div>
           </div>
    </div>
  )
}

export default Header