import React from 'react'
import {useSelector} from 'react-redux'
import CardCheck from './Cards/CardCheck'
const Checkout = () => {
    const existingCartItem=useSelector((state) =>state.cartReducer);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

      {existingCartItem.map((item, index) => (
        <CardCheck key={index} item={item} />
      ))}

      {/* Add total amount or additional checkout information here */}
    </div>
  )
}

export default Checkout
