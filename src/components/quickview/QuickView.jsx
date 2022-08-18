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
import { addToBagApi, addTowishlistApi, getCartItem, getWishlistItem, updateApi } from '../../service/dataservice';
import Header from '../header/Header';

function QuickView(props) {

    const [addItem, setAddItem] = useState([])

    const [quantityAdd, setQuantityAdd] = useState([])

    const [getCartDetails, setGetCartDetails] = useState([])

    const [wishlistId, setWishlistId] = useState()




    //add item to bag api
    const addbagbtn = () => {
        let data = props.book._id;
        addToBagApi(data).then((response) => { 
            console.log(response); 
        }).catch((error) => { 
            console.log(error);
         })
    }

    //add item to wishlist api
    const addToWishlist = () => {
        let data = props.book.id;
        addTowishlistApi(data).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    //get wishlist item
    const AddToWishlist = () => {
        getWishlistItem().then((response) => {
            console.log(response);
            setWishlistId(response.data.result._id)
            console.log(response.data.result.product_id);
        }).catch((error) => {
            console.log(error);
        })
    }

    //Get cart item with filter method
    const GetCartItem = () => {
        getCartItem().then((response) => {
            console.log(response);
            let filter = [];
             filter = response.data.result.filter((cart) => {
                if (cart.product_id._id === props.book._id) {
                    console.log(cart);
                    setAddItem(cart._id)
                    setQuantityAdd(cart.quantityToBuy)
                    return cart;

                }

                // console.log(cart);
            })

            setGetCartDetails(filter)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        //  addToCart()
        GetCartItem()
        // getBookforCart()
    }, [])
    ////increment cart item
    const increment = () => {
        console.log(quantityAdd);
        let cartIdInc = {
            id: addItem,
            quantityToBuy: quantityAdd + 1
        }
        console.log(cartIdInc);
        updateApi(cartIdInc).then((response) => {
            console.log(response);
            GetCartItem()
        }).catch((error) => console.log(error))
    }
    console.log(addItem);


    ////decrement cart item
    const decrement = () => {

        let cartIdInc = {
            id: addItem,

            quantityToBuy: quantityAdd - 1
        }
        console.log(cartIdInc);
        updateApi(cartIdInc).then((response) => {
            console.log(response);
            GetCartItem()
        }).catch((error) => console.log(error))
    }

    /////

    const addToCart = () => {
        let data = props.book._id
        console.log(data);
        console.log(addItem);
        addToBagApi(data).then((response) => {
            console.log(response, "add data to cart");
            // setAddItem(response.data.result)
            // console.log(response.data.result);

        }).catch((error) => {
            console.log(error);
        })
    }
 

    //wishlist
    useEffect(() =>{
        AddToWishlist()
    },[])


    //for add to cart conditional buttons
    const addToBag = (addItem) => {
        return (
            <>
                {(addItem === 0) ? (

                    <Button variant="contained" color='error' onClick={addbagbtn} >Add to Bag</Button>
                ) : (
                    <Button variant="" ><RemoveCircleOutlineOutlinedIcon onClick={decrement} />{quantityAdd}
                        <AddCircleOutlineOutlinedIcon onClick={increment} /></Button>

                )}
            </>

        )
    };

    return (
        <div>
            <div>
                {/* <Header /> */}
            </div>
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
                            {addToBag(addItem)}
                        </div>
                        <div>
                           {
                            (wishlistId) ?
                            <Button onClick={addToWishlist} variant="contained" color='error'
                                sx={{ color: 'white', backgroundColor: 'black' }}>
                                <FavoriteIcon />Wishlist
                            </Button> :
                            <FavoriteIcon />
                           }
                        </div>
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
                                    <div className=''>{props.book.description}</div>
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
                                    <Button variant="contained" color='primary'>Submit</Button>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default QuickView
