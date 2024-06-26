import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer/Footer'
import { InlineWidget } from "react-calendly";
import Appointment from './Appointment/Appointment'
import Services from './Services/Services'
import Header from './Header/Header'

function App() {
  const [count, setCount] = useState(0)

  const show=false;

  return (
    <>
     <div className="main">
       
        <Header/>
       <Services/>
       <Appointment/>
       <Footer/>
     </div>
    </>
  )
}

export default App
