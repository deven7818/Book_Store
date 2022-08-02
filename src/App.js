import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Account from './components/account/Account';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Books from './components/books/Books';
import BookList from './components/bookslist/BookList';

function App() {
  return (
    <div className="App">
      {/* <Login />      */}
      {/* <Signup /> */}
      {/* <Header /> */}
      {/* <Footer /> */}
      {/* <Account /> */}
      <Header />
      <BookList  />
      <Footer />
    </div>
  );
}

export default App;
