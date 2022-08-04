import React, { useState } from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Books.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bookimg from '../Images/Image11.png'

function Books(props) {

   // const [editBooks, setEditBooks] = useState({ bookName: '', author: '', price: '', discountPrice: '' })

    //console.log(props, "render book");

    return (
        <div className='booksMain' onClick={()=>{props.nextPage(props.book)}}>

            <div className='totalBooks'>
                <div className=''>
                    <div className=''>
                        <Card sx={{ width: 230 }}>
                            <div className='bookimgsec'>
                                <CardMedia
                                    sx={{ maxWidth: 150, maxHeight: 200 }}
                                    component="img"
                                    alt="green iguana"
                                    image={bookimg}
                                />
                            </div>
                            <div className='bookInfo'>
                                <CardContent>
                                    
                                    <Typography>
                                        <div className='bookTitle'>{props.book.bookName}</div>
                                    </Typography>
                                    
                                    <Typography className='' color="text.secondary">
                                        <div className='auther'>{props.book.author}</div>
                                    </Typography>
                                    
                                    <Typography className='rating'>
                                        <div className='star'>4.5 *</div>
                                        <div className='price'  >(20)</div>
                                    </Typography>

                                    <Typography className='bothPrice'>
                                        <div className=''>Rs.{props.book.price}</div>
                                        <del>
                                            <div className='price'>Rs.{props.book.discountPrice}</div>
                                        </del>
                                    </Typography>

                                </CardContent>
                            </div>

                        </Card>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Books