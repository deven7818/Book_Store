import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import bookimg from '../Images/Image11.png'
import Header from '../header/Header';
import DeleteIcon from '@mui/icons-material/Delete';
import './Wishlist.css';

function Wishlist(props) {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='container'>
                <div className='wishMain'>
                    <div className='wish_header'>
                        <h4>My Wishlist</h4>
                    </div>

                    <div className='imgbook'>
                        <div className='details'>
                            <Card className='carddata' sx={{ width: 150, height: 200 }}>
                                <div className='bookimg'>
                                    <CardMedia
                                        sx={{ width: 100, height: 150 }}
                                        component="img"
                                        alt="green iguana"
                                        image={bookimg}
                                    />
                                </div>
                            </Card>


                            <div className='booktitle'>
                                <CardContent>

                                    <Typography>
                                        <div className=''>as</div>
                                    </Typography>

                                    <Typography className='autherName' >
                                        <div className=''>sfsfs</div>
                                    </Typography>

                                    <Typography className='detailprice'>
                                        <div className=''>Rs</div>
                                        <del>
                                            <div className='autherName'>Rs.ad</div>
                                        </del>
                                    </Typography>

                                </CardContent>
                            </div>

                        </div>

                        <div className='delicon'>
                            <DeleteIcon />
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Wishlist