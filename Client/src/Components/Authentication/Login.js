import React, { useState } from 'react';
import { login } from '../../Utils/Authentication';
import {useNavigate} from 'react-router-dom';

import { useDispatch,useSelector } from'react-redux';
import Navbar from '../Navbar';
import { addUser } from '../../Store/userSlice';
const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user =useSelector((state) =>{ return state.authReducer});
   
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  if(user){
    navigate('/');
    return;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation here before submitting or handle the form data as needed
    console.log('Form Data:', formData);
    const data=await login(formData); // Assuming you have a login function in your Authentication module
   
   
    if(data.status === 200){
      dispatch(addUser(data?.data));
      localStorage.setItem('token',data?.data?.token);
      navigate('/');
    }
    else{
       window.alert(data.response.data.message);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            minLength="8"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@]{8,}$"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
