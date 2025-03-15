import React, { useState,useEffect } from "react";
import Navbar1 from "../../../component/user/navbar/Navbar";
import axios from "axios";
import Footer from "../../../component/footer/Footer";
import './cart.css'

import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";

export default function Cart(){
  const[cart,setCart]=useState(null);
  const[load,setLoad]=useState(true);
  let index=0;
  const navigate=useNavigate();

  const getCart=async()=>{try{ 
    setLoad(true);
    const token=localStorage.getItem("userToken")
const response=await axios.get("https://ecommerce-node4.onrender.com/cart",
    {
        headers :{Authorization:`Tariq__${token}` } 
    }
   
)

console.log("r   "+JSON.stringify(response.data.products, ));
setCart(response.data.products)
  }catch(err){
    setLoad(true);
    console.log(err)
  }finally{
    setLoad(false);
  }
}
useEffect(() => {
    getCart();
},[]);

if (load) {
    return (
    <div className="d-flex justify-content-center align-items-center vh-100">

        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>

      );
    
  }
  const gotoorder = ()=>{
    navigate('/checkout');
  }
     const increase=async(data)=>{
      const token=localStorage.getItem("userToken")
      try{
        const response= await axios.patch('https://ecommerce-node4.onrender.com/cart/incraseQuantity',
          {productId:data}
          ,
          {   headers : {
            Authorization:`Tariq__${token}`
          }
        } )
        console.log(response)
        setCart(cartprev=>{
          return cartprev.map(item =>{
            if (item.productId==data) {
              return {...item ,quantity :item.quantity +1}
              
            }
            return item;
          })
        })
 
      }catch(err){
        

      }

     }

     const decrease=async(data)=>{
      const token=localStorage.getItem("userToken")
      try{
        const response= await axios.patch('https://ecommerce-node4.onrender.com/cart/decraseQuantity',
          {productId:data}
          ,
          {   headers : {
            Authorization:`Tariq__${token}`
          }
        } )
        console.log(response)
        setCart(cartprev=>{
          return cartprev.map(item =>{
            if (item.productId==data) {
              return {...item ,quantity :item.quantity -1}
              
            }
            return item;
          })
        })
 
      }catch(err){
        console.log(err)

      }
     }



  return (
    <>
      <Navbar1 />
      <div className="container   mt-5 p-5 shadow">
      <table border="1" >
      <thead>
        <tr>
       
      <th>IMG</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>increase</th>
        <th>decrease</th>
        <th>Total</th>
    </tr>
    </thead>
    
    {cart.map((data)=> 
 <tr key={data._id}>
 <td>
   <img
     src={data.details.mainImage.secure_url}
     alt={data.details.name}
     width="50"
   />
 </td>
 <td className="text-center">{data.details.name}</td>
 <td className="text-center">${data.details.finalPrice }</td>
 <td className="text-center">{data.quantity}</td>
 <td className="text-center"><button onClick={()=>increase(data.productId)}>+</button></td>
 <td className="text-center"><button onClick={()=>decrease(data.productId)} >-</button></td>
 <td className="text-center">${data.details.finalPrice * data.quantity}</td>
</tr>    
    )}
    

      </table>
      <div className="p-6">
      <button onClick={gotoorder}>Checkout</button>
      </div>
      </div>
      <div className="f1">
      <Footer/>
      </div>
    </>
  );
}