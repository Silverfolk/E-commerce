import React, { useEffect, useState } from 'react'
import getItems from '../Utils/getItems';

import Card from './Cards/Card';
const Body = () => {
    const [AllItems,setAllItems] =useState([]);
    useEffect(() =>{
     getItems(setAllItems);
    },[]);
    return (
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {AllItems.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      );
}

export default Body
