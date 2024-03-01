"use client"
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useRouter } from "next/navigation";

const CustomInput = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const router = useRouter();
    
    const handleLogin = () => {
        axios.post('https://crm-sales-api-dev.web-xperts.xyz/api/v1.0.0/auth/login', {email, password})
            .then(response => {
                console.log('login successful')
                router.push('/SignUp');
            })
            .catch(error => {
                console.log("login failed ", error.message)
            })
    };
                                                                 
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto', marginTop: '100px' }}>
            <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '300px', marginBottom: '10px' }} // Adjust width and margin as needed
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '300px', marginBottom: '10px' }} 
            />
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
            </Button>
        </div>
    );
};

export default CustomInput;
