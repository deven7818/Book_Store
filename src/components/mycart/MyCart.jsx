import React, { useEffect, useState } from 'react'
import Header from '../header/Header';
import './MyCart.css';
import bookimg from '../Images/Image11.png'
import { Button, CardMedia, TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import Customerdetails from './Customerdetails';
import { addToBagApi, getCartItem, updateApi } from '../../service/dataservice';
import Cart from './Cart';



function MyCart(props) {

    const [addItem, setAddItem] = useState([])

    const [cart, setCart] = useState(true);

    const [quantityAdd, setQuantityAdd] = useState([])

    const [getCartDetails, setGetCartDetails] = useState([])

    
    // Customer Details button/page
    const customer = (cart) => {
        return (
            <>
                {cart ? (
                    <Button onClick={customerdetails} sx={{ padding: 1, margin: 2 }} placeorderbtn={placeorderbtn} variant="contained" >Place Order</Button>
                ) : (
                    <Customerdetails customerdetails={customerdetails} />
                )}
            </>
        )
    }


    const placeorderbtn = () => {
        setCart(!cart)
    }

    const customerdetails = () => {
        setCart(!cart)
    }



     //Get cart item with filter method
     const GetCartItem = () => {
        getCartItem().then((response) => {
            console.log(response);
            setAddItem(response.data.result)

            
            let filter = [];
            //console.log(props.book._id);
            filter = response.data.result.filter((cart) => {
                console.log(cart);
                // if (cart.product_id._id === book._id) {
                    // console.log(cart);
                    setAddItem(cart)
                    setQuantityAdd(cart.quantityToBuy)
                    return cart;

                // }

                 
            }
            )
            
           setGetCartDetails(filter)
        }).catch((error) => {
            console.log(error)
        })
    }
    console.log(addItem ,"add item");



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


       //add item to bag api
       const addbagbtn = () => {
        let data = props.book._id;
        addToBagApi(data).then((response) => { 
            console.log(response); 
        }).catch((error) => { 
            console.log(error);
         })
    }

    


 

    useEffect(() => {
        //  addToCart()
        GetCartItem()
        // getBookforCart()
    }, [])


    return (
        <div className=''>
            <div>
                <Header />
            </div>
            <div className='container'>
                <div className='mycartMain'>
                    <div className='titleLocation'>
                        <h4>My cart</h4>
                        <div className='location'>
                            <LocationOnIcon sx={{ color: 'red' }} />
                            <Typography className='' >
                                <div className=''>Use current location</div>
                            </Typography>
                        </div>
                    </div>
                    <div className='bookdetails'>
                        {addItem && addItem.map((item) => (
                            <Cart item={item} increment={increment} decrement={decrement} />
                        ))}
                        
                    </div>
                    {console.log(addItem,"add item at my cart")}
                    <div className='placeorder'>
                        {customer(cart)}
                    </div>





                </div>
            </div>
            {/* <Order /> */}
            {/* <Customerdetails /> */}
        </div>
    )
}

export default MyCart
