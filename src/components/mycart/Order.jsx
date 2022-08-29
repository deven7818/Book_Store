import React, { useEffect, useState } from 'react'
import { getCartItem, orderSummaryApi } from '../../service/dataservice';
import { useNavigate } from "react-router-dom";
import bookimg from '../Images/Image11.png'
import { Button, CardMedia, Typography } from '@mui/material';

function OrderSummary() {
    const navigate = useNavigate();
    // console.log("first",props.bookDetails)
    const [cartMain, setCartMain] = useState([]);

    const orderCheckout = () => {
        const orders = [];
        for (let i = 0; i < cartMain.length; i++) {
            orders.push({
                "product_id": cartMain[i].product_id._id,
                "product_name": cartMain[i].product_id.bookName,
                "product_quantity": cartMain[i].product_id.quantity,
                "product_price": cartMain[i].product_id.discountPrice,
            })
        }
        console.log(orders);
        orderSummaryApi(orders).then((response) => { console.log(response); navigate('/OrderSuccess') }).catch((error) => { console.log(error) })
    }
    console.log(cartMain)

    useEffect(() => {
        getCartItem().then((response) => { console.log(response); setCartMain(response.data.result); }).catch((error) => { console.log(error); });
    }, [])
    return (
        <div className='container'>
            <div className='orderSummary'>
                <div className=''>
                    <div className='titleLocation'>
                        <h4>Order Summary</h4>
                    </div>
                    {cartMain.map((cart) => (
                        <div className='orderBook' >
                            <div className='orderBookInfo'>
                                <CardMedia
                                    sx={{ maxWidth: 100, maxHeight: 150 }}
                                    component="img"
                                    alt="green iguana"
                                    image={bookimg}
                                />
                                <div className='orderBookDetails'>
                                    <Typography >{cart.product_id.bookName}</Typography>
                                    <Typography>by {cart.product_id.author}</Typography>
                                    <Typography>Rs.{cart.product_id.discountPrice}</Typography>
                                    <Typography>(RS.{cart.product_id.price})</Typography>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    <div className='btnCheckOut'>
                        <Button variant="contained" onClick={orderCheckout}>CheckOut</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary