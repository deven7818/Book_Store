import { Button } from '@mui/material'
import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './OrderSuccessful.css'

function OrderSuccessful() {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div className='orderSuccess'>
            <img src='./images/placeOrder.png' alt=''/>
            <p>hurray!!! your order is confirmed</p>
            <p>the order id is #123456789 save the order id for</p>
            <p>further communication</p>
            <div className='headerTextOrder'>
                <span>Email Us</span>
                <span>Contact Us</span>
                <span>Address</span>
            </div>
            <div className='detailsOrder'>
                <div id='emailOrder'>
                    <span>deven@bookstore.com</span>
                </div>
                <div id='contactOrder'>
                    <span>+91 9405828376</span>
                </div>
                <div id='addressOrder'>
                    <p>36,Om Nagar Near Akashwani tower <br/> Dhule - 424005</p>
                </div>
            </div>
            <div>
                <Button  variant="contained" >Continue Shopping</Button>
            </div>
        </div>
        {/* <div>
            <Footer />
        </div> */}
    </div>
  )
}

export default OrderSuccessful