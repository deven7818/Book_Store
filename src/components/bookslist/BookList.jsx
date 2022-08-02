import React, { useEffect, useState } from 'react'
import { getBooksList } from '../../service/dataservice';
import Books from '../books/Books';
import './BookList.css';

function BookList() {



    const [books, setBooks] = useState([])

    const getBooks = () => {
        getBooksList().then((response) => {
            console.log(response, "rendering data");
            setBooks(response.data.result)
            console.log(response.data.result);

        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getBooks()
    }, [])
    console.log("hello", books)

    return (
        <>
            <h4 className='container bookHeading'>Books</h4>
            <div className="container bookslist ">
                {books.map((book) => (<Books key={book._id} book={book} />))}
            </div>

        </>
    )
}

export default BookList