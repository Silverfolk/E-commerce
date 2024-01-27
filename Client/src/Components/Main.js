import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Landing from './Landing'
import Cart from './Cart'
import Login from './Authentication/Login'
import Register from './Authentication/Register';
import PrivateRoutes from '../Utils/PrivateRoutes'
const Main = () => {
    const approuter=createBrowserRouter([
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<Register/>
        },
        {
          element: <PrivateRoutes />,
      children: [
        { path: '/', element: <Landing /> },
        { path: '/cart', element: <Cart /> }
        // Add other protected routes here
      ]
        }
       
    ])
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  )
}

export default Main
