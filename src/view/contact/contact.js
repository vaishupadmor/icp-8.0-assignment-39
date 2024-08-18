import React from 'react'
import Navbar from "../../../component/navbar/navbar"
import contactimg from "./../../contact/contact/contact.jpg"
import "../../../component/footer/footer"

function contact() {
  return (
    <div>
        <Navbar/>
        <h1 className='heading'> contact</h1>
        <img src={contactimg} className='images'/>
    </div>
  )
}

export default contact