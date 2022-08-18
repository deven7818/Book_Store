import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import bookimg from '../Images/Image11.png'
import { Button, CardMedia } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { deleteCartItem, getCartItem, updateApi } from '../../service/dataservice';

function Cart(props) {

    // console.log(props.item , "single item at cart");

    const [addItem, setAddItem] = useState([])


    const [item, setItem] = useState()

    const [quantityAdd, setQuantityAdd] = useState([])

    const [getCartDetails, setGetCartDetails] = useState([])


    //Get cart item with filter method
    const GetCartItem = () => {
        getCartItem().then((response) => {
            // console.log(response);
            // setAddItem(response.data.result)


            let filter = [];
            //console.log(props.book._id);
            filter = response.data.result.filter((cart) => {

                if (cart.product_id._id === props.item.product_id._id) {
                    //  console.log(cart ,'get cart item');
                    setItem(cart._id)
                    setQuantityAdd(cart.quantityToBuy)

                    return cart;
                }
            }
            )

            setGetCartDetails(filter)
        }).catch((error) => {
            console.log(error)
        })
    }


    const deleteItem = (id) => {
        let deleteData = { cartItemList: [id], isDeleted: true }
        deleteCartItem(deleteData).then((response) => {
            console.log(response);
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
            id: item,
            quantityToBuy: quantityAdd + 1
        }
        console.log(cartIdInc);
        updateApi(cartIdInc).then((response) => {
            console.log(response);
            GetCartItem()
        }).catch((error) => console.log(error))
    }
    // console.log(props.addItem);


    ////decrement cart item
    const decrement = () => {

        let cartIdInc = {
            id: item,
            quantityToBuy: quantityAdd - 1
        }
        console.log(cartIdInc);
        updateApi(cartIdInc).then((response) => {
            console.log(response);
            GetCartItem()
        }).catch((error) => console.log(error))
    }


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
                    {props.item.product_id.bookName}
                </Typography>
                <Typography className='' color="text.secondary">
                    {props.item.product_id.author}
                </Typography>
                <Typography className='bothPrice'>
                    Rs.1500

                    <del className='lightTitle'>Rs.2000</del>

                </Typography>

                {/* <div>
                    {addToBag(props.addItem)}
                </div> */}
                <div className='addremovebtns'>
                    <Button variant="" color="text.secondary" >
                        <RemoveCircleOutlineOutlinedIcon onClick={decrement} />
                        {quantityAdd
                        }
                        <AddCircleOutlineOutlinedIcon onClick={increment} />
                    </Button>
                    <Button variant="" onClick={() => deleteItem(props.item.product_id._id)} color="text.secondary" >Remove</Button>
                </div>


            </div>
        </div>
    )
}

export default Cart
