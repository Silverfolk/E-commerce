import React, { useState } from 'react';
import { register } from '../../Utils/Authentication';
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar';
const Register = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    contactnumber: '',
    password: '',
    confirmPassword: '',
  });

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
    if(formData.password !== formData.confirmPassword){
      window.alert("Passwords do not match");
      return;
    }
   const res=await register(formData);
   if(res.status === 201){
    navigate('/login');
    window.alert("User Successfully Registered");
  }
  else{
     console.log(res);
     window.alert(res.response?.data?.message);
  }
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto mt-8 p-4">
      <div className="mb-8 bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 rounded-md">
        <p className="font-semibold">Registration Instructions:</p>
        <ul className="list-disc pl-4">
          <li>Full Name - Can not be null</li>
          <li>Email - Validate Email</li>
          <li>Mobile No - Number type with a length of 10</li>
          <li>Password - Validation with a minimum length of 8 and alphanumeric</li>
          <li>Confirm Password - Must match with Password</li>
        </ul>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

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

        {/* Mobile No */}
        <div className="mb-4">
          <label htmlFor="contactnumber" className="block text-sm font-medium text-gray-600">
            Mobile No
          </label>
          <input
            type="tel"
            id="contactnumber"
            name="contactnumber"
            pattern="[0-9]{10}"
            value={formData.contactnumber}
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

        {/* Confirm Password */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            minLength="8"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@]{8,}$"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Sign Up
        </button>
      </form>
    </div>
    </>
  );
};

export default Register;
