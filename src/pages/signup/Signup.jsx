import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { signUpService } from '../../service/userservice';
import "./Signup.css";


const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobRegex = /^\+[0-9]{2}-[0-9]{10}$/;

function Signup(props) {

    const [signupObj, setSignupObj] = useState({ fullName: '', email: '', password: '', mobileNumber: '' });
    const [regexObj, setRegexObj] = useState({
        fnameBorder: false, fnameHelper: '',
        emailBorder: false, emailHelper: '',
        passwordBorder: false, passwordHelper: '',
        mobileBorder: false, mobileHelper: ''
    });

    const takeFullName = (event) => {
        setSignupObj((prevState) => ({ ...prevState, fullName: event.target.value }));
    }

    const takeEmail = (event) => {
        setSignupObj((prevState) => ({ ...prevState, email: event.target.value }));
    }

    const takePassword = (event) => {
        setSignupObj((prevState) => ({ ...prevState, password: event.target.value }));
    }

    const takeMobileNumber = (event) => {
        setSignupObj((prevState) => ({ ...prevState, mobileNumber: event.target.value }));
    }

    const submit = () => {
        let fNameTest = fnameRegex.test(signupObj.fullName);
        let emailTest = emailRegex.test(signupObj.email);
        let passwordTest = passwordRegex.test(signupObj.password);
        let mobileTest = mobRegex.test(signupObj.mobileNumber);

        if (fNameTest === true) {
            setRegexObj((prevState) => ({ ...prevState, fnameBorder: false, fnameHelper: '' }))
        }
        else if (fNameTest === false) {
            setRegexObj((prevState) => ({ ...prevState, fnameBorder: true, fnameHelper: 'Enter Full Name' }))
        }

        if (emailTest === true) {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: '' }))
        }
        else if (emailTest === false) {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: 'Enter Email' }))
        }

        if (passwordTest === true) {
            setRegexObj((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: '' }))
        }
        else if (passwordTest === false) {
            setRegexObj((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: 'Enter password' }))
        }

        if (mobileTest === true) {
            setRegexObj((prevState) => ({ ...prevState, mobileBorder: false, mobileHelper: '' }))
        }
        else if (mobileTest === false) {
            setRegexObj((prevState) => ({ ...prevState, mobileBorder: true, mobileHelper: 'Enter Mobile Number' }))
        }

        if(fNameTest === true && emailTest === true && passwordTest === true && mobileTest === true){
            signUpService(signupObj).then((response) => {
                console.log(response);
                localStorage.setItem('token',response.data.id)
            }).catch((error) => {
                console.log(error);
            })
        }
        console.log(signupObj);
    }


    return (
        <div className='upmain'>
            <div className='uppagename'>
                <p onClick={() => props.listenToSignup()}>LOGIN</p>
                <p onClick={() => props.listenToLogin()}>SIGNUP</p>
            </div>

            <div className="upinputBoxDiv">
                <TextField
                    onChange={takeFullName}
                    error={regexObj.fnameBorder} helperText={regexObj.fnameHelper}
                    id="outlined-basic" label="Full Name"
                    variant="outlined" size='small'
                    className="uptextBox"
                />
                <TextField
                    onChange={takeEmail}
                    error={regexObj.emailBorder} helperText={regexObj.emailHelper}
                    type='email'
                    id="outlined-basic" label="Email"
                    variant="outlined" size='small'
                    className="uptextBox"
                />
                <TextField
                    onChange={takePassword}
                    error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}
                    id="outlined-basic" label="Password"
                    type='password'
                    variant="outlined" size='small'
                    className="uptextBox"

                />
                <TextField
                    onChange={takeMobileNumber}
                    error={regexObj.mobileBorder} helperText={regexObj.mobileHelper}
                    id="outlined-basic" label="Mobile Number"
                    type='text'
                    variant="outlined" size='small'
                    className="uptextBox"
                />

            </div>
            <div className='btnstyle'>
                <Button onClick={submit} className='signupbtn' color="error" variant="contained">Signup</Button>
            </div>
        </div>
    )
}

export default Signup
