import React from 'react'
import './Appointment.css'

const Appointment = () => {
  return (
    <div className='appointment'>
        <div className="overlay"></div>

        <div className="boxes">
            <div className="box"></div>
            <div className="box">
                Your Project
            </div>
        </div>

        <div className="texthead">
        Get in touch with us
        </div>

        <div className="textdesc">You will feel confident in your choice from the first minutes of communication with Coinband.</div>

        <div className='btton'>
           <div className="btn">
           <a href='https://calendly.com/khurshidhaisam/30min' target="_blank" rel="noopener noreferrer">Book a call</a>

           </div>

        </div>
        
        
    </div>
  )
}

export default Appointment