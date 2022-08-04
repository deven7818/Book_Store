import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Account from './components/account/Account';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Books from './components/books/Books';
import BookList from './components/bookslist/BookList';
import QuickView from './components/quickview/QuickView';
import Router1 from './routers/router';


function App() {
  return (
    <div className="App">
      {/* <Login />      */}
      {/* <Signup /> */}
      {/* <Header /> */}
      {/* <Footer /> */}
      {/* <Account /> */}
     
      {/* <Header /> */}
      {/* <BookList  />  */}
      {/* <QuickView /> */}
      {/* <Footer /> */}

        <Router1 />

    </div>
  );
}

export default App;
