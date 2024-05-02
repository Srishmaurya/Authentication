import React, { useState } from 'react';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleClear = (e) => {
        e.preventDefault();

        setEmail('');
        setPassword('');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        };
        try {
            const response = await axios.post('http://localhost:3005/login', data);
            console.log(response);
        } catch (error) {
            console.error('Error', error);
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>

                <input onChange={handleChangeEmail} value={email} placeholder="Email" type="text" />
                <br />
                <input onChange={handleChangePassword} value={password} placeholder="Password" type="text" />
                <br />
                <button type="submit">Submit</button>
                <button onClick={handleClear}>Clear</button>
            </form>
        </div>
    );
}

export default Login;
