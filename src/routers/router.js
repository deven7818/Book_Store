
import React from 'react'
//import { BrowserRouter , Route, Switch } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Account from '../components/account/Account';
import BookList from '../components/bookslist/BookList';
import QuickView from '../components/quickview/QuickView';
import Signup from '../pages/signup/Signup';

function Router1() {
    return (
        <div>
            {/* <BrowserRouter>
                <Switch>
                     <Route exact path="/" component={Signin}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/dashboard" component={Dashboard}/> 
                </Switch>
                </BrowserRouter > */}

            <Router>
                <Routes>
                    <Route exact path="/" element={<Account />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/booklist" element={<BookList />} />
                    <Route path="/quickview" element={<QuickView />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Router1