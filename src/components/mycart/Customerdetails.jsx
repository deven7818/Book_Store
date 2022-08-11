import React, { useState } from 'react'
import './MyCart.css';
import { Button, CardMedia, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Order from './Order';
import { customerDetailsApi } from '../../service/dataservice';



const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const mobileRegex = /^\+[0-9]{2}-[0-9]{10}$/;
const addressRegex = /^[A-Z]{1}[a-z]{2,}$/;
const citytownRegex = /^[A-Z]{1}[a-z]{2,}$/;
const stateRegex = /^[A-Z]{1}[a-z]{2,}$/;


function Customerdetails() {


    const [customerObj, setCustomerObj] = useState({ fullName: '', mobile: '', address: '', city: '', state: '' });
    const [regexObj, setRegexObj] = useState({
        fnameBorder: false, fnameHelper: '',
        mobileBorder: false, mobileHelper: '',
        addressBorder: false, addressHelper: '',
        cityBorder: false, cityHelper: '',
        stateBorder: false, stateHelper: ''
    });


    const takeFullName = (event) => {
        setCustomerObj((prevState) => ({ ...prevState, fullName: event.target.value }))
    }

    const takeMobileNumber = (event) => {
        setCustomerObj((prevState) => ({ ...prevState, mobile: event.target.value }))
    }

    const takeAddress = (event) => {
        setCustomerObj((prevState) => ({ ...prevState, address: event.target.value }))
    }

    const takeCityTown = (event) => {
        setCustomerObj((prevState) => ({ ...prevState, city: event.target.value }))
    }

    const takeState = (event) => {
        setCustomerObj((prevState) => ({ ...prevState, state: event.target.value }))
    }


    const submit = () => {
        let fNameTest = fnameRegex.test(customerObj.fullName);
        let mobileTest = mobileRegex.test(customerObj.mobile);
        let addressTest = addressRegex.test(customerObj.address);
        let cityTownTest = citytownRegex.test(customerObj.city);
        let stateTest = stateRegex.test(customerObj.state);


        if (fNameTest === true) {
            setRegexObj((prevState) => ({ ...prevState, fnameBorder: false, fnameHelper: '' }))
        }
        else if (fNameTest === false) {
            setRegexObj((prevState) => ({ ...prevState, fnameBorder: true, fnameHelper: 'Enter Full Name' }))
        }

        if (mobileTest === true) {
            setRegexObj((prevState) => ({ ...prevState, mobileBorder: false, mobileHelper: '' }))
        }
        else if (mobileTest === false) {
            setRegexObj((prevState) => ({ ...prevState, mobileBorder: true, mobileHelper: 'Enter mobile number' }))
        }

        if (addressTest === true) {
            setRegexObj((prevState) => ({ ...prevState, addressBorder: false, addressHelper: '' }))
        }
        else if (addressTest === false) {
            setRegexObj((prevState) => ({ ...prevState, addressBorder: true, addressHelper: 'Enter Address' }))
        }

        if (cityTownTest === true) {
            setRegexObj((prevState) => ({ ...prevState, cityBorder: false, cityHelper: '' }))
        }
        else if (cityTownTest === false) {
            setRegexObj((prevState) => ({ ...prevState, cityBorder: true, cityHelper: 'Enter City/Town' }))
        }

        if (stateTest === true) {
            setRegexObj((prevState) => ({ ...prevState, stateBorder: false, stateHelper: '' }))
        }
        else if (stateTest === false) {
            setRegexObj((prevState) => ({ ...prevState, stateBorder: true, stateHelper: 'Enter State' }))
        }

        if (fNameTest === true && mobileTest === true && addressTest === true && cityTownTest === true && stateTest === true) {
            customerDetailsApi(customerObj).then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.id)
            }).catch((error) => {
                console.log(error);
            })
        }
        console.log(customerObj);
    }

    const handleClick = () => {
        summery();
        submit();
    }


    const [order, setOrder] = useState(true);

    const ordersummery = (order) => {
        return (
            <>
                {order ? (
                    <Button onClick={handleClick} sx={{ padding: 1, margin: 2 }} variant="contained" orderbtn={orderbtn} >Continue</Button>
                ) : (
                    <Order summery={summery} />
                )}
            </>
        )
    }

    const orderbtn = () => {
        setOrder(!order)
    }

    const summery = () => {
        setOrder(!order)
    }

    return (
        <div>

            {/* ...................Customer details............. */}
            <div className=''>
                <div className='customerdetails'>
                    <div className='titleLocation'>
                        <h4>Customer details</h4>
                        <div className='addnewaddress'>
                            <Typography sx={{ color: 'red' }} className='' >
                                <div className=''>Add new Address</div>
                            </Typography>
                        </div>
                    </div>
                    <div className="inputfields">
                        <div className='namedetails'>
                            <TextField
                                onChange={takeFullName}
                                id="outlined-basic" label="Full Name"
                                variant="outlined" size='small'
                                className="textBox"
                            />
                            <TextField
                                onChange={takeMobileNumber}
                                id="outlined-basic" label="Mobile Number"
                                type='text'
                                variant="outlined" size='small'
                                className="textBox"
                            />
                        </div>
                        <div className='addressdetails'>
                            <TextField
                                onChange={takeAddress}
                                id="outlined-basic" label="Address"
                                type='text'
                                variant="outlined" size='larger'
                                className="addressbox"
                            />
                        </div>
                        <div className='namedetails'>
                            <TextField
                                onChange={takeCityTown}
                                id="outlined-basic" label="City/town"
                                variant="outlined" size='small'
                                className="textBox"
                            />
                            <TextField
                                onChange={takeState}
                                id="outlined-basic" label="State"
                                type='text'
                                variant="outlined" size='small'
                                className="textBox"
                            />
                        </div>
                    </div>

                    <div className='radiobtns'>
                        <FormControl>
                            <FormLabel className='radiotype' id="demo-row-radio-buttons-group-label">Type</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="home" control={<Radio />} label="Home" />
                                <FormControlLabel value="work" control={<Radio />} label="Work" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />

                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className='placeorder'>
                        {ordersummery(order)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Customerdetails
