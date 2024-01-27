import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../Store/userSlice';
import { deleteCart } from '../Store/cartSlice';
import { FaShoppingCart } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer);

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(removeUser());
    dispatch(deleteCart());
    navigate('/login');
  };

  return (
    <div className='flex flex-row justify-between pl-4 pr-4 pt-2 bg-blue-900'>
      {/* Logo */}
      {/* <FaShoppingCart /> */}
      {/* <IoLogOut/> */}
      <div>
        <h1 onClick={() => navigate('/')} className='text-white font-bold text-4xl mb-2'>
          Ecommerce
        </h1>
      </div>

      {/* cart */}
      <div className='flex flex-row justify-around'>
        {user ? (
          <div>
            <button
              className='text-white font-bold text-2xl mb-2   rounded-lg pl-2 pr-2 pb-1'
              onClick={logout}
            >
              <IoLogOut size={36} className='pt-2'/>
            </button>
            <button
              className='text-white font-bold text-2xl mb-2 ml-2  rounded-lg pl-2 pr-2 pb-1'
              onClick={() => navigate('/cart')}
            >
              <FaShoppingCart />
            </button>
          </div>
        ) : (
          <div>
            <button
              className='text-white font-bold text-2xl mb-2  rounded-lg pl-2 pr-2 pb-1'
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button
              className='text-white font-bold text-2xl mb-2 ml-2  rounded-lg pl-2 pr-2 pb-1'
              onClick={() => navigate('/signup')}
            >
              Signup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
