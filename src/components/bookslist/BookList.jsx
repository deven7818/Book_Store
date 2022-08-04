import React, { useEffect, useState } from 'react'
import { getBooksList } from '../../service/dataservice';
import Books from '../books/Books';
import QuickView from '../quickview/QuickView';
import './BookList.css';

function BookList() {

    const [books, setBooks] = useState([])

    const [currentBook, setCurrentBook] = useState({})

    const [view, setView] = useState(true)


    const nextPage = (book) => {
         setCurrentBook(book); setView(!view);
        console.log('hetiyo')
    }

    const viewone = (view) => {
        return (
            <>
                {view ? (
                    <>
                        <h4 className='container bookHeading'>Books</h4>
                        <div className="container bookslist ">
                            {books.map((book) => (<Books nextPage={nextPage} key={book._id} book={book} />))}
                        </div>
                    </>

                ) : (
                    <QuickView book={currentBook} />
                )}
            </>
        );
    };


    const getBooks = () => {
        getBooksList().then((response) => {
            //console.log(response, "rendering data");
            setBooks(response.data.result)
            // console.log(response.data.result);


        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getBooks()
    }, [])
    //console.log("hello", books)

    return (
        <>
            {viewone(view)}
        </>
    )
}

export default BookList