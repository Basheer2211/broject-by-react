import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import Authlayout from './layout/authlayout/Authlayout'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Dashboardlayout from './layout/Dashboardlayout/Dashboardlayout'
import Regester from './page/user/user/register/Register';
import { ToastContainer, toast } from 'react-toastify';
import Login from './page/user/user/login/Login'
import Product from './page/user/user/product/Product'
import Categories from './page/user/user/categories/Categories'
import ProductOfCategories from './page/user/user/proDetails/ProDetails'
import ProDetails from './page/user/user/proDetails/ProDetails'
import Cart from './page/user/cart/Cart'
import PrtectRout from './component/user/navbar/ProtectRout'
import Profile from './page/user/user/prfile/Profile'
import Order from './page/user/user/prfile/Order'
import UserContextProvider from './component/user/context/Usercontext'
import Checkout from './page/user/checkout/Checkout'
import Info from './page/user/user/prfile/Info'
import Home from './page/home/Home'
import Forget from './page/user/forget/Forget'
import React from 'react'
import Image from './page/user/user/prfile/Image'
import SendCode from './page/user/forget/SendCode'
import Ss from './page/user/user/prfile/Ss'
 

 
function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    
    {
      path:"/",
      element:<Authlayout/>,
      children:[
        {
          path:'SendCode',
          element:<SendCode/>
        },
       {
        path:'register',
        element:<Regester/>

        },
        {
          path:'Forget',
          element:<Forget/>

        } ,
        {
          path:'Login',
          element:<Login/>
        }
      ]
    },
    {
      path:'/Categories',
      element:<Categories/>
    },
    {
      path:'/productdetails/:productid',
      element:<ProDetails/>
    },{
      path:'/profile',
      element:<Profile/>,
      children:[{ 
        path:'order',
        element:<Order/>},
        {
           path:'',
           element:<Ss/>
        },
        {
          path:'info',
          element:<Info/>
        },
        {
          path:'image',
          element:<Image/>
        }
      ]
    }
    ,
    {
      path:'/Product',
      element:<Product/>
    },
    {
      path:'/Dashboard',
      element:<Dashboardlayout/>
    },
    {
    path:'/Cart',
  
    element:
    <PrtectRout>
    <Cart/>
    </PrtectRout>
    },
    {
      path:'/checkout',
      element:<Checkout/>
    }
  ]);
 
  return (
    <>
  
 
<UserContextProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </UserContextProvider>
     
    </>
  )
}

export default App;
