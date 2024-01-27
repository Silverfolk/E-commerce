// CardComponent.jsx

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { addCard, deleteCard, updateCart } from '../../Store/cartSlice';

const Card = (props) => {
  const { id, image, price, rating, title } = props.item;
  const [count, setCount] = useState(0);
  const existingCartItem = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const decreaseCount = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  const addToCart = () => {
    const newitemObject = { id, image, price, rating, title, count };
    const existingItem = existingCartItem.find((item) => item.id === newitemObject.id);

    if (existingItem) {
      const updatedCartItems = existingCartItem.map((item) =>
        item.id === existingItem.id ? { ...item, count: item.count + count } : item
      );
      dispatch(updateCart(updatedCartItems));
    } else {
      dispatch(addCard(newitemObject));
    }

    setCount(0);
  };

  return (
    <div className="max-w-md rounded w-80 overflow-hidden shadow-lg m-4">
      <img className="w-68 h-56  pl-12 pr-12" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{`Price: $${price}`}</p>
        <p className="text-gray-700 text-base">{`Rating: ${rating.rate}/5`}</p>
      </div>
      <div className="px-6 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <FaPlus className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={() => setCount(count + 1)} />
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-2">
            Amount: {count}
          </span>
          <FaMinus className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={decreaseCount} />
        </div>
        <div onClick={addToCart} className="bg-yellow-500 rounded-full px-4 py-2 cursor-pointer text-white">
          Add To Cart
        </div>
      </div>
    </div>
  );
};

export default Card;
