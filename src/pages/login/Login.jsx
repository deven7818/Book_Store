import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import React, { useState } from 'react'
import { logIn, logInService } from '../../service/userservice';

import { useNavigate } from "react-router-dom";

import "./Login.css";


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Login(props) {

    let navigate = useNavigate();


    const [loginObj, setLoginObj] = useState({ email: '', passsword: '' });
    const [regObj, setRegObj] = useState({
        emailBorder: false, emailHelper: '',
        passwordBorder: false, passwordHelper: ''
    });

    const takeEmail = (event) => {
        setLoginObj((prevState) => ({ ...prevState, email: event.target.value }));
    }

    const takePassword = (event) => {
        setLoginObj((prevState) => ({ ...prevState, password: event.target.value }));
    }

    const submit = () => {

        let emailTest = emailRegex.test(loginObj.email);
        let passwordTest = passwordRegex.test(loginObj.password);


        if (emailTest === true) {
            setRegObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: '' }))
        }
        else if (emailTest === false) {
            setRegObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: 'Enter Email' }))
        }

        if (passwordTest === true) {
            setRegObj((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: '' }))
        }
        else if (passwordTest === false) {
            setRegObj((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: 'Enter Password' }))
        }

        if(emailTest === true && passwordTest === true){
            logInService(loginObj).then((response) => {
                console.log(response);
                localStorage.setItem('token',response.data.result.accessToken)
                navigate("/booklist")
        
              }).catch((error) => {
                console.log(error)
              })
        }
        console.log(loginObj);
    }

    return (
        <div className='main'>
            <div className='pagename'>
                <p onClick={() => props.listenToSignup()}>LOGIN</p>
                <p onClick={() => props.listenToLogin()}>SIGNUP</p>
            </div>

            <div className="">
                <TextField
                    onChange={takeEmail}
                    error={regObj.emailBorder} helperText={regObj.emailHelper}
                    id="outlined-basic" label="Email"
                    variant="outlined" size='small'
                    className="intextBox"
                />
                <TextField
                    onChange={takePassword}
                    error={regObj.passwordBorder} helperText={regObj.passwordHelper}
                    id="outlined-basic" label="Password"
                    type='password'
                    variant="outlined" size='small'
                    className="intextBox"
                />
            </div>

            <div className='logbtnstyle'>
                <Button onClick={submit} className='loginbtn' color="error" variant="contained">Login</Button>
            </div>
            <div className='pagename'>
                <p>OR</p>
            </div>
            <div className='optionbtn'>
                <Button className='optbtn' variant="contained">Facebook</Button>
                <Button className='optbtn'>Google</Button>
            </div>
        </div>
    )
}

export default Login
