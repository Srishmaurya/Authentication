import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };
  const handleClear = (e) => {
    e.preventDefault();
    setFirstName('');
    setLastName('');
    setUserName('');
    setPassword('');
    setPhone('');
    setGender('');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
      phone: phone,
      gender: gender
    };
    try {
      const response = await axios.post('http://localhost:3005/signup', data);
      console.log(response);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeFirstName} value={firstName} placeholder="First Name" type="text" />
        <br />
        <input onChange={handleChangeLastName} value={lastName} placeholder="Last Name" type="text" />
        <br />
        <input onChange={handleChangeUserName} value={userName} placeholder="User Name" type="text" />
        <br />
        <input onChange={handleChangeEmail} value={email} placeholder="Email" type="text" />
        <br />
        <input onChange={handleChangePassword} value={password} placeholder="Password" type="text" />
        <br />
        <input onChange={handleChangePhone} value={phone} placeholder="Phone" type="text" />
        <br />
        <input onChange={handleChangeGender} value={gender} placeholder="Gender" type="text" />
        <br />
        <button type="submit">Submit</button>
        <button onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
}

export default Form;
