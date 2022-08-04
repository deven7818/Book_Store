import React, { useEffect, useState } from 'react'

import './QuickView.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import bookimg from '../Images/Image11.png'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

import TextareaAutosize from '@mui/material/TextareaAutosize';

function QuickView(props) {


    // const [viewBooks, setViewBooks] = useState({ bookName: '', author: '', price: '', discountPrice: '', description: '' })

    // console.log(props, "book list");

   
    return (
        <div className=' container quickview'>
            <div className='smallImg'>
                <div className='bookimgsec'>
                    <CardMedia
                        sx={{ maxWidth: 30, maxHeight: 40 }}
                        component="img"
                        alt="green iguana"
                        image={bookimg}
                    />
                </div>
            </div>
            <div className=''>
                <Card sx={{ width: 350, height: 350 }}>
                    <div className='bookimgsec'>
                        <CardMedia
                            sx={{ width: 230, height: 300 }}
                            component="img"
                            alt="green iguana"
                            image={bookimg}
                        />
                    </div>
                </Card>
                <div className='addbtn'>
                    <div>
                    <Button variant="contained" color='error'>Add to Bag</Button>
                    <Button variant="" ><RemoveCircleOutlineOutlinedIcon />count <AddCircleOutlineOutlinedIcon /></Button>
                    </div>
                    <Button variant="contained" color='error'
                        sx={{ color: 'white', backgroundColor: 'black' }}>
                        <FavoriteIcon />Wishlist</Button>
                </div>
            </div>
            <div className='bookViewDetails'>
                <Card >

                    <div className='aboutBook'>
                        <CardContent>

                            <Typography>
                                <div className=''>{props.book.bookName}</div>
                            </Typography>

                            <Typography className='aboutBook' color="text.secondary">
                                <div className=''>{props.book.author}</div>
                            </Typography>

                            <Typography className='ratingdetails'>
                                <div className='rateStar'>4.5 *</div>
                                <div className='lightTitle'>(20)</div>
                            </Typography>

                            <Typography className='bothPrice'>
                                <div className=''>Rs.{props.book.discountPrice}</div>
                                <del>
                                    <div className='lightTitle'>Rs.{props.book.price}</div>
                                </del>
                            </Typography>

                        </CardContent>
                    </div>

                </Card>

                <Card >
                    <div className=''>
                        <CardContent>

                            <Typography>
                                <div className=' lightTitle'>Book Detail</div>
                            </Typography>

                            <Typography className='aboutBook' color="text.secondary">
                                <div className=''>{props.book.description }</div>
                            </Typography>

                        </CardContent>
                    </div>
                </Card>
               
                    <div className='feedback'>
                        <CardContent>

                            <Typography>
                                <div className=''>Customer Feedback</div>
                            </Typography>
                        </CardContent>
                    </div>
                
                    <Card>
                    <div className='overallRate'>
                        <CardContent>
                            <Typography className='' >
                                <div className='overall'>Overall reting</div>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={2}
                                    placeholder="Write your review"
                                    style={{ width: 500 }}
                                />
                                
                            </Typography>
                            <div className='submitBtn'>
                            <Button  variant="contained" color='primary'>Submit</Button>
                            </div>
                        </CardContent>
                    </div>
                    </Card>
            </div>

        </div>
    )
}

export default QuickView
