import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import bookimg from '../Images/Image11.png'
import { Button, CardMedia } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { getCartItem, updateApi } from '../../service/dataservice';

function Cart(props) {

    console.log(props.item , "single item at cart");

    const [addItem, setAddItem] = useState([])

    const [quantityAdd, setQuantityAdd] = useState([])

    const [getCartDetails, setGetCartDetails] = useState([])

    
    // //Get cart item with filter method
    // const GetCartItem = () => {
    //     getCartItem().then((response) => {
    //         console.log(response);
    //         setAddItem(response.data.result)


    //         let filter = [];
    //         //console.log(props.book._id);
    //         filter = response.data.result.filter((cart) => {
    //             console.log(cart);
    //             // if (cart.product_id._id === book._id) {
    //             // console.log(cart);
    //             setAddItem(cart)
    //             setQuantityAdd(cart.quantityToBuy)
    //             return cart;

    //             // }


    //         }
    //         )

    //         setGetCartDetails(filter)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }
  
    // useEffect(() => {
    //     //  addToCart()
    //     GetCartItem()
    //     // getBookforCart()
    // }, [])

    return (
        <div className='cart'>
            <div className=''>
                <CardMedia
                    sx={{ maxWidth: 100, maxHeight: 150 }}
                    component="img"
                    alt="green iguana"
                    image={bookimg}
                />
            </div>
            <div className='bookInfo'>
                <Typography className='' >
                    <div className=''>{props.item.product_id.bookName}</div>
                </Typography>
                <Typography className='' color="text.secondary">
                    <div className=''>{props.item.product_id.author}</div>
                </Typography>
                <Typography className='bothPrice'>
                    <div className=''>Rs.1500</div>
                    <del>
                        <div className='lightTitle'>Rs.2000</div>
                    </del>
                </Typography>

                {/* <div>
                    {addToBag(props.addItem)}
                </div> */}
                <div className='addremovebtns'>
                    <Button variant="" color="text.secondary" ><RemoveCircleOutlineOutlinedIcon onClick={props.increment}/>
                        <AddCircleOutlineOutlinedIcon onClick={props.decrement}/>
                    </Button>
                    <Button variant="" color="text.secondary" >Remove</Button>
                </div>


            </div>
        </div>
    )
}

export default Cart
