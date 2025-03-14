import React, { useEffect, useState } from "react";
import Navbar1 from "../../../component/user/navbar/navbar";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button } from "react-bootstrap";
import axios from "axios"
export default function Checkout(){
    const [infoPro,setInfopro]=useState([]);
    const [error, setError] = useState(false);
      const [false1,setFalse1]=useState(null);
    const[sum,setSum]=useState(0);
      const {register,handleSubmit,formState: {errors}}=useForm(); 
    
     let sum1=0;
    const getprod=async()=>{
        const token=localStorage.getItem("userToken");
        try{
            const response=await axios.get('https://ecommerce-node4.onrender.com/cart',
                
                {
                    headers :{Authorization:`Tariq__${token}` } 
                }
                           )
                           console.log(response.data.products);
                           setInfopro(response.data.products);
                           response.data.products.map((data)=>{
                            sum1 += data.details.finalPrice * data.quantity;
 
                           })
                           setSum(sum1);
 
        }catch(err){
            console.log("err    "+err);
        }
    }
    useEffect(()=>{
        getprod();  
    },[])
          const onSubmit=async(data) =>{
            const token=localStorage.getItem("userToken")
                try{
                     const response = await axios.post('https://ecommerce-node4.onrender.com/order',
                      data,
                      {
                        headers:{
                          Authorization: `Tariq__${token}`,
                          "Content-Type": "application/json"
                        }
                      }
                     );
                     console.log(response.data);
                     toast.success('success order');



                }catch(err){
                console.log(err);
                } 
    }
    return(
        <>
        <Navbar1/>
        <div className="container d-flex">
        <div className="w-50  w-sm-25">

                <h2 className="mt-3 ms-4 text-info">products in your cart:</h2>
                {infoPro.map((data)=>(
                   <div key={data._id} className="border m-3 shadow ">
                     <div className="p-6">
                        <img src={data.details.mainImage.secure_url} alt="" />
                        <p className="mx-3 text-info">{data.details.name}</p>
                        <div className="d-flex w-100  justify-content-around">
                             <div className="bg-warning p-3 mb-3 rounded-pill text-danger">price:{data.details.finalPrice}</div>
                             <div className="bg-warning p-3 mb-3 rounded-pill text-secondary">quantity:{data.quantity}</div>
                        </div>
                     </div>
                   </div>
   ))}
            <div className="w-50 ms-3 mb-5 border shadow-lg text-center"><h2 className=" bg-danger-subtle">total:{sum}$</h2></div>

        </div>

                 <div className="border pt-3 mt-4 ms-5 ps-5 h-50 shadow">
                 <Form className="" onSubmit={handleSubmit(onSubmit)}>
        <h2>Enter your details below </h2>
         
      {<div className="text-danger">{false1}</div> } 
      <FloatingLabel
        controlId="floatingInput1"
        label="address"
        className="mb-3"
       
      >
        <Form.Control type="text"  {...register("address",{required:"address is required"})} placeholder=" " />
       </FloatingLabel>
       

       <FloatingLabel
        controlId="floatingInput2"
        label="phone"
        className="mb-3"
       
      >
        <Form.Control type="text"  {...register("phone",{required:"phone is required"})} placeholder=" " />
 
      </FloatingLabel>
     
 
       <FloatingLabel
        controlId="floatingInput3"
        label="coupon"
        className="mb-3"
      
      >
        <Form.Control type="text"  {...register("coupon")} placeholder="" />
 
      </FloatingLabel>
       <Button variant="primary" type="submit">{error?<p>loading...</p>:<p>request</p>}
        </Button>   
      </Form>
                    
                 </div>
        </div>
        
        </>
    )

}