import React from 'react';
import Navbar from '../Navbar';
import { useSelector } from 'react-redux';

const UserDetails = () => {
  const userDetails = useSelector((state) => state.authReducer);

  // Assuming user details are present in 'user' property
  const { _id, fullname, email, contactnumber } = userDetails.user;

  return (
    <>
      <Navbar />

      <div className="container mx-auto mt-8 p-4">
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
          <div className="text-center p-4 bg-blue-900 text-white">
            <h2 className="text-2xl font-bold">{fullname}</h2>
            <p className="text-sm">{email}</p>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">User ID</label>
              <p className="text-gray-800">{_id}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">Contact Number</label>
              <p className="text-gray-800">{contactnumber}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
