import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footerMain'>
     <p className='footerData'>Copyright © {(new Date().getFullYear())} , Bookstore Private Limited. All Rights Reserved</p>
    </div>
  )
}

export default Footer
