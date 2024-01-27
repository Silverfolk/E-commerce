import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { deleteCard, updateCart } from '../../Store/cartSlice';
import { useSelector,useDispatch} from 'react-redux';

const CardCheck = (props) => {
  const { id, image, price, rating, title, count } = props.item;

  const CartItem=useSelector((state) =>state.cartReducer);
  const dispatch = useDispatch();
  const index = props.index;
  const calculateTotal = () => {
    return price * count;
  };
  const dispatcher = useDispatch();
  const updateCartHandlerAdd = () => {
    const updatedCartItems = CartItem.map((item) =>
        item.id === props.item.id ? { ...item, count: item.count + 1 } : item
      );

      dispatch(updateCart(updatedCartItems));
  }
  const updateCartHandlerSub = () => {
    if(count<=1){
      dispatcher(deleteCard(index));
      return ;
   }
    const updatedCartItems = CartItem.map((item) =>
      item.id === props.item.id? {...item, count: item.count - 1 } : item
    );
    dispatch(updateCart(updatedCartItems));
  }
  const removeTask = (index) => {
    dispatcher(deleteCard(index));
  };

  return (
    <div className="flex flex-col md:flex-row border p-4 mb-4">
      <img className="w-full md:w-1/4 h-auto mb-4 md:mb-0" src={image} alt={title} />

      <div className="flex flex-col md:ml-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{`Price: $${price}`}</p>
        <p className="text-gray-700">{`Rating: ${rating.rate}/5`}</p>
        <p className="text-gray-700">{`Amount: ${count}`}</p>
        <p className="text-gray-700">{`Total: $${calculateTotal()}`}</p>
      </div>

      <div className="flex flex-row justify-between items-center mt-2 md:mt-0">
        <FaPlus
          className="cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={ updateCartHandlerAdd}
        />
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-2">
          Amount: {count}
        </span>
        <FaMinus
          className="cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={updateCartHandlerSub}
        />
      </div>

      <button
        className="text-red-500 hover:text-red-700 mt-2 md:mt-0 md:ml-2"
        onClick={() => removeTask(index)}
      >
        Remove
      </button>
    </div>
  );
};

export default CardCheck;
