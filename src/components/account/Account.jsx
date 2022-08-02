import React, { useState } from 'react'
import Login from '../../pages/login/Login';
import Signup from '../../pages/signup/Signup';
import shopImg from '../Images/BookShopping.png'
import "./Account.css";

function Account() {

  const [page, setPage] = useState(true);

  const viewone = (page) => {
    return (
      <>
        {page ? (
          <Login listenToLogin={listenToLogin} />
        ) : (
          <Signup listenToSignup={listenToSignup} />
        )}
      </>
    );
  };

  const listenToLogin = () => {
    setPage(!page);
  };

  const listenToSignup = () => {
    setPage(!page);
  };


  return (
    <div className='homeSection'>
      <div className='imgSection'>
        <div className=''>
          <img className='imgShopping' src={shopImg} alt=''/>
          <h3 className='online'>ONLINE BOOK SHOPPING</h3>
        </div>
       

      </div>
      <div className='logsign'>
        {viewone(page)}
        {/* <Signup /> */}
        {/* <Login /> */}
      </div>
    </div>
  )
}

export default Account