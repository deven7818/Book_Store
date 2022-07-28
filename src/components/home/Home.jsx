import React, { useState } from 'react'
import Login from '../../pages/login/Login';
import Signup from '../../pages/signup/Signup';
import shopImg from '../Images/BookShopping.png'
import "./Home.css";

function Home() {

  const [view, setView] = useState(true);

  const viewone = (view) => {
    return (
      <>
        {view ? (
          <Login listenToLogin={listenToLogin} />
        ) : (
          <Signup listenToSignup={listenToSignup} />
        )}
      </>
    );
  };

  const listenToLogin = () => {
    setView(!view);
  };

  const listenToSignup = () => {
    setView(!view);
  };


  return (
    <div className='homeSection'>
      <div className='imgSection'>
        <div className=''>
          <img className='imgShopping' src={shopImg} />
        </div>

      </div>
      <div className='logsign'>
        {viewone(view)}
        {/* <Signup /> */}
        {/* <Login /> */}
      </div>
    </div>
  )
}

export default Home