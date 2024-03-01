"use client"
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';



const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSign = () => {

        const userData = {
            firstName  : firstName,
            lastName   : lastName,
            userName   : userName,
            email      : email,
            password   : password,
            phoneNumber: phoneNumber

        }

      axios.post('',userData)
      .then (response => {
     console.log('Register succesfull')
      })
      .catch(error =>{
        console.log('Register failed', error.message)
      })
        

        console.log('userDate', userData);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto', marginTop: '100px' }}>
            <TextField
                label="First Name"
                variant='outlined'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                margin='normal'
                style={{ width: '600px', marginBottom: '10px' }}
            />
            <TextField
                label="Last Name"
                variant='outlined'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                margin='normal'
                style={{ width: '600px', marginBottom: '10px' }}
            />

            <TextField
                label="User Name"
                variant='outlined'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                fullWidth
                margin='normal'
                style={{ width: '600px', marginBottom: '10px' }}

            />

            <TextField
                label="email"
                variant='outlined'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin='normal'
                style={{ width: '600px', marginBottom: '10px' }}

            />

            <TextField
                label="password"
                variant='outlined'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin='normal'
                style={{ width: '600px', marginBottom: '10px' }}

            />

            <TextField
                label="phoneNumber"
                variant='outlined'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fullWidth
                margin='normal'
                style={{ width: '600px', marginBottom: '10px' }}

            />

            <Button variant="contained" color="primary" onClick={handleSign} >SignUp</Button>
        </div>
    );
};

export default SignUp;
