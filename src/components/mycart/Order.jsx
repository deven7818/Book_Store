import { Button, CardMedia, Typography } from '@mui/material';
import React from 'react'

import bookimg from '../Images/Image11.png'
import './MyCart.css';

function Order() {
  return (
    <div>
       {/* ...................Order Summery............. */}
       
       <div className=''>
                <div className='ordersummery'>
                    <div className='titleLocation'>
                        <h4>Order Summery</h4>
                    </div>
                    <div className='bookdetails'>
                        <div className=''>
                            <CardMedia
                                sx={{ maxWidth: 80, maxHeight: 130 }}
                                component="img"
                                alt="green iguana"
                                image={bookimg}
                            />
                        </div>
                        <div className='bookInfo'>
                            <Typography className='' >
                                <div className=''>Don't Make Me Think</div>
                            </Typography>
                            <Typography className='' color="text.secondary">
                                <div className=''>by stive krug</div>
                            </Typography>
                            <Typography className='bothPrice'>
                                <div className=''>Rs.1500</div>
                                <del>
                                    <div className='lightTitle'>Rs.2000</div>
                                </del>
                            </Typography>


                        </div>

                    </div>
                    <div className='placeorder checkoutbtn'>
                        <Button variant="contained" >Checkout</Button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Order
