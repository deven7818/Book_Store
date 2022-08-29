import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from '../components/account/Account';
import BookList from '../components/bookslist/BookList';
import MyCart from '../components/mycart/MyCart';
import OrderSuccessful from '../components/orderSuccessful/OrderSuccessful';
import QuickView from '../components/quickview/QuickView';
import Wishlist from '../components/wishlist/Wishlist';
import Signup from '../pages/signup/Signup';

function Router1() {
    return (
        <div>
       

            <Router>
                <Routes>
                    <Route exact path="/" element={<Account />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/booklist" element={<BookList />} />
                    {/* <Route path="/quickview" element={<QuickView />} /> */}
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/mycart" element={<MyCart />} />
                    <Route path="/ordersuccessful" element={<OrderSuccessful />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Router1